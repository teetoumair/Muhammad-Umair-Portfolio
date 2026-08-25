import Reveal from '../ui/Reveal'
import ChapterKicker from '../ui/ChapterKicker'
import MaskWords from '../ui/MaskWords'

const dailyDrivers = [
  'TypeScript & JavaScript',
  'React',
  'HTML & modern CSS',
  'Tailwind CSS',
  'Swift & SwiftUI',
  'Git & GitHub',
]

const currentlyLearning = [
  'Node.js & Express',
  'PostgreSQL & SQL',
  'Supabase',
  'Testing (Vitest)',
]

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-line py-16 sm:py-20 lg:py-28">
      <div className="shell">
        <div className="mb-14">
          <ChapterKicker num="03" title="Toolkit" className="mb-4" />
          <h2 className="text-heading max-w-xl">
            <MaskWords text="Honest about what I know, and what I'm still learning." baseDelay={150} />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="label-mono mb-6 text-accent">Daily drivers</h3>
            <ul>
              {dailyDrivers.map((skill, index) => (
                <Reveal
                  key={skill}
                  as="li"
                  delay={index * 70}
                  className="group flex items-center justify-between gap-3 border-b border-line py-4 font-display text-base font-semibold transition-colors first:border-t hover:border-ink sm:text-lg"
                >
                  <span className="min-w-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5">{skill}</span>
                  <span className="label-mono shrink-0 text-muted transition-colors group-hover:text-accent">Core</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="md:pt-10">
            <h3 className="label-mono mb-6 text-muted">Currently learning</h3>
            <ul>
              {currentlyLearning.map((skill, index) => (
                <Reveal
                  key={skill}
                  as="li"
                  delay={index * 70}
                  className="group flex items-center justify-between gap-3 border-b border-line py-4 font-display text-base font-semibold text-soft transition-colors first:border-t hover:border-ink sm:text-lg"
                >
                  <span className="min-w-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5">{skill}</span>
                  <span className="label-mono shrink-0 text-muted transition-colors group-hover:text-accent">Growing</span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={280}>
              <p className="mt-8 text-sm leading-relaxed text-soft">
                I&apos;d rather be genuinely good at fundamentals than list forty logos.
                Everything above is hands-on — you can see it in the projects.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
