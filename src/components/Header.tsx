export type Page = 'menu' | 'cart' | 'confirmation'

type HeaderProps = {
  page: Page
  cartCount: number
  onNavigate: (page: Page) => void
}

export function Header({ page, cartCount, onNavigate }: HeaderProps) {
  return (
    <header className="header">
      <button className="brand" onClick={() => onNavigate('menu')}>
        Hinoki
      </button>
      <nav className="nav">
        <button
          aria-current={page === 'menu' ? 'page' : undefined}
          onClick={() => onNavigate('menu')}
        >
          Menú
        </button>
        <button
          aria-current={page === 'cart' ? 'page' : undefined}
          onClick={() => onNavigate('cart')}
        >
          Carrito ({cartCount})
        </button>
      </nav>
    </header>
  )
}
