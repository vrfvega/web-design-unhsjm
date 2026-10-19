import { formatPrice, type Order } from '../lib/order'

type ConfirmationPageProps = {
  order: Order
  onNewOrder: () => void
}

export function ConfirmationPage({ order, onNewOrder }: ConfirmationPageProps) {
  return (
    <main className="container narrow stack-center">
      <p className="eyebrow">Gracias</p>
      <h1 className="page-title">Pedido recibido</h1>
      <p className="order-number">{order.number}</p>
      <p className="muted">
        {order.payment === 'store'
          ? 'Muestra este número en el mostrador y paga al recoger tu pedido.'
          : 'Muestra este número en el mostrador. Solo demostración, no se ha cobrado nada.'}
      </p>

      <ul className="confirm-lines">
        {order.lines.map(({ item, quantity }) => (
          <li key={item.id}>
            <span>
              {quantity} × {item.name}
            </span>
            <span>{formatPrice(item.price * quantity)}</span>
          </li>
        ))}
        <li className="total">
          <span>Total</span>
          <span>{formatPrice(order.total)}</span>
        </li>
      </ul>

      <button className="btn-solid" onClick={onNewOrder}>
        Volver al menú
      </button>
    </main>
  )
}
