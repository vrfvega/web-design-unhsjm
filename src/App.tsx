import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header, type Page } from './components/Header'
import { CartPage } from './pages/CartPage'
import { ConfirmationPage } from './pages/ConfirmationPage'
import { MenuPage } from './pages/MenuPage'
import {
  generateOrderNumber,
  getCartLines,
  getCartTotal,
  type CartQuantities,
  type Order,
  type PaymentMethod,
} from './lib/order'
import './App.css'

function App() {
  const [page, setPage] = useState<Page>('menu')
  const [quantities, setQuantities] = useState<CartQuantities>({})
  const [order, setOrder] = useState<Order | null>(null)

  const lines = getCartLines(quantities)
  const cartCount = lines.reduce((sum, line) => sum + line.quantity, 0)

  const navigate = (next: Page) => {
    setPage(next)
    window.scrollTo({ top: 0 })
  }

  const addItem = (id: string) =>
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))

  const setQuantity = (id: string, quantity: number) =>
    setQuantities((prev) => {
      const next = { ...prev }
      if (quantity > 0) {
        next[id] = quantity
      } else {
        delete next[id]
      }
      return next
    })

  const placeOrder = (payment: PaymentMethod) => {
    setOrder({
      number: generateOrderNumber(),
      lines,
      total: getCartTotal(lines),
      payment,
    })
    setQuantities({})
    navigate('confirmation')
  }

  return (
    <>
      <Header page={page} cartCount={cartCount} onNavigate={navigate} />

      {page === 'menu' && (
        <MenuPage quantities={quantities} onAdd={addItem} />
      )}

      {page === 'cart' && (
        <CartPage
          lines={lines}
          onChangeQuantity={setQuantity}
          onCheckout={placeOrder}
          onNavigateMenu={() => navigate('menu')}
        />
      )}

      {page === 'confirmation' && order && (
        <ConfirmationPage
          order={order}
          onNewOrder={() => {
            setOrder(null)
            navigate('menu')
          }}
        />
      )}

      <Footer />
    </>
  )
}

export default App
