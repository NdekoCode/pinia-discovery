export type Product = {
  id: number | string
  title: string
  description: string
  price: number
  discountPercentage?: number
  rating?: {
    rate: number
    count: number
  }
  stock?: number
  category?: string
  image?: string
  images?: string[]
}
