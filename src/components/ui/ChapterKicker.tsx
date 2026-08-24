import { useInView } from './useInView'

interface ChapterKickerProps {
  num: string
  title: string
  dark?: boolean
  className?: string
}

export default function ChapterKicker({ num, title, dark = false, className = '' }: ChapterKickerProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        style={{ transitionDelay: '100ms' }}
        className={`h-px w-10 origin-left transition-transform duration-700 ease-out ${
          dark ? 'bg-accent' : 'bg-accent'
        } ${inView ? 'scale-x-100' : 'scale-x-0'}`}
      />
      <p className={`label-mono transition-colors duration-700 ${dark ? 'text-paper/50' : 'text-muted'}`}>
        <span className="text-accent">{num}</span>
        <span className={dark ? 'text-paper/40' : ''}>{' · '}</span>
        {title}
      </p>
    </div>
  )
}
