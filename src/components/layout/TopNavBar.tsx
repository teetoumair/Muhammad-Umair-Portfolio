import { useState, useEffect } from 'react'
import { CloseIcon, MenuIcon } from '../ui/icons'

const links = [
  { href: '#live', label: 'Live sites' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function TopNavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
        <nav className="shell flex h-16 items-center justify-between" aria-label="Main">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Muhammad Umair
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-solid px-5 py-2 text-sm">
              Say hello
            </a>
          </div>
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-ink/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-x-0 top-16 z-[70] border-b border-line bg-paper transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-[110%]'
        }`}
      >
        <div className="flex flex-col px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-4 font-display text-xl font-semibold last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-solid mt-4 mb-2"
          >
            Say hello
          </a>
          <a
            href="/resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="label-mono mt-2 mb-3 flex items-center justify-center gap-2 text-muted transition-colors hover:text-ink"
          >
            Download résumé ↓
          </a>
        </div>
      </div>
    </>
  )
}
