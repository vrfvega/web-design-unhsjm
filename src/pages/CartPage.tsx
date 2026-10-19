import { useState } from 'react'
import {
  formatPrice,
  getCartTotal,
  type CartLine,
  type PaymentMethod,
} from '../lib/order'

const paymentOptions: { value: PaymentMethod; label: string; description: string }[] = [
  {
    value: 'store',
    label: 'Pagar en tienda',
    description: 'Paga en el mostrador al recoger tu pedido.',
  },
  {
    value: 'online',
    label: 'Pagar con tarjeta',
    description: 'Solo demostración, no se cobrará nada.',
  },
]

type CartPageProps = {
  lines: CartLine[]
  onChangeQuantity: (id: string, quantity: number) => void
  onCheckout: (payment: PaymentMethod) => void
  onNavigateMenu: () => void
}

export function CartPage({
  lines,
  onChangeQuantity,
  onCheckout,
  onNavigateMenu,
}: CartPageProps) {
  const [payment, setPayment] = useState<PaymentMethod>('store')

  if (lines.length === 0) {
    return (
      <main className="container narrow stack-center">
        <p className="eyebrow">Carrito</p>
        <h1 className="page-title">Tu carrito está vacío.</h1>
        <button className="btn-solid" onClick={onNavigateMenu}>
          Ver el menú
        </button>
      </main>
    )
  }

  const total = getCartTotal(lines)

  return (
    <main className="container">
      <h1 className="page-title">Carrito</h1>

      <div className="cart-layout">
        <ul className="cart-lines">
          {lines.map(({ item, quantity }) => (
            <li key={item.id} className="cart-line">
              <img src={item.image} alt="" />
              <div className="cart-line-info">
                <h3>{item.name}</h3>
                <p className="muted">{formatPrice(item.price)}</p>
                <button
                  className="link"
                  onClick={() => onChangeQuantity(item.id, 0)}
                >
                  Quitar
                </button>
              </div>
              <div className="stepper">
                <button
                  aria-label={`Reducir ${item.name}`}
                  onClick={() => onChangeQuantity(item.id, quantity - 1)}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  aria-label={`Aumentar ${item.name}`}
                  onClick={() => onChangeQuantity(item.id, quantity + 1)}
                >
                  +
                </button>
              </div>
              <span className="line-total">
                {formatPrice(item.price * quantity)}
              </span>
            </li>
          ))}
        </ul>

        <aside className="summary">
          <h2>Resumen</h2>
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <fieldset className="payment">
            <legend>Pago</legend>
            {paymentOptions.map((option) => (
              <label key={option.value} className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value={option.value}
                  checked={payment === option.value}
                  onChange={() => setPayment(option.value)}
                />
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.description}</small>
                </span>
              </label>
            ))}
          </fieldset>

          <button className="btn-solid full" onClick={() => onCheckout(payment)}>
            Realizar pedido
          </button>
          <button className="link center-link" onClick={onNavigateMenu}>
            Seguir viendo el menú
          </button>
        </aside>
      </div>
    </main>
  )
}
