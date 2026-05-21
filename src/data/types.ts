export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  brand: string
  available: boolean
  colors?: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface CompanyInfo {
  name: string
  slogan: string
  phone: string
  email: string
  address: string
  whatsapp: string
}
