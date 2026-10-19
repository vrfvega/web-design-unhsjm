import { useEffect, type RefObject } from 'react'

// The image moves at a fraction of the scroll speed, so it drifts behind its section.
const SPEED = 0.2

export function useParallax(
  sectionRef: RefObject<HTMLElement | null>,
  imageRef: RefObject<HTMLImageElement | null>,
) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const section = sectionRef.current
      const img = imageRef.current
      if (!section || !img) return

      const rect = section.getBoundingClientRect()
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      img.style.transform = `translate3d(0, ${offset * -SPEED}px, 0)`
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [sectionRef, imageRef])
}
