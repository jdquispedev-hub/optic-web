import { useEffect, useState } from 'react'
import type { Product } from '@/data/types'
import { products as mockProducts } from '@/data/products'

interface UseProductsResult {
  products: Product[]
  isLoading: boolean
  error: string | null
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Simula llamada API
        await new Promise((resolve) => setTimeout(resolve, 400))
        setProducts(mockProducts)
      } catch {
        setError('Error al cargar productos')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, isLoading, error }
}

export function useProductById(id: string) {
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 200))
      const found = mockProducts.find((p) => p.id === id)
      setProduct(found ?? null)
      setIsLoading(false)
    }

    fetchProduct()
  }, [id])

  return { product, isLoading }
}
