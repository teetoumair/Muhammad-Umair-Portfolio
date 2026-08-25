import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import ChatBubble, { type ChatMessage } from '../ui/ChatBubble'
import { ArrowUpRightIcon } from '../ui/icons'

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  text: "Hi! I'm Muhammad Umair's AI assistant. Ask me about his skills, projects, availability, or how to get in touch!",
}

const SAMPLE_CONVERSATIONS: { q: string; a: string }[] = [
  {
    q: 'What does Muhammad do?',
    a: "Muhammad Umair is a Product Developer who builds for the web (React, TypeScript) and iOS (Swift, SwiftUI). He's a Computer Science student in Lahore, Pakistan, currently open to internships and junior roles.",
  },
  {
    q: 'What are his main skills?',
    a: "His core daily drivers are TypeScript & JavaScript, React, HTML & modern CSS, Tailwind CSS, Swift & SwiftUI, and Git/GitHub. He's also learning Node.js, PostgreSQL, Supabase, and Vitest to go full-stack.",
  },
  {
    q: 'Has he shipped any real products?',
    a: "Yes! He has 4 live production sites for Nextek Sol (Inc), plus his own portfolio, a shared expense splitter (web + iOS), and a job application tracker — all built with real users in mind.",
  },
  {
    q: 'How can I contact him?',
    a: "You can email him at umairshafi.professional@gmail.com, find him on GitHub (@teetoumair) or LinkedIn (/in/mohammad-umair-um/). He usually replies within 24 hours!",
  },
  {
    q: 'Is he available for work?',
    a: "Yes! Muhammad is open to internships and junior developer roles. He's based in Lahore, Pakistan and is available for both remote and on-site opportunities.",
  },
]

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

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack') || lower.includes('know')) {
    return SAMPLE_CONVERSATIONS[1].a
  }
  if (lower.includes('project') || lower.includes('build') || lower.includes('ship') || lower.includes('work')) {
    return SAMPLE_CONVERSATIONS[2].a
  }
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('hire')) {
    return SAMPLE_CONVERSATIONS[3].a
  }
  if (lower.includes('available') || lower.includes('intern') || lower.includes('job') || lower.includes('role') || lower.includes('open')) {
    return SAMPLE_CONVERSATIONS[4].a
  }
  if (lower.includes('who') || lower.includes('what') || lower.includes('do')) {
    return SAMPLE_CONVERSATIONS[0].a
  }
  return "That's a great question! Muhammad Umair is a Product Developer specializing in React, TypeScript, and Swift. He's a CS student in Lahore, open to internships. Want to know about his skills, projects, or how to reach him?"
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

  function handleSend() {
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

    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: getResponse(trimmed),
      }
      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 1200 + Math.random() * 800)
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
            Pre-powered by Gemini — real AI coming soon.
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
