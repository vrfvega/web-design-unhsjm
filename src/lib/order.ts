import { menuItems, type MenuItem } from '../data/menu'

export type CartQuantities = Record<string, number>

export type CartLine = {
  item: MenuItem
  quantity: number
}

export type PaymentMethod = 'store' | 'online'

export type Order = {
  number: string
  lines: CartLine[]
  total: number
  payment: PaymentMethod
}

// Prices are stored in USD and displayed in Nicaraguan córdobas.
// Approximate official rate, update it as needed.
const USD_TO_NIO = 36.6

const nioFormatter = new Intl.NumberFormat('es-NI', {
  style: 'currency',
  currency: 'NIO',
})

export const formatPrice = (usd: number) => nioFormatter.format(usd * USD_TO_NIO)

export function getCartLines(quantities: CartQuantities): CartLine[] {
  return menuItems
    .filter((item) => quantities[item.id] > 0)
    .map((item) => ({ item, quantity: quantities[item.id] }))
}

export const getCartTotal = (lines: CartLine[]) =>
  lines.reduce((sum, line) => sum + line.item.price * line.quantity, 0)

export function generateOrderNumber() {
  return `HK-${Math.floor(1000 + Math.random() * 9000)}`
}
