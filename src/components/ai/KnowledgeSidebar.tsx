const knowledgeAreas = [
  { icon: 'terminal', label: 'Projects' },
  { icon: 'work', label: 'Experience' },
  { icon: 'integration_instructions', label: 'Services' },
  { icon: 'psychology', label: 'Skills' },
  { icon: 'biotech', label: 'Research' },
  { icon: 'lightbulb', label: 'Innovation' },
]

export default function KnowledgeSidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <div className="p-5 rounded-xl shadow-sm"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
      >
        <h3 className="font-headline-sm text-headline-sm text-white mb-5">Knowledge Core</h3>
        <nav className="flex flex-col gap-1">
          {knowledgeAreas.map((area) => (
            <div key={area.label} className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white">{area.icon}</span>
                <span className="font-body-md text-body-md text-white/80">{area.label}</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
            </div>
          ))}
        </nav>
      </div>
      <div className="p-5 rounded-xl border border-white/10 shadow-lg"
        style={{ backgroundColor: 'rgba(19, 27, 46, 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <p className="font-mono-label text-label-caps uppercase text-white/50 mb-4">Availability</p>
        <div className="flex items-center gap-3 mb-2">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </div>
          <span className="font-body-md text-body-md font-medium text-white">Open for collaborations</span>
        </div>
        <p className="text-[13px] text-white/50">The AI is trained on real-time availability and calendar data.</p>
      </div>
    </aside>
  )
}
