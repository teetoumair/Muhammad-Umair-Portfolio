import { useRef, useState } from 'react'
import Reveal from '../ui/Reveal'
import ChapterKicker from '../ui/ChapterKicker'
import MaskWords from '../ui/MaskWords'
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '../ui/icons'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../sections/contact-info'

const inputClasses =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder-muted outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <div className="mb-14">
          <ChapterKicker num="01" title="Contact" className="mb-4" />
          <h1 className="text-display max-w-3xl">
            <MaskWords
              text="Let's build something together."
              accents={["Let's", 'together.']}
              baseDelay={150}
              step={60}
            />
          </h1>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lede text-soft">
              Whether you have an opportunity, a project idea, or just want to say hi —
              my inbox is always open.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7" delay={100}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label-mono mb-2 block text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-mono mb-2 block text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="label-mono mb-2 block text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="message" className="label-mono mb-2 block text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="btn-solid group flex items-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckIcon className="h-4 w-4 text-emerald-400" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={250}>
            <div className="space-y-8">
              <div>
                <h3 className="label-mono mb-4 text-muted">Quick contact</h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="card-lift flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-ink"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <MailIcon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium">Email</p>
                      <p className="truncate text-sm text-soft">{EMAIL}</p>
                    </div>
                    <ArrowUpRightIcon className="ml-auto h-4 w-4 shrink-0 text-muted" />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="card-lift flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-ink"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <GitHubIcon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium">GitHub</p>
                      <p className="truncate text-sm text-soft">@teetoumair</p>
                    </div>
                    <ArrowUpRightIcon className="ml-auto h-4 w-4 shrink-0 text-muted" />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="card-lift flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-ink"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <LinkedInIcon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium">LinkedIn</p>
                      <p className="truncate text-sm text-soft">/in/mohammad-umair-um/</p>
                    </div>
                    <ArrowUpRightIcon className="ml-auto h-4 w-4 shrink-0 text-muted" />
                  </a>
                </div>
              </div>

              <div className="border-t border-line pt-8">
                <h3 className="label-mono mb-4 text-muted">Other ways</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="btn-outline flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="h-4 w-4 text-accent" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <CopyIcon className="h-4 w-4" />
                        Copy email
                      </>
                    )}
                  </button>
                  <a href={RESUME_URL} download className="btn-outline flex items-center gap-2">
                    <DownloadIcon className="h-4 w-4" />
                    Résumé
                  </a>
                </div>
              </div>

              <div className="border-t border-line pt-8">
                <div className="flex items-center gap-3">
                  <span className="relative inline-flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <p className="text-sm text-soft">Based in Lahore, Pakistan — Open to remote</p>
                </div>
                <p className="mt-2 text-sm text-muted">Usually replies within 24 hours</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
