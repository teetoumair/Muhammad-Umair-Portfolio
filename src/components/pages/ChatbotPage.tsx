import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import ChatBubble, { type ChatMessage } from '../ui/ChatBubble'
import { ArrowUpRightIcon } from '../ui/icons'
import heroImg from '../../assets/hero.webp'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`

const SYSTEM_PROMPT = `You are Muhammad Umair's AI portfolio assistant. You ONLY answer questions about Muhammad Umair — his skills, projects, experience, education, availability, and how to contact him. 

RULES:
1. ONLY discuss Muhammad Umair. If asked about anything else, politely redirect to topics about him.
2. Never make information. Only use the facts provided below.
3. Keep responses concise and friendly (2-4 sentences max unless details are needed).
4. Always be helpful and professional.

FACTS ABOUT MUHAMMAD UMAIR:
- Full name: Muhammad Umair (also known as Umair Shafi)
- Role: Product Developer
- Location: Lahore, Pakistan
- Education: BS Computer Science (in progress)
- Focus: Web front-end & iOS apps
- Looking for: Internships and junior roles

SKILLS (Daily Drivers):
- TypeScript & JavaScript
- React
- HTML & modern CSS
- Tailwind CSS
- Swift & SwiftUI
- Git & GitHub

CURRENTLY LEARNING:
- Node.js & Express
- PostgreSQL & SQL
- Supabase
- Testing (Vitest)

PROJECTS:
1. This portfolio website - Built from scratch with React, TypeScript, Tailwind CSS 4, Vite. Custom design system, responsive editorial layout.
2. Shared Expense Splitter - One product, two platforms. React web app + native SwiftUI companion app. Uses Supabase for shared backend.
3. Job Application Tracker - For students managing internship applications. REST API with filtering and search.
4. 4 Live Production Sites for Nextek Sol (Inc) - Real deployed sites serving real users.

CONTACT:
- Email: umairshafi.professional@gmail.com
- GitHub: github.com/teetoumair
- LinkedIn: linkedin.com/in/mohammad-umair-um/
- Usually replies within 24 hours

AVAILABILITY: Open to internships and junior developer roles, both remote and on-site.`

const TOPIC_CARDS = [
  { emoji: '🛠', label: 'Skills', query: 'What are his main skills?' },
  { emoji: '🚀', label: 'Projects', query: 'What projects has he built?' },
  { emoji: '💼', label: 'Availability', query: 'Is he available for work?' },
  { emoji: '📬', label: 'Contact', query: 'How can I contact him?' },
]

const QUICK_SUGGESTIONS = [
  'What does he do?',
  'His tech stack',
  'Education',
  'Show me his GitHub',
]

function TypingIndicator() {
  return (
    <div className="chat-msg flex justify-start">
      <div className="flex items-start gap-2.5">
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-accent/15">
          <img src={heroImg} alt="AI" className="h-full w-full rounded-full object-cover object-top" />
        </div>
        <div className="rounded-2xl rounded-bl-md bg-white/10 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-paper/40" style={{ animationDelay: '0ms' }} />
            <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-paper/40" style={{ animationDelay: '150ms' }} />
            <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-paper/40" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function WelcomeScreen({ onSelect }: { onSelect: (query: string) => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-accent/30 bg-accent/10 shadow-lg shadow-accent/10">
        <img src={heroImg} alt="AI Assistant" className="h-full w-full rounded-full object-cover object-top" />
      </div>
      <h2 className="font-display text-xl font-bold tracking-tight text-paper sm:text-2xl md:text-3xl">
        Hi, I'm Umair's AI assistant
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/40">
        Ask me anything about Muhammad Umair's skills, projects, experience, or how to get in touch.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {TOPIC_CARDS.map((card) => (
          <button
            key={card.label}
            type="button"
            onClick={() => onSelect(card.query)}
            className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition-all hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/5"
          >
            <span className="text-2xl">{card.emoji}</span>
            <span className="text-xs font-medium text-paper/60 transition-colors group-hover:text-paper">
              {card.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

async function getGeminiResponse(
  chatHistory: { role: string; text: string }[],
  userMessage: string
): Promise<string> {
  try {
    const contents = [
      ...chatHistory.map((msg) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.text }],
      })),
      { role: 'user', parts: [{ text: userMessage }] },
    ]

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents,
      }),
    })

    const data = await res.json()

    if (data.error) {
      console.error('Gemini API error:', data.error)
      return "Sorry, I'm having trouble connecting right now. Please try again in a moment."
    }

    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.'
  } catch (err) {
    console.error('Gemini API error:', err)
    return "Sorry, I'm having trouble connecting right now. Please try again in a moment."
  }
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const showWelcome = messages.length === 0

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  async function handleSend(text?: string) {
    const trimmed = (text || input).trim()
    if (!trimmed || isTyping) return

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
      timestamp: Date.now(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    const chatHistory = messages.map((m) => ({ role: m.role, text: m.text }))

    const response = await getGeminiResponse(chatHistory, trimmed)

    const aiMsg: ChatMessage = {
      id: `ai-${Date.now()}`,
      role: 'assistant',
      text: response,
      timestamp: Date.now(),
    }
    setMessages((prev) => [...prev, aiMsg])
    setIsTyping(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section className="relative flex h-screen flex-col bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(43, 65, 232, 0.15), transparent 60%), radial-gradient(45% 45% at 5% 100%, rgba(43, 65, 232, 0.10), transparent 65%)',
        }}
      />

      <div className="relative flex flex-1 flex-col overflow-hidden pt-24 pb-4 sm:pt-28">
        <div className="shell mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="label-mono inline-flex items-center gap-1.5 text-paper/30 transition-colors hover:text-paper"
            >
              ← Portfolio
            </Link>
            <span className="text-paper/10">|</span>
            <div className="flex items-center gap-2">
              <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-accent/30">
                <img src="/favicon.png" alt="" className="h-full w-full object-cover" />
              </div>
              <span className="font-display text-sm font-semibold text-paper/70">AI Assistant</span>
            </div>
          </div>
          <span className="label-mono hidden text-paper/20 sm:inline">Powered by Gemini</span>
        </div>

        <div className="shell flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
          {showWelcome ? (
            <WelcomeScreen
              onSelect={(q) => {
                handleSend(q)
              }}
            />
          ) : (
            <div
              ref={scrollRef}
              className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 sm:p-5"
              style={{ scrollBehavior: 'smooth' }}
            >
              {messages.map((msg) => (
                <ChatBubble key={msg.id} message={msg} />
              ))}
              {isTyping && <TypingIndicator />}
            </div>
          )}

          <div className="border-t border-white/10 p-3 sm:p-4">
            {!showWelcome && (
              <div className="mb-3 flex flex-wrap gap-1.5">
                {QUICK_SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSend(suggestion)}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-paper/35 transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-paper/70"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <div className="flex items-center gap-2.5">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={showWelcome ? 'Ask me anything...' : 'Type your message...'}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-paper placeholder-paper/25 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/30 focus:bg-white/[0.07]"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white transition-all hover:bg-accent-strong hover:shadow-lg hover:shadow-accent/25 disabled:opacity-30 disabled:hover:bg-accent disabled:hover:shadow-none"
                aria-label="Send message"
              >
                <ArrowUpRightIcon className="h-4 w-4 -rotate-45" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-paper/15">
              Press Enter to send · AI responses may not always be accurate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
