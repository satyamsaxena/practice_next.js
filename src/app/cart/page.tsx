'use client'

import { useCart } from '@/app/context/CartContext'
import { Header } from '@/app/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'

export default function Cart() {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart()

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
            <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4 last:border-b-0">
                  <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-md" />
                  <div className="ml-4 flex-grow">
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 transition-colors duration-300"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-blue-600">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={clearCart}
                  className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors duration-300"
                >
                  Clear Cart
                </button>
                <Link
                  href="/checkout"
                  className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}