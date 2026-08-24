import { useState, useEffect } from 'react'

const sectionIds = ['story', 'work', 'lab', 'timeline']

export default function TopNavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '#story', label: 'Story' },
    { href: '#work', label: 'Work' },
    { href: '#lab', label: 'Lab' },
    { href: '#timeline', label: 'Timeline' },
  ]

  const sidebarBg = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl">
        <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-gutter flex justify-between items-center h-16 sm:h-20">
          <a
            className="font-display-lg text-[18px] sm:text-headline-sm font-bold tracking-tighter text-white"
            href="#"
          >
            Muhammad Umair
          </a>
          <div className="hidden md:flex gap-gutter items-center">
            {links.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={link.href}
                  className={`font-label-caps text-label-caps uppercase tracking-widest transition-all duration-200 hover:scale-105 py-2 ${
                    isActive
                      ? 'text-white font-bold border-b-2 pb-1 border-white'
                      : 'text-white/50 font-normal hover:text-white/80'
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              )
            })}
            <button className="ml-4 sm:ml-stack-md text-black px-4 sm:px-gutter py-2.5 sm:py-3 rounded-full font-label-caps text-label-caps uppercase tracking-widest transition-all active:opacity-70 hover:scale-105 bg-white border border-white/20 shadow-lg shadow-white/10">
              Connect
            </button>
          </div>
          <button
            className="md:hidden text-white w-11 h-11 flex items-center justify-center -mr-2 rounded-lg active:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 z-[60]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 300ms',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className="md:hidden fixed top-16 sm:top-20 right-0 bottom-0 w-72 z-[70] flex flex-col border-l border-white/10 pb-[env(safe-area-inset-bottom)]"
        style={{
          ...sidebarBg,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms ease-out',
        }}
      >
        <div className="flex items-center px-6 py-4 border-b border-white/5">
          <span className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/50">Menu</span>
        </div>
        <div className="flex flex-col">
          {links.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={link.href}
                className={`w-full font-label-caps text-[13px] uppercase tracking-[0.2em] px-6 py-4 transition-colors duration-200 border-b border-white/5 active:bg-white/10 active:scale-[0.98] ${
                  isActive
                    ? 'text-white bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          })}
        </div>
        <div className="px-6 pt-8">
          <button
            className="w-full bg-white text-black py-3 rounded-full font-label-caps text-[13px] uppercase tracking-widest font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Connect
          </button>
        </div>
      </div>
    </>
  )
}
