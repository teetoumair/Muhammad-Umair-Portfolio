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
  },
]

export default function ProjectsSection() {
  return (
    <section id="work" className="border-t border-line py-20 sm:py-28">
      <div className="shell">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="label-mono mb-3 text-muted">Selected work</p>
            <h2 className="text-heading max-w-lg">Things I&apos;ve built, and things I&apos;m building.</h2>
          </div>
          <p className="text-sm text-soft">More shipping soon.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-colors duration-200 hover:border-ink sm:p-9 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="mb-6 flex flex-wrap items-center gap-2">
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
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
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
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
