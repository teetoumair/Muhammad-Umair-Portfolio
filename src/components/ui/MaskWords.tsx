import { Fragment } from 'react'
import { useInView } from './useInView'

interface MaskWordsProps {
  text: string
  accents?: string[]
  baseDelay?: number
  step?: number
  className?: string
}

const normalize = (word: string) => word.replace(/[^A-Za-z']/g, '')

export default function MaskWords({
  text,
  accents = [],
  baseDelay = 0,
  step = 55,
  className = '',
}: MaskWordsProps) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => {
          const isAccent = accents.includes(normalize(word))
          return (
            <Fragment key={i}>
              {i > 0 && ' '}
              <span className="mask-word">
                <span
                  style={{ transitionDelay: `${baseDelay + i * step}ms` }}
                  className={inView ? 'is-shown' : ''}
                >
                  {isAccent ? (
                    <em className="font-display font-semibold text-accent italic">{word}</em>
                  ) : (
                    word
                  )}
                </span>
              </span>
            </Fragment>
          )
        })}
      </span>
    </span>
  )
}
