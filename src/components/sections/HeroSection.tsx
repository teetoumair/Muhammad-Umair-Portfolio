import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons'
import heroImg from '../../assets/hero.webp'

export default function HeroSection() {
  return (
    <section id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 lg:self-center">
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
        </div>
        <div className="flex justify-center lg:col-span-5 lg:self-end lg:justify-end">
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
        <p
          className="label-mono animate-rise pt-6 text-muted"
          style={{ animationDelay: '640ms' }}
        >
          React · TypeScript · Tailwind CSS · Swift · SwiftUI · Git
        </p>
      </div>
    </section>
  )
}
