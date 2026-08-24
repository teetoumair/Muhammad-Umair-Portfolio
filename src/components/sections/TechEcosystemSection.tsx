import Starfield from '../ui/Starfield'

const technologies = [
  { icon: 'code', name: 'React / Next.js' },
  { icon: 'settings_ethernet', name: 'TypeScript' },
  { icon: 'terminal', name: 'Swift / SwiftUI' },
  { icon: 'hub', name: 'GraphQL' },
  { icon: 'auto_awesome', name: 'OpenAI / Anthropic' },
  { icon: 'database', name: 'PostgreSQL' },
  { icon: 'cloud', name: 'AWS / Vercel' },
  { icon: 'token', name: 'Vector DBs' },
]

export default function TechEcosystemSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-section-gap relative overflow-hidden"
      id="lab"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    >
      <Starfield
        canvasId="lab-starfield"
        options={{ count: 120, baseSpeed: 0.08, reactiveRadius: 150 }}
      />
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-gutter relative z-10">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-stack-lg">
          <h2 className="font-label-caps text-label-caps uppercase tracking-[0.2em] mb-3 sm:mb-stack-sm text-white">
            Technical Ecosystem
          </h2>
          <h3 className="font-headline-md text-[28px] sm:text-[32px] md:text-headline-md max-w-2xl text-white">
            The engine behind the innovation.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-gutter">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-5 sm:p-stack-lg rounded-xl flex flex-col items-center justify-center gap-3 sm:gap-stack-sm transition-colors bg-white/5 border border-white/10 hover:border-white/30"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mb-1 sm:mb-base">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-white">
                  {tech.icon}
                </span>
              </div>
              <span className="font-mono-label text-[12px] sm:text-mono-label text-white text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
