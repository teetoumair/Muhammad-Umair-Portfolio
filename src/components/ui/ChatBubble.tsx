export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
}

export default function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex max-w-[80%] items-start gap-3 sm:max-w-[70%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {!isUser && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
            <span className="text-xs font-bold text-accent">AI</span>
          </div>
        )}
        <div
          className={`rounded-2xl px-5 py-3 text-[15px] leading-relaxed ${
            isUser
              ? 'bg-accent text-white rounded-br-md'
              : 'bg-white/10 text-paper rounded-bl-md'
          }`}
        >
          {message.text}
        </div>
      </div>
    </div>
  )
}
