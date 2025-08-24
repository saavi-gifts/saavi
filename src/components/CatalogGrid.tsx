"use client";
import { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { Gift } from "@/types/gift";

// Gift data from data/gifts.json
const staticGifts: Gift[] = [
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
];

export const CatalogGrid = () => {
  const [gifts, setGifts] = useState<Gift[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null)

  useEffect(() => {
    // Use static data instead of API call
    setGifts(staticGifts.filter((gift: Gift) => gift.isActive))
    setLoading(false)
  }, [])

  const handleAddToCuration = (gift: Gift) => {
    // In a real app, this would add to a cart or curation list
    console.log("Added to curation:", gift.name)
    alert(`${gift.name} added to your curation list!`)
  }

  const getImageUrl = (gift: Gift) => {
    return gift.imageUrl || '/img/placeholder-sustainable.svg'
  }

  const formatPrice = (gift: Gift) => {
    if (gift.priceRangeMin && gift.priceRangeMax) {
      if (gift.priceRangeMin === gift.priceRangeMax) {
        return `₹${gift.priceRangeMin.toLocaleString()}`
      }
      return `₹${gift.priceRangeMin.toLocaleString()} - ₹${gift.priceRangeMax.toLocaleString()}`
    }
    return "Price on request"
  }

  if (loading) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600 dark:text-gray-400">Loading gifts...</div>
        </div>
      </Container>
    )
  }

  if (gifts.length === 0) {
    return (
      <Container>
        <div className="flex flex-col justify-center items-center h-64">
          <div className="text-lg text-gray-600 dark:text-gray-400 mb-4">No gifts available yet</div>
          <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
            Our artisans are crafting beautiful items. Check back soon!
          </p>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gifts.map((gift) => (
          <div
            key={gift.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Gift Image */}
            <div className="relative">
              <img
                src={getImageUrl(gift)}
                alt={gift.name}
                className="w-full h-64 object-cover"
              />
              <span className="absolute top-3 right-3 bg-saavi-gold text-white px-2 py-1 rounded-full text-xs font-medium">
                Handcrafted
              </span>
            </div>

            {/* Gift Details */}
            <div className="p-6">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-playfair">
                  {gift.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {gift.category}
                </p>
              </div>

              {gift.description && (
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {gift.description}
                </p>
              )}

              {/* Artisan Info */}
              <div className="mb-4 text-xs text-gray-600 dark:text-gray-400">
                <p><span className="text-saavi-gold font-medium">Saavi Artisans</span></p>
                <p>Handmade with love</p>
              </div>

              {/* Price */}
              <div className="flex items-center mb-4">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {formatPrice(gift)}
                </span>
              </div>

              {/* Occasions */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {gift.occasions.slice(0, 2).map((occasion) => (
                    <span
                      key={occasion}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {occasion}
                    </span>
                  ))}
                  {gift.occasions.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      +{gift.occasions.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleAddToCuration(gift)}
                  className="flex-1 bg-saavi-gold hover:bg-saavi-gold-dark text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                >
                  Add to Curation
                </button>
                <button
                  onClick={() => setSelectedGift(gift)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gift Detail Modal */}
      {selectedGift && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">
                  {selectedGift.name}
                </h2>
                <button
                  onClick={() => setSelectedGift(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <img
                src={getImageUrl(selectedGift)}
                alt={selectedGift.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              {selectedGift.description && (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {selectedGift.description}
                </p>
              )}
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Artisan Details</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Saavi Artisans
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Handmade with traditional techniques
                  </p>
                  {selectedGift.dimensions && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 text-sm">Dimensions:</h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {selectedGift.dimensions.length} × {selectedGift.dimensions.width} × {selectedGift.dimensions.height} {selectedGift.dimensions.unit}
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Perfect For</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedGift.occasions.map((occasion) => (
                      <span
                        key={occasion}
                        className="px-2 py-1 bg-saavi-gold text-white text-xs rounded"
                      >
                        {occasion}
                      </span>
                    ))}
                  </div>
                  {selectedGift.tags && selectedGift.tags.length > 0 && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 text-sm">Tags:</h5>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedGift.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formatPrice(selectedGift)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    handleAddToCuration(selectedGift);
                    setSelectedGift(null);
                  }}
                  className="bg-saavi-gold hover:bg-saavi-gold-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Add to Curation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};