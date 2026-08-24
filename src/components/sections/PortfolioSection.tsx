const projects = [
  {
    title: 'Nexus AI Dashboard',
    subtitle: 'Enterprise Intelligence Platform',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bhderVUM2p-ZzhoxaZkxFpBpdISvwThyWOJ916LtxDO57ROuyB3Vj2hM9vSx4QpS_wufdHm7VPfJm56dN_H_z_Hjh87O-JwScfgv5vcDz6seJPqV_NW6fAXz0mSodWcuzw6ofWJ8M5ZiEstYRS5gZiUqmFzgxpr3JSfH07ir7jqvJNCLddvO9yHVRFxoCPbE6MS5UIDuAjKdLeAAQQZwC6NQ1qLa0kTs0Zm45oiy_SPsexKGWIk',
    alt: 'Nexus AI Dashboard',
    tags: ['React', 'LLM'],
  },
  {
    title: 'Aura Lifestyle App',
    subtitle: 'iOS Native Experience',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAv4c8Yh0c3N0VtWKvR32k-yo7rjuGoJ7jugDpPi_4QVuZKT4gKkyUJWMrXYjMEK-lBJzEPLrzVTvB-XwDM2m_CPn5HjylOa_o67vg06ZQ79r2HDERG5kNVEDIOerOlNX5aAEv6pVjkcti2lMa5l5L1IsdNcroLlhVzUD3eM9wa3zkwZfPzI1Xwdc8ZTEqRy1gswGyxtQBJimqZIiuQDwAH-sLP17QpDe-08doegfEpo4ZuIlD-2CU',
    alt: 'Aura Lifestyle App',
    tags: ['SwiftUI', 'Combine'],
  },
]

export default function PortfolioSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-section-gap max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-gutter"
      id="work"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-stack-lg gap-4 sm:gap-stack-md">
        <div className="max-w-xl">
          <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-2 sm:mb-stack-sm">
            Portfolio
          </h2>
          <h3 className="font-headline-md text-[28px] sm:text-[32px] md:text-headline-md text-primary">
            Selected Engineering Milestones
          </h3>
        </div>
        <a
          className="font-label-caps text-label-caps text-primary border-b border-primary uppercase tracking-widest hover:opacity-70 transition-opacity px-2 py-3"
          href="#"
        >
          Explore All Work
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
        {projects.map((project) => (
          <div key={project.title} className="group cursor-pointer">
            <div className="relative w-full aspect-[16/10] bg-surface-container rounded-xl overflow-hidden mb-3 sm:mb-stack-sm shadow-sm transition-all duration-500 hover:shadow-2xl">
              <img
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={project.image}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-surface text-on-surface px-4 sm:px-gutter py-2 sm:py-stack-sm rounded-full font-label-caps text-label-caps uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Project
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start gap-3">
              <div className="min-w-0">
                <h4 className="font-headline-sm text-[18px] sm:text-headline-sm text-primary mb-1">
                  {project.title}
                </h4>
                <p className="text-on-surface-variant font-body-md text-[14px] sm:text-body-md">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex gap-1.5 sm:gap-base shrink-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-base py-1 bg-surface-container rounded font-mono-label text-[9px] sm:text-[10px] uppercase text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
