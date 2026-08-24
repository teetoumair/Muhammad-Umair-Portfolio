import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  sender: 'bot' | 'user'
  text: string
  time: string
}

const fakeResponses: Record<string, string> = {
  default: "I appreciate your interest! I can discuss my technical expertise in full-stack development, iOS engineering with SwiftUI, AI/LLM integration, and product strategy. What area would you like to explore?",
  skills: "My core technical skills span across Full Stack Development (React, Next.js, TypeScript, Node.js), iOS Development (SwiftUI, Combine, Core Data), AI & ML (OpenAI API, LangChain, RAG architectures), and Cloud Infrastructure (AWS, Vercel, PostgreSQL). I focus on building scalable, performant systems.",
  projects: "I've shipped 45+ products across various domains. Highlights include Nexus AI Dashboard — an enterprise intelligence platform powered by LLMs, and Aura Lifestyle App — a native iOS experience built with SwiftUI that doubled engagement metrics within 3 months.",
  experience: "With 10+ years in the industry, I've held senior technical leadership roles focusing on digital transformation, mobile-first product development, and AI-driven innovation. I bridge the gap between raw technical capability and meaningful human experience.",
  research: "My current research focuses on LLM orchestration patterns, RAG architecture optimization, and building AI agents that integrate seamlessly into existing product ecosystems. I'm particularly interested in the intersection of AI and mobile UX.",
  philosophy: "I believe technology should inspire, not just solve problems. Every line of code should serve a larger strategic purpose. My approach combines technical rigor with product intuition to build digital infrastructure that is as resilient as it is intuitive.",
  collaboration: "I'm always open to high-impact collaborations. Whether it's technical leadership, product advisory, or AI integration consulting — let's build something meaningful together. You can reach out through the Connect button.",
  availability: "I'm currently open for select collaborations and advisory roles. I prefer projects that involve AI-driven transformation, mobile innovation, or complex technical strategy. Let's discuss how we can work together.",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) return fakeResponses.skills
  if (lower.includes('project') || lower.includes('portfolio') || lower.includes('work')) return fakeResponses.projects
  if (lower.includes('experience') || lower.includes('year') || lower.includes('background')) return fakeResponses.experience
  if (lower.includes('research') || lower.includes('ai') || lower.includes('llm')) return fakeResponses.research
  if (lower.includes('philosophy') || lower.includes('approach') || lower.includes('believe')) return fakeResponses.philosophy
  if (lower.includes('collab') || lower.includes('together') || lower.includes('partner')) return fakeResponses.collaboration
  if (lower.includes('available') || lower.includes('hire') || lower.includes('open')) return fakeResponses.availability
  return fakeResponses.default
}

const suggestedPrompts = [
  "What are your core technical skills?",
  "Tell me about your AI research.",
  "Project philosophy",
]

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! I am your digital concierge. I can walk you through my portfolio, technical stack, or discuss potential opportunities. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMsg: Message = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        text: getResponse(text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <div className="rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-120px)] sm:h-[600px] md:h-[700px] max-h-[800px]"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
    >
      {/* Chat Header */}
      <div className="p-3 sm:p-4 md:p-gutter border-b border-white/20 flex items-center justify-between"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
          </div>
          <div>
            <h4 className="font-headline-sm text-[15px] sm:text-[18px] text-white">Muhammad Umair's Assistant</h4>
            <p className="text-[10px] sm:text-[12px] text-white/60 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
            </p>
          </div>
        </div>
        <div className="flex gap-1 sm:gap-2">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Chat history">
            <span className="material-symbols-outlined text-white/70 text-lg sm:text-xl">history</span>
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Settings">
            <span className="material-symbols-outlined text-white/70 text-lg sm:text-xl">settings</span>
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-gutter flex flex-col gap-4 sm:gap-6"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-2 sm:gap-3 max-w-[92%] sm:max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : ''}`}>
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
              msg.sender === 'bot' ? 'bg-white/20 border border-white/20' : 'bg-white'
            }`}>
              <span className={`material-symbols-outlined text-xs sm:text-sm ${msg.sender === 'bot' ? 'text-white' : 'text-black'}`}
                style={msg.sender === 'bot' ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {msg.sender === 'bot' ? 'smart_toy' : 'person'}
              </span>
            </div>
            <div className={`p-2.5 sm:p-4 rounded-2xl shadow-sm ${
              msg.sender === 'bot'
                ? 'bg-white/20 rounded-tl-none border border-white/15'
                : 'bg-white rounded-tr-none'
            }`}>
              <p className={`font-body-md text-[13px] sm:text-body-md break-words ${msg.sender === 'bot' ? 'text-white' : 'text-on-surface'}`}>{msg.text}</p>
              <span className={`text-[9px] sm:text-[10px] mt-2 block ${msg.sender === 'bot' ? 'text-white/50' : 'text-on-surface-variant'}`}>
                {msg.sender === 'user' && <span className="text-right block">{msg.time}</span>}
                {msg.sender === 'bot' && msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2 sm:gap-3 items-center">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 border border-white/20 flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xs sm:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <div className="flex gap-1.5 px-4 py-3 bg-white/20 rounded-full border border-white/15">
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full typing-dot"></div>
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full typing-dot"></div>
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full typing-dot"></div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-3 sm:p-4 md:p-gutter border-t border-white/20"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      >
        {/* Suggested Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {suggestedPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => sendMessage(prompt)}
              className="px-2.5 sm:px-4 py-2.5 sm:py-3 bg-white/15 text-white/80 hover:bg-white/25 transition-all rounded-full font-mono-label text-[10px] sm:text-[12px] md:text-[13px] border border-white/15"
            >
              {prompt}
            </button>
          ))}
        </div>
        <div className="relative flex items-center gap-2 sm:gap-3">
          <button className="p-2.5 sm:p-3 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center shrink-0" aria-label="Voice input">
            <span className="material-symbols-outlined text-white/70 text-lg sm:text-xl">mic</span>
          </button>
          <div className="relative flex-1 min-w-0">
            <input
              className="w-full rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border-none outline-none text-base sm:text-body-md font-body-md text-white placeholder-white/40"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              placeholder="Type here..."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button
            onClick={() => sendMessage(input)}
            className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:shadow-lg transition-shadow shrink-0"
          >
            <span className="material-symbols-outlined text-black text-lg sm:text-xl">send</span>
          </button>
        </div>
      </div>
    </div>
  )
}
