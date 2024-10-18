import Image from 'next/image'
import { useState } from 'react'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        {imageError ? (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Image not available</span>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 ease-in-out"
            style={{ opacity: isHovered ? 0.8 : 1 }}
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 truncate">{product.title}</h2>
        <p className="text-gray-600 mb-2 truncate">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}