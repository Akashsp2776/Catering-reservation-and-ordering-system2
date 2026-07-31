'use client'

import { createContext, useContext, useState } from 'react'
import { OrderItem } from '@/types'

interface CartContextType {
  items: OrderItem[]
  addItem: (item: OrderItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([])

  const addItem = (item: OrderItem) => {
    // Implementation will be added later
  }

  const removeItem = (itemId: string) => {
    // Implementation will be added later
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    // Implementation will be added later
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      total,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
