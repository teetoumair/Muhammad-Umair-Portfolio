import { ArrowUpRightIcon, DownloadIcon, MailIcon } from '../ui/icons'
import MaskWords from '../ui/MaskWords'
import CountUp from '../ui/CountUp'
import heroImg from '../../assets/hero.webp'
import { EMAIL } from './contact-info'

const stats = [
  { to: 4, suffix: '', label: 'Live production sites' },
  { to: 2, suffix: '', label: 'Platforms shipped on' },
  { to: 6, suffix: '', label: 'Tools used every day' },
  { to: 24, suffix: 'h', label: 'Typical reply time' },
]

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 lg:self-center">
          <p
            className="label-mono animate-rise mb-6 flex items-center gap-2 text-muted"
            style={{ animationDelay: '0ms' }}
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-accent" />
            </span>
            Lahore, Pakistan — Open to internships &amp; junior roles
          </p>
          <h1 className="max-w-4xl text-display">
            <MaskWords
              text="I build products for the web and iOS."
              accents={['web', 'iOS']}
              baseDelay={150}
              step={70}
            />
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lede text-soft" style={{ animationDelay: '260ms' }}>
            I&apos;m Muhammad Umair — a Computer Science undergraduate who designs and
            ships clean, fast applications with React, TypeScript, Swift and SwiftUI.
            My work includes four live production sites for Nextek Sol (Inc).
          </p>
          <div className="animate-rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: '420ms' }}>
            <a href="#work" className="btn-solid group">
              View projects
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-outline">
              <MailIcon className="h-4 w-4" />
              Email me
            </a>
            <a href="/resume.pdf" download className="btn-outline">
              <DownloadIcon className="h-4 w-4" />
              Résumé
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:col-span-5 lg:self-end lg:justify-end">
          <div
            aria-hidden="true"
            className="animate-rise absolute bottom-0 left-1/2 h-[70%] w-[120%] -translate-x-1/2 rounded-full blur-3xl lg:w-full"
            style={{
              animationDelay: '340ms',
              background:
                'radial-gradient(closest-side, rgba(43, 65, 232, 0.12), rgba(43, 65, 232, 0.04) 60%, transparent)',
            }}
          />
          <img
            src={heroImg}
            alt="Portrait of Muhammad Umair"
            width={851}
            height={960}
            decoding="async"
            className="animate-rise h-auto w-[72%] max-w-[22rem] object-contain sm:w-[52%] md:max-w-[24rem] lg:w-full lg:max-w-[30rem]"
            style={{
              animationDelay: '340ms',
              animationDuration: '1.1s',
              filter: 'drop-shadow(0 10px 14px rgba(22, 22, 26, 0.12)) drop-shadow(0 30px 50px rgba(22, 22, 26, 0.16))',
            }}
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="animate-rise h-px w-full bg-ink/20 shadow-[0_14px_28px_-12px_rgba(22,22,26,0.45)]"
        style={{ animationDelay: '580ms' }}
      />
      <div className="shell">
        <dl className="animate-rise grid grid-cols-2 gap-x-8 gap-y-6 pt-8 sm:grid-cols-4" style={{ animationDelay: '640ms' }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="label-mono order-2 mt-1.5 text-muted">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                <CountUp to={stat.to} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
