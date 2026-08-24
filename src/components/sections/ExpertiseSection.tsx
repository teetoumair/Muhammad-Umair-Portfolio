import Starfield from '../ui/Starfield'

const expertiseCards = [
  {
    icon: 'terminal',
    title: 'Full Stack',
    description: 'Scalable architectures and robust backend systems.',
  },
  {
    icon: 'smartphone',
    title: 'iOS Development',
    description: 'SwiftUI native apps with editorial-grade UX.',
  },
  {
    icon: 'psychology',
    title: 'AI Strategy',
    description: 'LLM integration and predictive modeling.',
  },
  {
    icon: 'layers',
    title: 'Product Strategy',
    description: 'Market alignment and roadmap development.',
  },
  {
    icon: 'rocket_launch',
    title: 'Transformation',
    description: 'Leading legacy systems into the modern era.',
  },
]

export default function ExpertiseSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-section-gap relative overflow-hidden"
      id="expertise"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    >
      <Starfield
        canvasId="expertise-starfield"
        options={{ count: 120, baseSpeed: 0.08, reactiveRadius: 150 }}
      />
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-gutter relative z-10">
        <div className="text-center mb-10 sm:mb-stack-lg max-w-2xl mx-auto">
          <h2 className="font-label-caps text-label-caps text-on-primary-container/70 uppercase tracking-[0.2em] mb-3 sm:mb-stack-sm">
            Expertise
          </h2>
          <p className="font-headline-sm text-[20px] sm:text-headline-sm text-on-primary">
            Strategic focus across the entire product lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-stack-md">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-4 sm:p-stack-md rounded-xl hover-lift flex flex-col items-center text-center transition-all duration-300 hover:border-white/30"
            >
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-on-primary mb-2 sm:mb-stack-sm">
                {card.icon}
              </span>
              <h4 className="font-headline-sm text-[15px] sm:text-[18px] text-on-primary mb-2 sm:mb-base">
                {card.title}
              </h4>
              <p className="text-on-primary-container/80 font-body-md text-[12px] sm:text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
