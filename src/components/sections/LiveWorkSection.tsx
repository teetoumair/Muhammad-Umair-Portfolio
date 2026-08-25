import Reveal from '../ui/Reveal'
import ChapterKicker from '../ui/ChapterKicker'
import MaskWords from '../ui/MaskWords'
import { ArrowUpRightIcon } from '../ui/icons'

const teamSites = [
  {
    name: 'Uzair Rahim',
    role: 'Sr. Software Engineer',
    url: 'https://uzair.nexteksol.com',
    display: 'uzair.nexteksol.com',
  },
  {
    name: 'Jawad Abdullah',
    role: 'AI-Native Full Stack Engineer',
    url: 'https://jawad.nexteksol.com',
    display: 'jawad.nexteksol.com',
  },
  {
    name: 'Ali Hasnain',
    role: 'Software & AI Architect',
    url: 'https://ali.nexteksol.com',
    display: 'ali.nexteksol.com',
  },
]

function LiveBadge() {
  return (
    <span className="label-mono inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
        <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      Live
    </span>
  )
}

function MiniSiteMockup({ initial }: { initial: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-sm">
      <div className="flex items-center gap-2 border-b border-ink/8 bg-white/80 px-3 py-2">
        <span className="flex gap-1">
          <i className="pop-dot block h-2 w-2 rounded-full bg-red-400/70" style={{ transitionDelay: '200ms' }} />
          <i className="pop-dot block h-2 w-2 rounded-full bg-amber-400/70" style={{ transitionDelay: '280ms' }} />
          <i className="pop-dot block h-2 w-2 rounded-full bg-emerald-400/70" style={{ transitionDelay: '360ms' }} />
        </span>
        <div className="draw-bar h-1.5 flex-1 rounded-full bg-ink/8" style={{ transitionDelay: '420ms' }} />
      </div>
      <div className="bg-accent-soft p-4">
        <div className="flex items-center gap-3">
          <div
            className="pop-dot flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-white"
            style={{ transitionDelay: '480ms' }}
          >
            {initial}
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="draw-bar h-2 w-2/3 rounded-full bg-ink/25" style={{ transitionDelay: '520ms' }} />
            <div className="draw-bar h-1.5 w-1/2 rounded-full bg-ink/12" style={{ transitionDelay: '600ms' }} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="fade-up space-y-1.5 rounded-lg border border-ink/8 p-2"
            style={{ transitionDelay: `${640 + i * 110}ms` }}
          >
            <div className="h-1.5 w-3/4 rounded-full bg-ink/15" />
            <div className="h-1 w-full rounded-full bg-ink/8" />
            <div className="h-1 w-2/3 rounded-full bg-ink/8" />
          </div>
        ))}
      </div>
    </div>
  )
}

function CompanyMockup() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-sm">
      <div className="flex items-center gap-2 border-b border-ink/8 bg-white/80 px-3 py-2">
        <span className="flex gap-1">
          <i className="pop-dot block h-2 w-2 rounded-full bg-red-400/70" style={{ transitionDelay: '200ms' }} />
          <i className="pop-dot block h-2 w-2 rounded-full bg-amber-400/70" style={{ transitionDelay: '280ms' }} />
          <i className="pop-dot block h-2 w-2 rounded-full bg-emerald-400/70" style={{ transitionDelay: '360ms' }} />
        </span>
        <span
          className="fade-up label-mono truncate rounded-md bg-paper px-2 py-0.5 text-[9px] text-muted"
          style={{ transitionDelay: '420ms' }}
        >
          nexteksol.com
        </span>
      </div>
      <div
        className="relative p-4 sm:p-6 lg:p-8"
        style={{
          background:
            'linear-gradient(135deg, rgba(22,22,26,0.97), rgba(28,32,60,0.97)), radial-gradient(80% 100% at 90% 0%, rgba(43,65,232,0.35), transparent)',
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(55% 70% at 85% 10%, rgba(43,65,232,0.45), transparent 65%)',
          }}
        />
        <div className="relative flex items-end justify-between gap-4">
          <div className="space-y-2.5 sm:space-y-3.5">
            <p className="label-mono fade-up text-[9px] text-white/50" style={{ transitionDelay: '450ms' }}>
              Nextek Sol (Inc)
            </p>
            <div className="overflow-hidden">
              <p
                className="rise-inner font-display text-lg leading-tight font-bold tracking-tight text-white sm:text-2xl"
                style={{ transitionDelay: '520ms' }}
              >
                Architecting Absolute Performance
              </p>
            </div>
            <div className="draw-bar h-1.5 w-24 rounded-full bg-accent sm:w-32" style={{ transitionDelay: '700ms' }} />
          </div>
          <span
            className="pop-dot hidden shrink-0 items-center rounded-full bg-accent px-4 py-2 text-xs font-medium text-white sm:inline-flex"
            style={{ transitionDelay: '780ms' }}
          >
            Get started
          </span>
        </div>
        <div className="relative mt-6 grid grid-cols-3 gap-2.5 sm:mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="fade-up space-y-1.5 rounded-lg border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm"
              style={{ transitionDelay: `${820 + i * 120}ms` }}
            >
              <div className="h-1.5 w-2/3 rounded-full bg-white/40" />
              <div className="h-1 w-full rounded-full bg-white/15" />
              <div className="h-1 w-1/2 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function LiveWorkSection() {
  return (
    <section id="live" className="border-t border-line py-16 sm:py-20 lg:py-28">
      <div className="shell">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <ChapterKicker num="01" title="Live in production" className="mb-4" />
            <h2 className="text-heading max-w-xl">
              <MaskWords text="Real sites, deployed and serving real users." baseDelay={150} />
            </h2>
          </div>
          <Reveal delay={250}>
            <p className="max-w-xs text-sm leading-relaxed text-soft sm:text-right">
              Designed and built by me for Nextek Sol (Inc) — every link opens the live site.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal as="a" href="https://nexteksol.com" target="_blank" rel="noreferrer" delay={0}
            className="card-lift group relative flex flex-col rounded-2xl border border-line bg-surface p-7 hover:border-ink md:col-span-2 sm:p-9">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag">Company website</span>
                <span className="tag">React · Vite</span>
              </div>
              <LiveBadge />
            </div>
            <div className="grid flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Nextek Sol (Inc)
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-soft">
                  The corporate face of Nextek Sol — a performance-obsessed software
                  company. Marketing site designed and engineered end-to-end, from
                  visual system to production deploy.
                </p>
                <p className="label-mono mt-6 inline-flex items-center gap-2 text-accent">
                  nexteksol.com
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </p>
              </div>
              <div className="lg:col-span-7">
                <CompanyMockup />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamSites.map((site, index) => {
            const initial = site.name.split(' ').map((w) => w[0]).join('')
            return (
              <Reveal
                key={site.name}
                as="a"
                href={site.url}
                target="_blank"
                rel="noreferrer"
                delay={120 + index * 110}
                className="card-lift group flex flex-col rounded-2xl border border-line bg-surface p-5 hover:border-ink sm:p-6 lg:p-7"
              >
                <MiniSiteMockup initial={initial} />
                <div className="mt-6 mb-4 flex justify-end">
                  <LiveBadge />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight">{site.name}</h3>
                <p className="mt-1.5 text-sm font-medium text-soft">{site.role}</p>
                <p className="label-mono mt-3 inline-flex items-center gap-2 break-all text-muted transition-colors group-hover:text-accent">
                  {site.display}
                  <ArrowUpRightIcon className="h-3 w-3 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
