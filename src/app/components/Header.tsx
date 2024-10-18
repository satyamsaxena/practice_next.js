'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { ShoppingCart } from 'lucide-react'

export function Header() {
  const { cart } = useCart()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ModernShop
        </Link>
        <nav>
          <Link href="/cart" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <ShoppingCart className="w-6 h-6 mr-2" />
            <span className="font-semibold">
              Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}