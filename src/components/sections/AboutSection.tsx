import profileImg from '../../assets/profile.jpg'

const facts = [
  { label: 'Based in', value: 'Lahore, Pakistan' },
  { label: 'Education', value: 'BS Computer Science (in progress)' },
  { label: 'Focus', value: 'Web front-end & iOS apps' },
  { label: "What I'm after", value: 'Internships & junior roles' },
]

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28">
      <div className="shell grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="max-w-[280px] overflow-hidden rounded-2xl border border-line">
            <img
              src={profileImg}
              alt="Portrait of Muhammad Umair"
              className="aspect-square w-full object-cover object-[center_20%] grayscale transition-all duration-500 hover:grayscale-0"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="md:col-span-8 md:pl-6">
          <p className="label-mono mb-3 text-muted">About</p>
          <h2 className="text-heading max-w-xl mb-8">
            A student who treats every project like it ships to real users.
          </h2>
          <div className="max-w-xl space-y-5 leading-relaxed text-soft">
            <p>
              I&apos;m a Computer Science bachelor&apos;s student with a simple loop I
              keep running: learn something, build something real with it, then figure
              out why it broke. That loop has taken me across two platforms I genuinely
              enjoy — the web, with React and TypeScript, and iOS, with Swift and
              SwiftUI.
            </p>
            <p>
              What pulls me in is the full arc of a product: turning a rough idea into
              an interface that feels obvious to use, and making sure what&apos;s under
              the hood is just as clean. Right now I&apos;m deepening my backend skills
              so I can own features end to end.
            </p>
            <p>
              If your team has room for someone who ships, asks good questions and
              takes feedback well — I&apos;d love to talk.
            </p>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-1 gap-x-10 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="flex justify-between border-b border-line py-4 gap-4">
                <dt className="label-mono shrink-0 pt-1 text-muted">{fact.label}</dt>
                <dd className="text-right text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
