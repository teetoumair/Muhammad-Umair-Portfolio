import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import { GoogleGenerativeAI } from '@google/generative-ai'
import ChatBubble, { type ChatMessage } from '../ui/ChatBubble'
import { ArrowUpRightIcon } from '../ui/icons'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

const SYSTEM_PROMPT = `You are Muhammad Umair's AI portfolio assistant. You ONLY answer questions about Muhammad Umair — his skills, projects, experience, education, availability, and how to contact him. 

RULES:
1. ONLY discuss Muhammad Umair. If asked about anything else, politely redirect to topics about him.
2. Never make up information. Only use the facts provided below.
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

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  text: "Hi! I'm Muhammad Umair's AI assistant. Ask me about his skills, projects, availability, or how to get in touch!",
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
          <span className="text-xs font-bold text-accent">AI</span>
        </div>
        <div className="rounded-2xl rounded-bl-md bg-white/10 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="block h-2 w-2 animate-bounce rounded-full bg-paper/40" style={{ animationDelay: '0ms' }} />
            <span className="block h-2 w-2 animate-bounce rounded-full bg-paper/40" style={{ animationDelay: '150ms' }} />
            <span className="block h-2 w-2 animate-bounce rounded-full bg-paper/40" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

async function getGeminiResponse(
  chatHistory: { role: string; text: string }[],
  userMessage: string
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT,
    })

    const chat = model.startChat({
      history: chatHistory.map((msg) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.text }],
      })),
    })

    const result = await chat.sendMessage(userMessage)
    return result.response.text()
  } catch (err) {
    console.error('Gemini API error:', err)
    return "Sorry, I'm having trouble connecting right now. Please try again in a moment."
  }
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  async function handleSend() {
    const trimmed = input.trim()
    if (!trimmed || isTyping) return

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    const chatHistory = messages
      .filter((m) => m.id !== 'welcome')
      .map((m) => ({ role: m.role, text: m.text }))

    const response = await getGeminiResponse(chatHistory, trimmed)

    const aiMsg: ChatMessage = {
      id: `ai-${Date.now()}`,
      role: 'assistant',
      text: response,
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
    <section className="relative flex min-h-screen flex-col bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(43, 65, 232, 0.18), transparent 60%), radial-gradient(45% 45% at 5% 100%, rgba(43, 65, 232, 0.12), transparent 65%)',
        }}
      />

      <div className="relative flex flex-1 flex-col pt-28 pb-8 sm:pt-36">
        <div className="shell mb-6">
          <Link
            to="/"
            className="label-mono mb-4 inline-flex items-center gap-2 text-paper/40 transition-colors hover:text-paper"
          >
            ← Back to portfolio
          </Link>
          <p className="label-mono mb-2 text-accent">AI Assistant</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Ask me about Muhammad Umair
          </h1>
          <p className="mt-2 text-sm text-paper/50">
            Powered by Gemini — ask about skills, projects, or availability.
          </p>
        </div>

        <div className="shell flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:max-h-[60vh]">
          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-5 overflow-y-auto p-5 sm:p-6"
            style={{ scrollBehavior: 'smooth' }}
          >
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>

          <div className="border-t border-white/10 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-paper placeholder-paper/30 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white transition-all hover:bg-accent-strong disabled:opacity-40 disabled:hover:bg-accent"
                aria-label="Send message"
              >
                <ArrowUpRightIcon className="h-5 w-5 -rotate-45" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['What does he do?', 'His skills', 'Contact info', 'Is he available?'].map(
                (suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => {
                      setInput(suggestion)
                      setTimeout(() => handleSend(), 0)
                    }}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-paper/50 transition-colors hover:border-accent hover:text-paper"
                  >
                    {suggestion}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
