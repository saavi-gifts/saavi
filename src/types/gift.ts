export interface Gift {
  id: string
  name: string
  description?: string
  priceRangeMin?: number
  priceRangeMax?: number
  dimensions?: {
    length: number
    width: number
    height: number
    unit: 'cm' | 'inches'
  }
  occasions: string[]
  category: string
  tags: string[]
  imageUrl?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CreateGiftData {
  name: string
  description?: string
  priceRangeMin?: number
  priceRangeMax?: number
  dimensions?: {
    length: number
    width: number
    height: number
    unit: 'cm' | 'inches'
  }
  occasions: string[]
  category: string
  tags: string[]
  imageUrl?: string
  isActive: boolean
}