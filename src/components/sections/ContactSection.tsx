import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from '../ui/icons'

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28">
      <div className="shell">
        <p className="label-mono mb-3 text-muted">Contact</p>
        <h2 className="text-display-sm max-w-2xl mb-6">
          Have an idea, an internship, or a junior role?
        </h2>
        <p className="max-w-xl text-lede text-soft mb-10">
          My inbox and messages are open. Whether you want to talk code,
          collaboration, or opportunities — I reply fast.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mohammad-umair-um/"
            target="_blank"
            rel="noreferrer"
            className="btn-solid"
          >
            <LinkedInIcon className="h-4 w-4" />
            Message on LinkedIn
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
    </section>
  )
}
