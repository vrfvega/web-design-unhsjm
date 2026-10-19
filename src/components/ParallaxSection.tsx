import { useRef, type ReactNode } from 'react'
import { useParallax } from '../hooks/useParallax'

type ParallaxSectionProps = {
  image: string
  alt: string
  className?: string
  children: ReactNode
}

export function ParallaxSection({ image, alt, className, children }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  useParallax(sectionRef, imageRef)

  return (
    <section ref={sectionRef} className={['parallax', className].filter(Boolean).join(' ')}>
      <div className="parallax-bg">
        <img ref={imageRef} src={image} alt={alt} />
      </div>
      <div className="parallax-content">{children}</div>
    </section>
  )
}
