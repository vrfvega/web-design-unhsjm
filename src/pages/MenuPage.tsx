import { Fragment, useRef } from 'react'
import heroImg from '../assets/menu/hero.jpg'
import fujiImg from '../assets/menu/fuji.jpg'
import seafoodNigiriImg from '../assets/menu/seafood-nigiri.jpg'
import rollPlatterImg from '../assets/menu/roll-platter.jpg'
import chocolateFondantImg from '../assets/menu/chocolate-fondant.jpg'
import { FeatureBand } from '../components/FeatureBand'
import { ParallaxSection } from '../components/ParallaxSection'
import { useParallax } from '../hooks/useParallax'
import { categories, menuItems, type MenuCategory, type MenuItem } from '../data/menu'
import { formatPrice, type CartQuantities } from '../lib/order'

// Each category gets its own arrangement so the menu doesn't read as one uniform grid.
const layouts: Record<MenuCategory, string> = {
  Sushi: 'feature',
  Makis: 'stagger',
  Platos: 'rows',
  Postres: 'masonry',
  'Dulces japoneses': 'round',
  Té: 'duo',
}

// Promotional bands shown after a category, each featuring one dish.
const bands: {
  after: MenuCategory
  image: string
  eyebrow: string
  title: string
  text: string
  itemId: string
}[] = [
  {
    after: 'Sushi',
    image: seafoodNigiriImg,
    eyebrow: 'Especial del mar',
    title: 'Del mar a tu mesa.',
    text: 'Nuestro nigiri del mar, preparado al momento con pescado de la semana.',
    itemId: 'seafood-nigiri',
  },
  {
    after: 'Makis',
    image: rollPlatterImg,
    eyebrow: 'Para compartir',
    title: 'Una bandeja para todos.',
    text: 'Surtido de makis variados, perfecto para la mesa.',
    itemId: 'roll-platter',
  },
  {
    after: 'Postres',
    image: chocolateFondantImg,
    eyebrow: 'Dulce final',
    title: 'Cierra con algo especial.',
    text: 'Coulant de chocolate tibio, con fresas frescas.',
    itemId: 'chocolate-fondant',
  },
]

type MenuPageProps = {
  quantities: CartQuantities
  onAdd: (id: string) => void
}

export function MenuPage({ quantities, onAdd }: MenuPageProps) {
  const heroRef = useRef<HTMLElement>(null)
  const heroImgRef = useRef<HTMLImageElement>(null)
  useParallax(heroRef, heroImgRef)

  return (
    <>
      <section ref={heroRef} className="hero">
        <div className="parallax-bg">
          <img ref={heroImgRef} src={heroImg} alt="" />
        </div>
        <div className="hero-text">
          <p className="eyebrow">Cocina japonesa</p>
          <h1>Hecho con calma, cada día.</h1>
        </div>
      </section>

      <main className="container">
        {categories.map((category) => {
          const band = bands.find((b) => b.after === category)
          return (
            <Fragment key={category}>
              <section className={`menu-section layout-${layouts[category]}`}>
                <h2>{category}</h2>
                <div className="menu-grid">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <MenuCard
                        key={item.id}
                        item={item}
                        inCart={quantities[item.id] ?? 0}
                        onAdd={onAdd}
                      />
                    ))}
                </div>
              </section>

              {band && (
                <FeatureBand
                  image={band.image}
                  eyebrow={band.eyebrow}
                  title={band.title}
                  text={band.text}
                  actionLabel="Añadir al carrito"
                  onAction={() => onAdd(band.itemId)}
                />
              )}
            </Fragment>
          )
        })}
      </main>

      <ParallaxSection image={fujiImg} alt="Monte Fuji entre cerezos en flor">
        <p className="eyebrow">Nuestra historia</p>
        <h2>Inspirados en Japón.</h2>
        <p>
          Cada plato nace de la cocina tradicional japonesa, preparado al
          momento con ingredientes frescos y mucho cuidado.
        </p>
      </ParallaxSection>
    </>
  )
}

type MenuCardProps = {
  item: MenuItem
  inCart: number
  onAdd: (id: string) => void
}

function MenuCard({ item, inCart, onAdd }: MenuCardProps) {
  return (
    <article className="card">
      <img src={item.image} alt={item.name} loading="lazy" />
      <div className="card-body">
        <div className="card-title">
          <h3>{item.name}</h3>
          <span>{formatPrice(item.price)}</span>
        </div>
        <p>{item.description}</p>
        <div className="card-footer">
          <span className="muted">{inCart > 0 ? `${inCart} en el carrito` : ''}</span>
          <button className="btn-text" onClick={() => onAdd(item.id)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </article>
  )
}
