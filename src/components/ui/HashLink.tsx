import { useNavigate } from 'react-router'

export default function HashLink({
  to,
  children,
  className,
  onClick,
}: {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const navigate = useNavigate()

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    onClick?.()
    const hash = to.replace('/', '')
    navigate('/' + hash)
    setTimeout(() => {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
