const fs = require('fs');
const path = require('path');

// Function to categorize products based on filename patterns and content analysis
function categorizeProduct(filename) {
  const lowerFilename = filename.toLowerCase();
  
  // Traditional Crafts & Lighting
  if (lowerFilename.includes('diya') || lowerFilename.includes('t-light') || 
      lowerFilename.includes('candle') || lowerFilename.includes('light')) {
    return 'Traditional Crafts';
  }
  
  // Home Decor & Kitchenware
  if (lowerFilename.includes('platter') || lowerFilename.includes('tray') || 
      lowerFilename.includes('bowl') || lowerFilename.includes('plate') ||
      lowerFilename.includes('serving') || lowerFilename.includes('kitchen')) {
    return 'Home Decor';
  }
  
  // Beauty & Wellness
  if (lowerFilename.includes('beauty') || lowerFilename.includes('cosmetic') ||
      lowerFilename.includes('skincare') || lowerFilename.includes('wellness')) {
    return 'Beauty & Wellness';
  }
  
  // Gift Sets & Hampers
  if (lowerFilename.includes('hamper') || lowerFilename.includes('gift') ||
      lowerFilename.includes('set') || lowerFilename.includes('collection')) {
    return 'Gift Sets';
  }
  
  // Default categorization based on PDF source
  if (lowerFilename.includes('golden_elegant') || lowerFilename.includes('jewelry')) {
    return 'Traditional Crafts';
  } else if (lowerFilename.includes('brown_and_beige') || lowerFilename.includes('beauty')) {
    return 'Home Decor';
  }
  
  return 'Traditional Crafts'; // Default category
}

function generateProductName(filename, index) {
  const baseName = path.basename(filename, path.extname(filename));
  
  // Extract page and image number for uniqueness
  const pageMatch = baseName.match(/page(\d+)/);
  const imgMatch = baseName.match(/img(\d+)/);
  
  const pageNum = pageMatch ? pageMatch[1] : '1';
  const imgNum = imgMatch ? imgMatch[1] : index.toString();
  
  if (baseName.includes('diya')) {
    return `Handcrafted Wooden Diyas - Design ${imgNum}`;
  } else if (baseName.includes('platter') || baseName.includes('tray')) {
    return `Traditional Wooden Platter Set ${imgNum}`;
  } else if (baseName.includes('Golden_Elegant')) {
    return `Artisan Craft Collection ${pageNum}-${imgNum}`;
  } else if (baseName.includes('Brown_and_Beige')) {
    return `Sustainable Gift Item ${pageNum}-${imgNum}`;
  }
  
  return `Handcrafted Product ${pageNum}-${imgNum}`;
}

function generateProductDescription(filename, category) {
  if (category === 'Traditional Crafts') {
    return "Handcrafted traditional item made by skilled artisans using sustainable materials and time-honored techniques";
  } else if (category === 'Home Decor') {
    return "Beautiful home decor piece crafted with attention to detail, perfect for modern and traditional homes";
  } else if (category === 'Beauty & Wellness') {
    return "Natural beauty and wellness product made with traditional Indian ingredients and sustainable practices";
  } else if (category === 'Gift Sets') {
    return "Thoughtfully curated gift set featuring multiple artisan-made items, perfect for special occasions";
  }
  return "Artisan-crafted product supporting women entrepreneurs and traditional Indian craftsmanship";
}

function getRandomArtisan() {
  const artisans = [
    { name: "Meera Sharma", location: "Rajasthan" },
    { name: "Sunita Devi", location: "Uttar Pradesh" },
    { name: "Lakshmi Bai", location: "Karnataka" },
    { name: "Priya Nair", location: "Kerala" },
    { name: "Kamala Kumari", location: "Tamil Nadu" },
    { name: "Radha Devi", location: "Maharashtra" },
    { name: "Geeta Sharma", location: "Himachal Pradesh" },
    { name: "Anjali Gupta", location: "Gujarat" },
    { name: "Savita Singh", location: "Madhya Pradesh" },
    { name: "Ritu Agarwal", location: "Haryana" }
  ];
  return artisans[Math.floor(Math.random() * artisans.length)];
}

function getOccasions(category) {
  const occasionMap = {
    'Traditional Crafts': ["Festival", "Diwali", "Religious Ceremony", "Wedding"],
    'Home Decor': ["Housewarming", "Wedding", "Anniversary", "Birthday"],
    'Beauty & Wellness': ["Self-care", "Birthday", "Anniversary"],
    'Gift Sets': ["Corporate", "Wedding", "Festival", "Birthday"]
  };
  return occasionMap[category] || ["Festival", "Wedding"];
}

function generatePrice(category) {
  const priceRanges = {
    'Traditional Crafts': { min: 800, max: 2500 },
    'Home Decor': { min: 1200, max: 3500 },
    'Beauty & Wellness': { min: 600, max: 2000 },
    'Gift Sets': { min: 2000, max: 5000 }
  };
  
  const range = priceRanges[category] || { min: 800, max: 2500 };
  const price = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  
  // Round to nearest 50
  return Math.round(price / 50) * 50;
}

// Main function to process all images
function processProductImages() {
  const imagesDir = './public/img/catalog/product_images_with_labels';
  const files = fs.readdirSync(imagesDir);
  
  // Filter valid image files and limit to avoid overwhelming catalog
  const imageFiles = files
    .filter(file => /\.(jpeg|jpg|png)$/i.test(file))
    .filter(file => !file.includes('page1_img1')) // Skip catalog covers
    .slice(0, 24); // Limit to 24 products for a good catalog size
  
  const products = [];
  const categoryGroups = {};
  
  imageFiles.forEach((filename, index) => {
    const category = categorizeProduct(filename);
    const artisan = getRandomArtisan();
    const price = generatePrice(category);
    const originalPrice = Math.random() > 0.7 ? Math.floor(price * 1.2) : undefined; // 30% chance of discount
    
    const product = {
      id: `product-${index + 1}`,
      name: generateProductName(filename, index + 1),
      category: category,
      price: price,
      originalPrice: originalPrice,
      image: `/img/catalog/product_images_with_labels/${filename}`,
      description: generateProductDescription(filename, category),
      artisan: artisan.name,
      location: artisan.location,
      isNew: Math.random() > 0.8, // 20% chance of being new
      isFeatured: Math.random() > 0.75, // 25% chance of being featured
      occasions: getOccasions(category).slice(0, Math.floor(Math.random() * 3) + 2) // 2-4 occasions
    };
    
    products.push(product);
    
    // Group by category for organized display
    if (!categoryGroups[category]) {
      categoryGroups[category] = [];
    }
    categoryGroups[category].push(product);
  });
  
  // Sort products: Featured first, then by category, then by price
  const sortedProducts = products.sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.price - b.price;
  });
  
  return { products: sortedProducts, categoryGroups };
}

// Generate the catalog data
const { products, categoryGroups } = processProductImages();

// Create the catalog data file
const catalogData = `// Auto-generated product catalog from extracted images
export const catalogProducts = ${JSON.stringify(products, null, 2)};

export const productCategories = [
  "All Categories",
  ${Object.keys(categoryGroups).map(cat => `"${cat}"`).join(',\n  ')}
];

export const categoryGroups = ${JSON.stringify(categoryGroups, null, 2)};

export const getFeaturedProducts = () => catalogProducts.filter(p => p.isFeatured);
export const getNewProducts = () => catalogProducts.filter(p => p.isNew);
export const getProductsByCategory = (category) => 
  category === "All Categories" ? catalogProducts : catalogProducts.filter(p => p.category === category);
`;

// Write to file
fs.writeFileSync('./src/components/catalog-data.js', catalogData);

console.log('✅ New catalog data generated successfully!');
console.log(`📊 Total products: ${products.length}`);
console.log(`🏷️ Categories: ${Object.keys(categoryGroups).join(', ')}`);
console.log(`⭐ Featured products: ${products.filter(p => p.isFeatured).length}`);
console.log(`🆕 New products: ${products.filter(p => p.isNew).length}`);

// Show products by category
Object.entries(categoryGroups).forEach(([category, items]) => {
  console.log(`${category}: ${items.length} products`);
});