const actions = [
  { icon: 'rocket_launch', label: 'Projects' },
  { icon: 'history_edu', label: 'Experience' },
  { icon: 'architecture', label: 'Expertise' },
  { icon: 'calendar_today', label: 'Book Meeting' },
  { icon: 'handshake', label: 'Collaborate' },
]

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex flex-col items-center gap-3 p-5 rounded-xl transition-all group hover:shadow-md"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
        >
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
            <span className="material-symbols-outlined text-white group-hover:text-black">{action.icon}</span>
          </div>
          <span className="font-label-caps text-[11px] uppercase tracking-wider text-center text-white/80">{action.label}</span>
        </button>
      ))}
    </div>
  )
}
