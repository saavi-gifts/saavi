const fs = require('fs');
const path = require('path');

// Define product categories and their corresponding images
const productData = [
  // Jewelry & Traditional Crafts (from Golden Elegant catalog)
  {
    id: "handcrafted-diyas-1",
    name: "Handcrafted Wooden Diyas - Heart Design",
    category: "Traditional Crafts",
    price: 1200,
    originalPrice: 1500,
    image: "/img/catalog/Golden_Elegant_Minimalist_Jewelry_Product_Catalog_Presentation/page.3.png",
    description: "Handcrafted wooden diyas with intricate heart patterns, perfect for festivals and celebrations",
    artisan: "Meera Sharma",
    location: "Rajasthan",
    isNew: true,
    isFeatured: true,
    occasions: ["Festival", "Diwali", "Religious Ceremony"]
  },
  {
    id: "handcrafted-diyas-2",
    name: "Handcrafted Wooden Diyas - Traditional Set",
    category: "Traditional Crafts",
    price: 2400,
    image: "/img/catalog/Brown_and_Beige_Minimalist_Beauty_Product_with_Logo_Trifold_Brochure__2__pdf/page.3.png",
    description: "Set of 8 handcrafted wooden diyas in various traditional designs, 6-inch size",
    artisan: "Sunita Devi",
    location: "Uttar Pradesh",
    isFeatured: true,
    occasions: ["Festival", "Diwali", "Wedding", "Religious Ceremony"]
  },
  {
    id: "sustainable-hampers",
    name: "Sustainable Gift Hampers",
    category: "Gift Sets",
    price: 3500,
    originalPrice: 4200,
    image: "/img/catalog/Brown_and_Beige_Minimalist_Beauty_Product_with_Logo_Trifold_Brochure__2__pdf/page.1.png",
    description: "Curated sustainable gift hampers with handcarved diyas, wooden platters, and coco shell crafts",
    artisan: "Collective of Women Artisans",
    location: "Multiple States",
    isNew: true,
    occasions: ["Corporate", "Housewarming", "Festival", "Wedding"]
  },
  {
    id: "wooden-platters",
    name: "Handcrafted Wooden Platters",
    category: "Home Decor",
    price: 1800,
    image: "/img/catalog/Golden_Elegant_Minimalist_Jewelry_Product_Catalog_Presentation/page.5.png",
    description: "Beautiful wooden platters with traditional patterns, perfect for serving and decoration",
    artisan: "Kamala Bai",
    location: "Karnataka",
    occasions: ["Housewarming", "Wedding", "Corporate"]
  },
  {
    id: "coconut-products",
    name: "Coconut Shell Craft Collection",
    category: "Home Decor",
    price: 900,
    originalPrice: 1200,
    image: "/img/catalog/Golden_Elegant_Minimalist_Jewelry_Product_Catalog_Presentation/page.5.png",
    description: "Eco-friendly coconut shell products including bowls and decorative items",
    artisan: "Priya Nair",
    location: "Kerala",
    occasions: ["Birthday", "Housewarming", "Corporate"]
  },
  {
    id: "t-lights-collection",
    name: "Traditional T-Lights Collection",
    category: "Traditional Crafts",
    price: 1600,
    image: "/img/catalog/Golden_Elegant_Minimalist_Jewelry_Product_Catalog_Presentation/page.5.png",
    description: "Handcrafted tea light holders in traditional designs with mango wood material",
    artisan: "Lakshmi Sharma",
    location: "Rajasthan",
    occasions: ["Festival", "Wedding", "Housewarming"]
  },
  {
    id: "home-decor-spoons",
    name: "Decorative Wooden Spoons",
    category: "Home Decor",
    price: 800,
    image: "/img/catalog/Golden_Elegant_Minimalist_Jewelry_Product_Catalog_Presentation/page.5.png",
    description: "Set of decorative wooden spoons with intricate carved patterns for home decoration",
    artisan: "Radha Devi",
    location: "Uttar Pradesh",
    occasions: ["Housewarming", "Wedding", "Birthday"]
  },
  {
    id: "soy-products",
    name: "Handcrafted Soy Products",
    category: "Beauty & Wellness",
    price: 1400,
    image: "/img/catalog/Golden_Elegant_Minimalist_Jewelry_Product_Catalog_Presentation/page.5.png",
    description: "Natural soy-based products including candles and wellness items",
    artisan: "Anjali Gupta",
    location: "Maharashtra",
    occasions: ["Self-care", "Birthday", "Housewarming"]
  },
  {
    id: "planters-collection",
    name: "Handcrafted Planters",
    category: "Home Decor",
    price: 1100,
    originalPrice: 1400,
    image: "/img/catalog/Golden_Elegant_Minimalist_Jewelry_Product_Catalog_Presentation/page.5.png",
    description: "Beautiful handcrafted planters for indoor and outdoor gardening",
    artisan: "Geeta Sharma",
    location: "Himachal Pradesh",
    isNew: true,
    occasions: ["Housewarming", "Birthday", "Corporate"]
  }
];

// Create organized product data file
const outputPath = './src/components/catalog-data.js';
const catalogData = `// Auto-generated product catalog data from PDF extraction
export const catalogProducts = ${JSON.stringify(productData, null, 2)};

export const productCategories = [
  "All Categories",
  "Traditional Crafts",
  "Home Decor", 
  "Gift Sets",
  "Beauty & Wellness"
];

export const getFeaturedProducts = () => catalogProducts.filter(p => p.isFeatured);
export const getNewProducts = () => catalogProducts.filter(p => p.isNew);
export const getProductsByCategory = (category) => 
  category === "All Categories" ? catalogProducts : catalogProducts.filter(p => p.category === category);
`;

fs.writeFileSync(outputPath, catalogData);
console.log('✅ Product catalog data created at:', outputPath);
console.log(`📊 Total products: ${productData.length}`);
console.log(`🏷️ Categories: ${[...new Set(productData.map(p => p.category))].join(', ')}`);