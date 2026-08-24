export default function Footer() {
  return (
    <footer className="bg-surface-bright dark:bg-surface-container-lowest w-full py-8 sm:py-stack-lg border-t border-outline-variant/30 flat no shadows">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-base">
        <div className="flex flex-col md:items-start items-center text-center md:text-left">
          <span className="font-headline-sm text-[18px] sm:text-headline-sm font-semibold text-on-surface mb-2">
            Muhammad Umair
          </span>
          <p className="font-body-md text-[14px] sm:text-body-md text-secondary">
            © {new Date().getFullYear()} Technology Innovator. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-gutter">
          <a
            className="font-body-md text-[14px] sm:text-body-md text-secondary hover:text-primary transition-colors hover:translate-y-[-2px] transition-transform duration-300 px-2 py-2"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-body-md text-[14px] sm:text-body-md text-secondary hover:text-primary transition-colors hover:translate-y-[-2px] transition-transform duration-300 px-2 py-2"
            href="#"
          >
            Twitter
          </a>
          <a
            className="font-body-md text-[14px] sm:text-body-md text-secondary hover:text-primary transition-colors hover:translate-y-[-2px] transition-transform duration-300 px-2 py-2"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-body-md text-[14px] sm:text-body-md text-secondary hover:text-primary transition-colors hover:translate-y-[-2px] transition-transform duration-300 px-2 py-2"
            href="#"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
