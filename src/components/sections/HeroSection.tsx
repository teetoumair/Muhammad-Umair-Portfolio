import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons'

export default function HeroSection() {
  return (
    <section id="top" className="pt-40 pb-16 sm:pt-52 sm:pb-24">
      <div className="shell">
        <p className="label-mono mb-6 flex items-center gap-2 text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Lahore, Pakistan — Open to internships &amp; junior roles
        </p>
        <h1 className="max-w-4xl text-display">
          I build products for the{' '}
          <em className="font-display font-semibold text-accent italic">web</em> and{' '}
          <em className="font-display font-semibold text-accent italic">iOS</em>.
        </h1>
        <p className="mt-8 max-w-xl text-lede text-soft">
          I&apos;m Muhammad Umair — a Computer Science undergraduate who designs and
          ships clean, fast applications with React, TypeScript, Swift and SwiftUI.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-solid">
            View projects
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/teetoumair"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
        <p className="label-mono mt-14 border-t border-line pt-6 text-muted">
          React · TypeScript · Tailwind CSS · Swift · SwiftUI · Git
        </p>
      </div>
    </section>
  )
}
