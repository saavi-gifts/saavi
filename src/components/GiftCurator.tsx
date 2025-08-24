"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

interface CurationForm {
  occasion: string;
  budget: string;
  recipient: string;
  preferences: string;
  customMessage: string;
}

const occasions = [
  "Wedding",
  "Festival (Diwali, Holi, etc.)",
  "Birthday",
  "Anniversary",
  "Housewarming",
  "Baby Shower",
  "Corporate Gift",
  "Religious Ceremony",
  "Graduation",
  "Other"
];

const budgetRanges = [
  "₹1,000 - ₹2,500",
  "₹2,500 - ₹5,000",
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000+"
];

const recipientTypes = [
  "Family Member",
  "Friend",
  "Colleague",
  "Boss/Superior",
  "Client",
  "Neighbor",
  "Teacher",
  "Other"
];

export const GiftCurator = () => {
  const [formData, setFormData] = useState<CurationForm>({
    occasion: "",
    budget: "",
    recipient: "",
    preferences: "",
    customMessage: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Curation request:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Container>
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg p-8">
            <svg className="mx-auto h-16 w-16 text-green-600 dark:text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2 font-playfair">
              Curation Request Submitted!
            </h3>
            <p className="text-green-700 dark:text-green-300 mb-4">
              Thank you for your request. Our gift curators will review your preferences and 
              get back to you within 24 hours with personalized recommendations.
            </p>
            <p className="text-sm text-green-600 dark:text-green-400">
              You will receive an email with curated gift options, pricing details, and next steps.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-saavi-gold hover:bg-saavi-gold-dark text-white font-medium py-2 px-6 rounded"
            >
              Create Another Curation
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Occasion */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Occasion *
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select an occasion</option>
                {occasions.map((occasion) => (
                  <option key={occasion} value={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Recipient */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Recipient Relationship *
              </label>
              <select
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select relationship</option>
                {recipientTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferences */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Preferences & Interests
              </label>
              <input
                type="text"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                placeholder="e.g., Traditional, Modern, Religious, Artisan crafts"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Custom Message */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Special Requirements or Message
            </label>
            <textarea
              name="customMessage"
              value={formData.customMessage}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about any specific requirements, cultural preferences, or special message you'd like to include..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-saavi-gold hover:bg-saavi-gold-dark text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Create My Curated Gift Collection
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              * Our expert curators will review your preferences and provide personalized recommendations.
              Final pricing includes curation service, premium packaging, and delivery.
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};