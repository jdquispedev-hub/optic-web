import { useEffect, useState } from 'react'
import type { Service } from '@/data/types'
import { services as mockServices } from '@/data/services'

interface UseServicesResult {
  services: Service[]
  isLoading: boolean
  error: string | null
}

export function useServices(): UseServicesResult {
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true)
      setError(null)
      try {
        await new Promise((resolve) => setTimeout(resolve, 300))
        setServices(mockServices)
      } catch {
        setError('Error al cargar servicios')
      } finally {
        setIsLoading(false)
      }
    }

    fetchServices()
  }, [])

  return { services, isLoading, error }
}
