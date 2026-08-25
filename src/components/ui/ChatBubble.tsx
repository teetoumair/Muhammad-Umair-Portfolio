export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
  timestamp?: number
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function UserAvatar() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-paper">
      U
    </div>
  )
}

function AIAvatar() {
  return (
    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-accent/15">
      <img src="/favicon.png" alt="AI" className="h-full w-full object-cover" />
    </div>
  )
}

export default function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user'

  return (
    <div className={`chat-msg flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex max-w-[85%] items-start gap-2.5 sm:max-w-[70%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {isUser ? <UserAvatar /> : <AIAvatar />}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div
            className={`rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed sm:px-5 sm:py-3 sm:text-[15px] ${
              isUser
                ? 'rounded-br-md bg-accent text-white'
                : 'rounded-bl-md bg-white/10 text-paper'
            }`}
          >
            {message.text}
          </div>
          {message.timestamp && (
            <span className="mt-1 px-1 text-[10px] text-paper/25">
              {formatTime(message.timestamp)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
