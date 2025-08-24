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

  // TODO: Future curation functionality - can be easily restored
  // const handleAddToCuration = (gift: Gift) => {
  //   // In a real app, this would add to a cart or curation list
  //   console.log("Added to curation:", gift.name)
  //   alert(`${gift.name} added to your curation list!`)
  // }

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
      {/* Engaging Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-playfair mb-4">
          Discover Handcrafted Treasures
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Each piece tells a story of tradition, craftsmanship, and the skilled hands of rural artisans. 
          Browse our collection and let us know what captures your heart.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <svg className="w-5 h-5 text-saavi-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Handcrafted with love
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <svg className="w-5 h-5 text-saavi-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Supporting rural artisans
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <svg className="w-5 h-5 text-saavi-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Eco-friendly materials
          </div>
        </div>
      </div>

      {/* Gifts Grid */}
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
                  onClick={() => setSelectedGift(gift)}
                  className="flex-1 bg-saavi-gold hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                >
                  View Details
                </button>
                <button
                  onClick={() => setSelectedGift(gift)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-saavi-gold/10 to-yellow-600/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair mb-4">
          Love What You See?
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Each piece is uniquely crafted and can be customized to your preferences. 
          Get in touch with us to discuss your requirements, place orders, or learn more about our artisans.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-saavi-gold hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get in Touch
          </a>
          <a
            href="tel:+919876543210"
            className="border border-saavi-gold text-saavi-gold hover:bg-saavi-gold hover:text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          We&apos;re here to help you find the perfect handcrafted gift
        </p>
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
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedGift(null)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="bg-saavi-gold hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded transition-colors duration-200"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};