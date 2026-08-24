import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
}

interface StarfieldOptions {
  count?: number
  baseSpeed?: number
  reactiveRadius?: number
  reactiveStrength?: number
}

export default function Starfield({
  canvasId,
  options = {},
}: {
  canvasId: string
  options?: StarfieldOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const config = {
      count: 200,
      baseSpeed: 0.1,
      reactiveRadius: 150,
      reactiveStrength: 0.5,
      ...options,
    }

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      canvas!.width = parent.offsetWidth
      canvas!.height = parent.offsetHeight
      initStars()
    }

    function initStars() {
      const stars: Star[] = []
      for (let i = 0; i < config.count; i++) {
        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          vx: (Math.random() - 0.5) * config.baseSpeed,
          vy: (Math.random() - 0.5) * config.baseSpeed,
        })
      }
      starsRef.current = stars
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      starsRef.current.forEach((star) => {
        star.x += star.vx
        star.y += star.vy

        if (star.x < 0) star.x = canvas!.width
        if (star.x > canvas!.width) star.x = 0
        if (star.y < 0) star.y = canvas!.height
        if (star.y > canvas!.height) star.y = 0

        const dx = star.x - mouseRef.current.x
        const dy = star.y - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        let renderX = star.x
        let renderY = star.y

        if (dist < config.reactiveRadius) {
          const force =
            (config.reactiveRadius - dist) / config.reactiveRadius
          renderX += dx * force * config.reactiveStrength
          renderY += dy * force * config.reactiveStrength
        }

        ctx!.beginPath()
        ctx!.arc(renderX, renderY, star.size, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx!.fill()
      })

      animFrameRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [options.count, options.baseSpeed, options.reactiveRadius, options.reactiveStrength])

  return (
    <canvas
      ref={canvasRef}
      className="star-canvas"
      id={canvasId}
    />
  )
}
