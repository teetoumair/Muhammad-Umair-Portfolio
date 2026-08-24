import Reveal from '../ui/Reveal'

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
    <section id="skills" className="border-t border-line py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="label-mono mb-3 text-muted">02 · Toolkit</p>
          <h2 className="text-heading max-w-lg mb-14">
            Honest about what I know, and what I&apos;m still learning.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="label-mono mb-6 text-accent">Daily drivers</h3>
            <ul>
              {dailyDrivers.map((skill, index) => (
                <Reveal
                  key={skill}
                  as="li"
                  delay={index * 70}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-lg font-semibold first:border-t"
                >
                  {skill}
                  <span className="label-mono text-muted">Core</span>
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
                  className="flex items-center justify-between border-b border-line py-4 font-display text-lg font-semibold text-soft first:border-t"
                >
                  {skill}
                  <span className="label-mono text-muted">Growing</span>
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
