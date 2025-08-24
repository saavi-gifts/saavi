import fs from 'fs'
import path from 'path'
import { Gift } from '@/types/gift'

const DATA_DIR = path.join(process.cwd(), 'data')
const GIFTS_FILE = path.join(DATA_DIR, 'gifts.json')

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

// Initialize gifts file if it doesn't exist
if (!fs.existsSync(GIFTS_FILE)) {
  fs.writeFileSync(GIFTS_FILE, JSON.stringify([], null, 2))
}

export const storage = {
  // Read all gifts
  getGifts: (): Gift[] => {
    try {
      const data = fs.readFileSync(GIFTS_FILE, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error reading gifts file:', error)
      return []
    }
  },

  // Save gifts to file
  saveGifts: (gifts: Gift[]): void => {
    try {
      fs.writeFileSync(GIFTS_FILE, JSON.stringify(gifts, null, 2))
    } catch (error) {
      console.error('Error saving gifts file:', error)
      throw new Error('Failed to save gifts')
    }
  },

  // Get gift by ID
  getGiftById: (id: string): Gift | null => {
    const gifts = storage.getGifts()
    return gifts.find(gift => gift.id === id) || null
  },

  // Add new gift
  addGift: (giftData: Omit<Gift, 'id' | 'createdAt' | 'updatedAt'>): Gift => {
    const gifts = storage.getGifts()
    const newGift: Gift = {
      ...giftData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    gifts.push(newGift)
    storage.saveGifts(gifts)
    return newGift
  },

  // Update existing gift
  updateGift: (id: string, giftData: Partial<Omit<Gift, 'id' | 'createdAt'>>): Gift | null => {
    const gifts = storage.getGifts()
    const index = gifts.findIndex(gift => gift.id === id)
    
    if (index === -1) {
      return null
    }

    gifts[index] = {
      ...gifts[index],
      ...giftData,
      updatedAt: new Date()
    }
    
    storage.saveGifts(gifts)
    return gifts[index]
  },

  // Delete gift
  deleteGift: (id: string): boolean => {
    const gifts = storage.getGifts()
    const index = gifts.findIndex(gift => gift.id === id)
    
    if (index === -1) {
      return false
    }

    gifts.splice(index, 1)
    storage.saveGifts(gifts)
    return true
  }
}