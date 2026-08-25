import Reveal from '../ui/Reveal'
import ChapterKicker from '../ui/ChapterKicker'
import MaskWords from '../ui/MaskWords'
import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons'

const projects = [
  {
    title: 'This portfolio',
    description:
      'The site you are reading right now. Designed and built from scratch — custom design system on Tailwind CSS 4, responsive editorial layout, no UI libraries.',
    platform: 'Web',
    status: 'Shipped',
    stack: ['React', 'TypeScript', 'Tailwind CSS 4', 'Vite'],
    links: [{ label: 'GitHub', href: 'https://github.com/teetoumair' }],
    featured: true,
    variant: 'portfolio' as const,
    tint: 'bg-accent-soft',
  },
  {
    title: 'Shared expense splitter',
    description:
      'One product, two platforms. Track group expenses with a shared backend (Supabase): a React web app and a native SwiftUI companion app.',
    platform: 'Web + iOS',
    status: 'In progress',
    stack: ['React', 'TypeScript', 'Supabase', 'SwiftUI'],
    links: [],
    featured: false,
    variant: 'split' as const,
    tint: 'bg-emerald-50',
  },
  {
    title: 'Job application tracker',
    description:
      'A focused tool for students managing internship applications — statuses, deadlines and notes, backed by a REST API with filtering and search.',
    platform: 'Web',
    status: 'In progress',
    stack: ['React', 'TypeScript', 'REST API'],
    links: [],
    featured: false,
    variant: 'tracker' as const,
    tint: 'bg-amber-50',
  },
]

function Bar({ className = '' }: { className?: string }) {
  return <div className={`h-1.5 rounded-full bg-ink/15 ${className}`} />
}

function BrowserChrome({ url, wide = false }: { url: string; wide?: boolean }) {
  return (
    <div className="flex items-center gap-2 border-b border-ink/8 bg-white/80 px-3 py-2">
      <span className="flex shrink-0 gap-1">
        <i className="pop-dot block h-2 w-2 rounded-full bg-red-400/70" style={{ transitionDelay: '200ms' }} />
        <i className="pop-dot block h-2 w-2 rounded-full bg-amber-400/70" style={{ transitionDelay: '280ms' }} />
        <i className="pop-dot block h-2 w-2 rounded-full bg-emerald-400/70" style={{ transitionDelay: '360ms' }} />
      </span>
      <span
        className={`label-mono fade-up min-w-0 truncate rounded-md bg-paper px-2 py-0.5 text-[9px] text-muted ${
          wide ? 'max-w-[55%]' : 'max-w-[50%]'
        }`}
        style={{ transitionDelay: '420ms' }}
      >
        {url}
      </span>
    </div>
  )
}

function PortfolioPreview() {
  return (
    <div className="flex h-full flex-col">
      <BrowserChrome url="umair.dev" wide />
      <div className="grid flex-1 grid-cols-3 gap-3 p-4 sm:p-6">
        <div className="col-span-2 flex flex-col justify-center gap-2.5">
          <div className="draw-bar w-11/12"><Bar className="w-full" /></div>
          <div className="draw-bar w-3/4" style={{ transitionDelay: '120ms' }}><Bar className="w-full" /></div>
          <div className="draw-bar w-2/5" style={{ transitionDelay: '240ms' }}><Bar className="w-full bg-accent/40" /></div>
          <span
            className="pop-dot mt-2 block h-6 w-20 rounded-full bg-ink/85 sm:h-7 sm:w-24"
            style={{ transitionDelay: '380ms' }}
          />
        </div>
        <div className="flex items-start justify-end">
          <div
            className="pop-dot flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 sm:h-20 sm:w-20"
            style={{ transitionDelay: '420ms' }}
          >
            <div className="h-7 w-7 rounded-xl bg-accent/40 sm:h-10 sm:w-10" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 px-4 pb-4 sm:px-6 sm:pb-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="fade-up space-y-2 rounded-lg border border-ink/8 bg-surface p-3"
            style={{ transitionDelay: `${480 + i * 110}ms` }}
          >
            <Bar className="w-2/3" />
            <div className="h-1 rounded-full bg-ink/8" />
            <div className="h-1 w-4/5 rounded-full bg-ink/8" />
          </div>
        ))}
      </div>
    </div>
  )
}

function SplitPreview() {
  return (
    <div className="flex h-full items-stretch justify-center gap-3 p-3 sm:gap-4 sm:p-6">
      <div className="flex min-w-0 w-[58%] max-w-[260px] flex-col overflow-hidden rounded-lg border border-ink/10 bg-surface shadow-sm">
        <BrowserChrome url="split.app" />
        <div className="flex-1 space-y-2 p-2.5 sm:p-3">
          <div className="rounded-md bg-emerald-500/15 p-2">
            <Bar className="w-1/2 bg-emerald-600/30" />
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between gap-1.5 rounded-md border border-ink/8 px-2 py-1.5">
              <div className="flex min-w-0 items-center gap-1.5">
                <i className="block h-3 w-3 shrink-0 rounded-full bg-ink/15" />
                <Bar className="w-full" />
              </div>
              <Bar className="w-7 shrink-0 bg-emerald-600/25" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[26%] min-w-[64px] max-w-[110px] flex-col overflow-hidden rounded-[1.1rem] border-[3px] border-ink/85 bg-surface">
        <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-ink/20" />
        <div className="flex-1 space-y-1.5 p-2 pt-2.5">
          <div className="rounded-md bg-ink/85 px-1.5 py-1.5">
            <div className="h-1 w-3/4 rounded-full bg-white/50" />
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1 rounded-md border border-ink/8 p-1.5">
              <Bar className="w-full" />
              <div className="h-1 w-1/2 rounded-full bg-emerald-600/30" />
            </div>
          ))}
        </div>
        <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-ink/20" />
      </div>
    </div>
  )
}

function TrackerPreview() {
  const pills = ['bg-emerald-500/20 text-emerald-700', 'bg-blue-500/15 text-blue-700', 'bg-amber-500/20 text-amber-700']
  return (
    <div className="flex h-full flex-col">
      <BrowserChrome url="applytrack.io" />
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <Bar className="w-1/3" />
          <span className="h-5 w-14 rounded-full bg-ink/85" />
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center justify-between gap-2 rounded-lg border border-ink/8 bg-surface px-3 py-2.5">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <i className="block h-4 w-4 shrink-0 rounded-md bg-ink/12" />
              <Bar className="w-full max-w-28 sm:max-w-none" />
            </div>
            <span
              className={`label-mono shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium normal-case tracking-normal ${pills[i % pills.length]}`}
            >
              {['Offer', 'Interview', 'Applied'][i % 3]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectPreview({ variant, tint }: { variant: 'portfolio' | 'split' | 'tracker'; tint: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-line ${tint}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(120% 90% at 85% -10%, rgba(255,255,255,0.75), transparent 55%), radial-gradient(90% 90% at 0% 110%, rgba(22,22,26,0.05), transparent 60%)',
        }}
      />
      <div className="relative">
        {variant === 'portfolio' && <PortfolioPreview />}
        {variant === 'split' && <SplitPreview />}
        {variant === 'tracker' && <TrackerPreview />}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="work" className="py-16 sm:py-20 lg:py-28">
      <div className="shell">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <ChapterKicker num="02" title="Selected work" className="mb-4" />
            <h2 className="text-heading max-w-xl">
              <MaskWords text="Things I've built, and things I'm building." baseDelay={150} />
            </h2>
          </div>
          <Reveal delay={250}>
            <p className="text-sm text-soft">More shipping soon.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              as="article"
              delay={index * 110}
              className={`card-lift group flex flex-col rounded-2xl border border-line bg-surface p-5 hover:border-ink sm:p-7 md:p-9 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <ProjectPreview variant={project.variant} tint={project.tint} />
              <div className="mt-7 mb-5 flex flex-wrap items-center gap-2">
                <span className="tag">{project.platform}</span>
                <span
                  className={`tag ${
                    project.status === 'Shipped'
                      ? 'border-accent/30 text-accent'
                      : ''
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-soft">
                {project.description}
              </p>
              <p className="label-mono mt-6 text-muted">{project.stack.join(' · ')}</p>
              {project.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label === 'GitHub' && <GitHubIcon className="h-3.5 w-3.5" />}
                      {link.label}
                      <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
