import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons'
import heroImg from '../../assets/hero.webp'

export default function HeroSection() {
  return (
    <section id="top" className="pt-40 pb-16 sm:pt-52 sm:pb-24">
      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <p
            className="label-mono animate-rise mb-6 flex items-center gap-2 text-muted"
            style={{ animationDelay: '0ms' }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Lahore, Pakistan — Open to internships &amp; junior roles
          </p>
          <h1 className="animate-rise max-w-4xl text-display" style={{ animationDelay: '120ms' }}>
            I build products for the{' '}
            <em className="font-display font-semibold text-accent italic">web</em> and{' '}
            <em className="font-display font-semibold text-accent italic">iOS</em>.
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lede text-soft" style={{ animationDelay: '260ms' }}>
            I&apos;m Muhammad Umair — a Computer Science undergraduate who designs and
            ships clean, fast applications with React, TypeScript, Swift and SwiftUI.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: '420ms' }}>
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
          <p
            className="label-mono animate-rise mt-14 border-t border-line pt-6 text-muted"
            style={{ animationDelay: '580ms' }}
          >
            React · TypeScript · Tailwind CSS · Swift · SwiftUI · Git
          </p>
        </div>
        <div className="flex justify-center lg:col-span-4 lg:justify-end">
          <img
            src={heroImg}
            alt="Portrait of Muhammad Umair"
            width={610}
            height={960}
            decoding="async"
            className="animate-rise h-[21.5rem] w-auto object-contain sm:h-[29rem] lg:h-[31.25rem] xl:h-[36rem]"
            style={{ animationDelay: '340ms', animationDuration: '1.1s' }}
          />
        </div>
      </div>
    </section>
  )
}
