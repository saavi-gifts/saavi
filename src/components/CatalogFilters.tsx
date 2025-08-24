"use client";
import { useState } from "react";
import { productCategories } from "@/components/catalog-data";

interface FilterOptions {
  category: string;
  priceRange: string;
  occasion: string;
  sortBy: string;
}

const categories = productCategories;

const priceRanges = [
  "All Prices",
  "Under ₹1,000",
  "₹1,000 - ₹2,500",
  "₹2,500 - ₹5,000",
  "₹5,000 - ₹10,000",
  "Above ₹10,000"
];

const occasions = [
  "All Occasions",
  "Wedding",
  "Festival",
  "Birthday",
  "Anniversary",
  "Corporate",
  "Housewarming"
];

const sortOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Newest First",
  "Most Popular"
];

export const CatalogFilters = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: "All Categories",
    priceRange: "All Prices",
    occasion: "All Occasions",
    sortBy: "Featured"
  });

  const handleFilterChange = (filterType: keyof FilterOptions, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price Range
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
          >
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Occasion Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Occasion
          </label>
          <select
            value={filters.occasion}
            onChange={(e) => handleFilterChange('occasion', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
          >
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => {
          if (value.includes('All') || value === 'Featured') return null;
          return (
            <span
              key={key}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-saavi-gold text-white"
            >
              {value}
              <button
                onClick={() => handleFilterChange(key as keyof FilterOptions, 
                  key === 'category' ? 'All Categories' :
                  key === 'priceRange' ? 'All Prices' :
                  key === 'occasion' ? 'All Occasions' : 'Featured'
                )}
                className="ml-2 text-white hover:text-gray-200"
              >
                ×
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
};