import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { GiftCurator } from "@/components/GiftCurator";

export default function Corporate() {
  return (
    <Container>
      {/* Hero Section */}
      <SectionTitle
        preTitle="Corporate Gifting"
        title="Sustainable Corporate Gifts That Make a Difference"
      >
        Elevate your corporate gifting with handcrafted, eco-friendly products that reflect your 
        company&apos;s commitment to sustainability and social responsibility. Every gift supports rural 
        artisans and demonstrates your values to clients, partners, and employees.
      </SectionTitle>

      {/* Why Choose Sustainable Corporate Gifts */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white font-playfair mb-12">
            Why Choose Sustainable Corporate Gifts?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-saavi-gold rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Brand Values</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Demonstrate your commitment to sustainability and social responsibility through meaningful gifts.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-saavi-gold rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Handcrafted products with superior quality that leave lasting impressions on recipients.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-saavi-gold rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Social Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Support rural artisans and their communities while preserving traditional Indian craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Comparisons */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white font-playfair mb-12">
            Sustainable Choices Matter
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Plastic vs Glass */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-center flex-1">
                  <img
                    src="/img/plastic-bottle.svg"
                    alt="Plastic bottles"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-semibold text-red-600">Plastic Bottles</h3>
                  <p className="text-sm text-gray-500">Traditional Choice</p>
                </div>
                
                <div className="mx-4">
                  <span className="text-2xl font-bold text-saavi-gold">VS</span>
                </div>
                
                <div className="text-center flex-1">
                  <img
                    src="/img/glass-bottle.svg"
                    alt="Glass bottles"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-semibold text-green-600">Handcrafted Glass</h3>
                  <p className="text-sm text-gray-500">Saavi Choice</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Plastic Impact</h4>
                    <ul className="space-y-1 text-red-600 dark:text-red-400">
                      <li>• Takes 450+ years to decompose</li>
                      <li>• Releases microplastics</li>
                      <li>• Pollutes oceans & wildlife</li>
                      <li>• Single-use mentality</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Glass Benefits</h4>
                    <ul className="space-y-1 text-green-600 dark:text-green-400">
                      <li>• 100% recyclable infinitely</li>
                      <li>• Chemical-free & safe</li>
                      <li>• Supports artisan livelihoods</li>
                      <li>• Reusable & durable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Paraffin vs Soy Candles */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-center flex-1">
                  <img
                    src="/img/paraffin-candle.svg"
                    alt="Paraffin candles"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-semibold text-red-600">Paraffin Candles</h3>
                  <p className="text-sm text-gray-500">Petroleum-based</p>
                </div>
                
                <div className="mx-4">
                  <span className="text-2xl font-bold text-saavi-gold">VS</span>
                </div>
                
                <div className="text-center flex-1">
                  <img
                    src="/img/soy-candle.svg"
                    alt="Soy candles"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-semibold text-green-600">Soy Candles</h3>
                  <p className="text-sm text-gray-500">Plant-based</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Paraffin Issues</h4>
                    <ul className="space-y-1 text-red-600 dark:text-red-400">
                      <li>• Releases toxic chemicals</li>
                      <li>• Petroleum byproduct</li>
                      <li>• Shorter burn time</li>
                      <li>• Produces black soot</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Soy Advantages</h4>
                    <ul className="space-y-1 text-green-600 dark:text-green-400">
                      <li>• Natural & biodegradable</li>
                      <li>• Clean burning, no toxins</li>
                      <li>• Longer lasting burn</li>
                      <li>• Supports farmers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Gift Categories */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white font-playfair mb-12">
            Sustainable Corporate Gift Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-saavi-gold to-saavi-gold-dark rounded-lg flex items-center justify-center">
                <img
                  src="/img/eco-desk-accessories.svg"
                  alt="Eco desk accessories"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Eco Desk Accessories</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Bamboo organizers, recycled paper notebooks, wooden pen stands
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-saavi-gold to-saavi-gold-dark rounded-lg flex items-center justify-center">
                <img
                  src="/img/sustainable-drinkware.svg"
                  alt="Sustainable drinkware"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sustainable Drinkware</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Handcrafted ceramic mugs, copper bottles, bamboo tumblers
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-saavi-gold to-saavi-gold-dark rounded-lg flex items-center justify-center">
                <img
                  src="/img/artisan-wellness.svg"
                  alt="Wellness products"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Wellness Collection</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Natural soaps, essential oils, meditation accessories
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-saavi-gold to-saavi-gold-dark rounded-lg flex items-center justify-center">
                <img
                  src="/img/festive-sustainable.svg"
                  alt="Festive gifts"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Festive Celebrations</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Traditional diyas, eco-friendly decorations, ceremonial items
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits for Companies */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white font-playfair mb-12">
            Benefits for Forward-Thinking Companies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Environmental Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Reduced Carbon Footprint</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Locally sourced materials and traditional production methods</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Zero Waste Production</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Traditional techniques utilize natural materials completely</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Biodegradable Packaging</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Natural materials that return safely to the earth</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Business Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-saavi-gold rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Enhanced Brand Image</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Associate your brand with sustainability and social responsibility</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-saavi-gold rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Employee Engagement</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Meaningful gifts that align with employee values</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-saavi-gold rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">CSR Compliance</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Meet corporate social responsibility goals effectively</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Corporate Solutions */}
      <SectionTitle
        preTitle="Custom Solutions"
        title="Tailored Corporate Gift Programs"
      >
        Let us create a sustainable gifting program that reflects your company&apos;s values and makes a positive impact. 
        From employee appreciation to client gifts, we customize every aspect to your needs.
      </SectionTitle>

      <GiftCurator />
    </Container>
  );
}