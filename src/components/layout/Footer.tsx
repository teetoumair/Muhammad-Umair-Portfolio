import { GitHubIcon, LinkedInIcon } from '../ui/icons'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="text-sm text-soft">© {new Date().getFullYear()} Muhammad Umair — Lahore, Pakistan</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/teetoumair"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-soft transition-colors hover:text-ink"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-umair-um/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-soft transition-colors hover:text-ink"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a href="#top" className="label-mono text-muted transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
