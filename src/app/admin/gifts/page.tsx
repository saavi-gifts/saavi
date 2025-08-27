"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Container } from "@/components/Container"
import { Gift, CreateGiftData } from "@/types/gift"
import { ImageUpload } from "@/components/ImageUpload"
import { PhotoIcon } from "@heroicons/react/24/outline"

const occasionOptions = [
  "Birthday", "Anniversary", "Wedding", "Diwali", "Holi", "Christmas", 
  "New Year", "Valentine's Day", "Mother's Day", "Father's Day", 
  "Graduation", "Housewarming", "Baby Shower", "Corporate Gifts"
]

const categoryOptions = [
  "Home Decor", "Jewelry", "Textiles", "Pottery", "Wooden Crafts", 
  "Metalware", "Paper Crafts", "Personal Care", "Kitchen Items", "Other"
]

export default function AdminGifts() {
  const router = useRouter()
  const [gifts, setGifts] = useState<Gift[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingGift, setEditingGift] = useState<Gift | null>(null)
  const [showJsonOutput, setShowJsonOutput] = useState(false)
  const [jsonOutput, setJsonOutput] = useState("")
  const [user, setUser] = useState<any>(null)

  // Form state
  const [formData, setFormData] = useState<CreateGiftData>({
    name: "",
    description: "",
    category: "Home Decor",
    priceRangeMin: 0,
    priceRangeMax: 0,
    occasions: [],
    tags: [],
    isActive: true,
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
      unit: "cm"
    }
  })

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('admin_logged_in')
    const userData = localStorage.getItem('admin_user')
    
    if (isLoggedIn !== 'true' || !userData) {
      router.push("/admin/login")
      return
    }
    
    try {
      setUser(JSON.parse(userData))
    } catch (error) {
      console.error('Error parsing user data:', error)
      router.push("/admin/login")
    }
  }, [router])

  useEffect(() => {
    loadGifts()
  }, [])

  const loadGifts = () => {
    // Load gifts from the actual data/gifts.json file
    const actualGifts: Gift[] = [
      {
        id: "1752938563576",
        name: "Diya",
        description: "Handmade Diyas",
        category: "Home Decor",
        priceRangeMin: 20,
        priceRangeMax: 40,
        dimensions: { length: 3, width: 4, height: 5, unit: "cm" },
        occasions: ["Diwali", "Corporate Gifts"],
        tags: ["handmade"],
        isActive: true,
        createdAt: new Date("2025-07-19T15:22:43.576Z"),
        updatedAt: new Date("2025-07-19T15:22:43.576Z")
      }
    ]
    setGifts(actualGifts)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleOccasionChange = (occasion: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      occasions: checked 
        ? [...prev.occasions, occasion]
        : prev.occasions.filter(o => o !== occasion)
    }))
  }

  const handleTagChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag)
    setFormData(prev => ({ ...prev, tags }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (editingGift) {
        // Update existing gift
        const updatedGift: Gift = {
          ...editingGift,
          ...formData,
          updatedAt: new Date()
        }
        setGifts(prev => prev.map(gift => gift.id === editingGift.id ? updatedGift : gift))
      } else {
        // Add new gift
        const newGift: Gift = {
          ...formData,
          id: Date.now().toString(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
        setGifts(prev => [...prev, newGift])
      }

      resetForm()
    } catch (error) {
      console.error('Error saving gift:', error)
      alert('Failed to save gift')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (gift: Gift) => {
    setEditingGift(gift)
    setFormData({
      name: gift.name,
      description: gift.description || "",
      category: gift.category,
      priceRangeMin: gift.priceRangeMin || 0,
      priceRangeMax: gift.priceRangeMax || 0,
      occasions: gift.occasions || [],
      tags: gift.tags || [],
      isActive: gift.isActive,
      dimensions: gift.dimensions || { length: 0, width: 0, height: 0, unit: "cm" }
    })
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this gift?')) {
      setGifts(prev => prev.filter(gift => gift.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      category: "Home Decor",
      priceRangeMin: 0,
      priceRangeMax: 0,
      occasions: [],
      tags: [],
      isActive: true,
      dimensions: {
        length: 0,
        width: 0,
        height: 0,
        unit: "cm"
      }
    })
    setEditingGift(null)
    setShowForm(false)
  }

  const generateJsonOutput = () => {
    const jsonString = JSON.stringify(gifts, null, 2)
    setJsonOutput(jsonString)
    setShowJsonOutput(true)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput)
    alert('JSON copied to clipboard! Paste it into your data/gifts.json file.')
  }

  const handleSignOut = () => {
    localStorage.removeItem('admin_logged_in')
    localStorage.removeItem('admin_user')
    router.push('/admin/login')
  }

  if (!user) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-lg">Loading...</div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="min-h-screen py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-playfair">
              Gift Items Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Welcome, {user?.name}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={generateJsonOutput}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Export JSON
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="bg-saavi-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Add New Gift
            </button>
            <button
              onClick={handleSignOut}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Gift Form */}
        {showForm && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {editingGift ? 'Edit Gift' : 'Add New Gift'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                  >
                    {categoryOptions.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Product Image</label>
                <ImageUpload
                  value={formData.imageUrl}
                  onChange={(imageUrl) => handleInputChange('imageUrl', imageUrl)}
                  onRemove={() => handleInputChange('imageUrl', '')}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Min Price (₹)</label>
                  <input
                    type="number"
                    value={formData.priceRangeMin}
                    onChange={(e) => handleInputChange('priceRangeMin', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Max Price (₹)</label>
                  <input
                    type="number"
                    value={formData.priceRangeMax}
                    onChange={(e) => handleInputChange('priceRangeMax', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Unit</label>
                  <select
                    value={formData.dimensions?.unit || "cm"}
                    onChange={(e) => handleInputChange('dimensions', { ...formData.dimensions, unit: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                  >
                    <option value="cm">cm</option>
                    <option value="inches">inches</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Length</label>
                  <input
                    type="number"
                    value={formData.dimensions?.length || 0}
                    onChange={(e) => handleInputChange('dimensions', { ...formData.dimensions, length: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Width</label>
                  <input
                    type="number"
                    value={formData.dimensions?.width || 0}
                    onChange={(e) => handleInputChange('dimensions', { ...formData.dimensions, width: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Height</label>
                  <input
                    type="number"
                    value={formData.dimensions?.height || 0}
                    onChange={(e) => handleInputChange('dimensions', { ...formData.dimensions, height: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Occasions</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {occasionOptions.map(occasion => (
                    <label key={occasion} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.occasions.includes(occasion)}
                        onChange={(e) => handleOccasionChange(occasion, e.target.checked)}
                        className="mr-2"
                      />
                      {occasion}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={formData.tags.join(', ')}
                  onChange={(e) => handleTagChange(e.target.value)}
                  placeholder="handmade, eco-friendly, traditional"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => handleInputChange('isActive', e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="isActive" className="text-sm font-medium">
                  Active (visible to customers)
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-saavi-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-medium transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Saving...' : (editingGift ? 'Update Gift' : 'Add Gift')}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* JSON Output Modal */}
        {showJsonOutput && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4">Export JSON Data</h3>
              <p className="text-sm text-gray-600 mb-4">
                Copy this JSON and paste it into your <code>data/gifts.json</code> file, then rebuild and redeploy.
              </p>
              <textarea
                value={jsonOutput}
                readOnly
                rows={20}
                className="w-full p-4 border border-gray-300 rounded-md font-mono text-sm bg-gray-50"
              />
              <div className="flex gap-4 mt-4">
                <button
                  onClick={copyToClipboard}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Copy to Clipboard
                </button>
                <button
                  onClick={() => setShowJsonOutput(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Gifts List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold">Current Gifts ({gifts.length})</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Gift
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Price Range
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {gifts.map((gift) => (
                  <tr key={gift.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {gift.imageUrl ? (
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <img
                            src={gift.imageUrl}
                            alt={gift.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <PhotoIcon className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {gift.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {gift.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {gift.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {gift.priceRangeMin && gift.priceRangeMax 
                        ? `₹${gift.priceRangeMin} - ₹${gift.priceRangeMax}`
                        : 'Price on request'
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        gift.isActive 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {gift.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEdit(gift)}
                        className="text-saavi-gold hover:text-yellow-600 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(gift.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  )
}