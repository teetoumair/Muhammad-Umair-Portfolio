import { Link } from 'react-router'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../ui/icons'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../sections/contact-info'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="text-sm text-soft">© {new Date().getFullYear()} Muhammad Umair — Lahore, Pakistan</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-end">
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`Email ${EMAIL}`}
            className="text-soft transition-colors hover:text-ink"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-soft transition-colors hover:text-ink"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-soft transition-colors hover:text-ink"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <Link to="/chatbot" className="label-mono text-muted transition-colors hover:text-ink">
            Chatbot
          </Link>
          <Link to="/contact" className="label-mono text-muted transition-colors hover:text-ink">
            Contact
          </Link>
          <a href="#top" className="label-mono text-muted transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
