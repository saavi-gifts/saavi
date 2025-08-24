import Image from "next/image";
import { Container } from "@/components/Container";

interface Gift {
  id: string;
  name: string;
  description: string;
  price: string;
  dimensions: string;
  occasion: string;
  image: string;
  category: string;
}

const sampleGifts: Gift[] = [
  {
    id: "1",
    name: "Handcrafted Wooden Diyas",
    description: "Eco-friendly wooden diyas handcrafted by rural artisans. Perfect for festivals and creating a warm, sustainable ambiance.",
    price: "₹150 - ₹300",
    dimensions: "3\" x 3\" x 1\"",
    occasion: "Diwali, Festival",
    image: "/img/hero.png",
    category: "Sustainable"
  },
  {
    id: "2",
    name: "Wooden Coaster Set",
    description: "Elegant wooden coasters with intricate designs, handmade by women artisans. Perfect for home or office use.",
    price: "₹200 - ₹500",
    dimensions: "4\" x 4\" x 0.5\"",
    occasion: "Housewarming, Corporate",
    image: "/img/hero.png",
    category: "Home Decor"
  },
  {
    id: "3",
    name: "Decorative Wooden Hooks",
    description: "Sustainable wooden hooks with traditional Indian motifs. Functional and beautiful for any space.",
    price: "₹100 - ₹250",
    dimensions: "2\" x 4\" x 1\"",
    occasion: "Housewarming, Corporate",
    image: "/img/hero.png",
    category: "Home Decor"
  },
  {
    id: "4",
    name: "Eco-Friendly T-Shirts",
    description: "Comfortable cotton t-shirts with Indian-inspired designs. Made with sustainable practices supporting local communities.",
    price: "₹350 - ₹800",
    dimensions: "S, M, L, XL, XXL",
    occasion: "Casual, Corporate",
    image: "/img/hero.png",
    category: "Apparel"
  },
  {
    id: "5",
    name: "Soya Wax Candles",
    description: "Natural soya-based candles in traditional Indian fragrances. Hand-poured by women entrepreneurs.",
    price: "₹250 - ₹600",
    dimensions: "3\" x 3\" x 4\"",
    occasion: "Festival, Wellness",
    image: "/img/hero.png",
    category: "Sustainable"
  },
  {
    id: "6",
    name: "Madhubani Painted Jute Bags",
    description: "Beautiful jute bags featuring traditional Madhubani art. Handpainted by skilled women artisans from rural Bihar.",
    price: "₹400 - ₹1,200",
    dimensions: "12\" x 15\" x 4\"",
    occasion: "Corporate, Festival",
    image: "/img/hero.png",
    category: "Handcrafted"
  }
];

export const GiftShowcase = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {sampleGifts.map((gift) => (
          <div key={gift.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={gift.image}
                alt={gift.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-saavi-gold text-white px-2 py-1 rounded text-sm">
                {gift.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 font-playfair">
                {gift.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {gift.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Price Range:</span>
                  <span className="text-lg font-bold text-saavi-gold dark:text-saavi-gold">
                    {gift.price}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Dimensions:</span>
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    {gift.dimensions}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Perfect For:</span>
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    {gift.occasion}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-saavi-gold hover:bg-saavi-gold-dark text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                  Add to Curation
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          * Prices are indicative and subject to customization, packaging, and final negotiations.
        </p>
        <button className="bg-saavi-gold hover:bg-saavi-gold-dark text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
          View All Gifts
        </button>
      </div>
    </Container>
  );
};