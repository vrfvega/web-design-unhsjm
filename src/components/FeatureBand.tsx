import { ParallaxSection } from './ParallaxSection'

type FeatureBandProps = {
  image: string
  eyebrow: string
  title: string
  text: string
  actionLabel: string
  onAction: () => void
}

// A shorter parallax band that promotes one dish between menu sections.
export function FeatureBand({ image, eyebrow, title, text, actionLabel, onAction }: FeatureBandProps) {
  return (
    <ParallaxSection image={image} alt="" className="parallax-compact">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
      <button className="btn-light band-action" onClick={onAction}>
        {actionLabel}
      </button>
    </ParallaxSection>
  )
}
