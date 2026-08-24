import { useRef, useState } from 'react'
import Reveal from '../ui/Reveal'
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '../ui/icons'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from './contact-info'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      if (resetTimer.current) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 80% 0%, rgba(43, 65, 232, 0.28), transparent 60%), radial-gradient(45% 45% at 5% 100%, rgba(43, 65, 232, 0.16), transparent 65%)',
        }}
      />
      <div className="shell relative">
        <Reveal>
          <p className="label-mono mb-3 text-paper/50">05 · Contact</p>
          <h2 className="text-display-sm max-w-3xl mb-6">
            Have an idea, an internship, or a junior role?{' '}
            <em className="text-accent font-semibold italic">Let&apos;s talk.</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-xl text-lede text-paper/70 mb-10">
            My inbox is always open — whether you want to talk code, collaboration,
            or opportunities. One email is all it takes.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${EMAIL}`} className="btn-accent">
              <MailIcon className="h-4 w-4" />
              Email me
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <button type="button" onClick={copyEmail} className="btn-light">
              {copied ? (
                <>
                  <CheckIcon className="h-4 w-4 text-emerald-400" />
                  Copied!
                </>
              ) : (
                <>
                  <CopyIcon className="h-4 w-4" />
                  Copy email
                </>
              )}
            </button>
            <a href={RESUME_URL} download className="btn-light">
              <DownloadIcon className="h-4 w-4" />
              Résumé
            </a>
          </div>
        </Reveal>
        <Reveal delay={340}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper/70 transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper/70 transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <GitHubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="label-mono min-w-0 text-paper/40 transition-colors hover:text-paper"
              >
                <span className="sm:hidden">Email me</span>
                <span className="hidden sm:inline">{EMAIL}</span>
              </a>
            </div>
            <p className="label-mono flex items-center gap-2 text-paper/50">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Usually replies within 24 hours
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
