"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

interface CurationForm {
  occasion: string;
  budget: string;
  recipient: string;
  preferences: string;
  customMessage: string;
  email: string;
  contactNumber: string;
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
    customMessage: "",
    email: "",
    contactNumber: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Use FormSubmit.co for email submission
      const submitData = new FormData();
      
      // Add form fields
      submitData.append('occasion', formData.occasion);
      submitData.append('budget', formData.budget);
      submitData.append('recipient', formData.recipient);
      submitData.append('preferences', formData.preferences);
      submitData.append('custom_message', formData.customMessage);
      submitData.append('email', formData.email);
      submitData.append('contact_number', formData.contactNumber);
      
      // FormSubmit configuration
      submitData.append('_subject', 'Gift Curation Request - Saavi');
      submitData.append('_replyto', formData.email);
      submitData.append('_next', window.location.origin + '/thank-you'); // Optional: redirect after submission
      
      const response = await fetch('https://formsubmit.co/saavi.gifts@gmail.com', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        console.log('Gift curation request sent successfully via FormSubmit');
        // Show success message
        setIsSubmitted(true);
      } else {
        throw new Error(`FormSubmit failed with status: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Fallback to mailto if FormSubmit fails
      const subject = "Gift Curation Request - Saavi";
      const body = `Hi Saavi Team,

I'm interested in getting help with gift curation. Here are my details:

Occasion: ${formData.occasion}
Budget Range: ${formData.budget}
Recipient: ${formData.recipient}
Preferences: ${formData.preferences}
Special Requirements: ${formData.customMessage}
Email: ${formData.email}
Contact Number: ${formData.contactNumber || 'Not provided'}

Please get back to me with personalized recommendations.

Best regards,
${formData.email}`;

      const mailtoLink = `mailto:saavi.gifts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
      
      // Show success message even with fallback
      setIsSubmitted(true);
    }
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
              Thank you for contacting us! 🎉
            </h3>
            <p className="text-green-700 dark:text-green-300 mb-4">
              We&apos;re excited to help you find the perfect handcrafted gifts! Our expert curators 
              are already reviewing your preferences and will create a personalized selection just for you.
            </p>
            <p className="text-green-700 dark:text-green-300 mb-4">
              We&apos;ve opened your email client with all the details. Please send the email to complete 
              your request, and we&apos;ll get back to you within 24 hours with amazing gift recommendations.
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mb-6">
              Get ready to discover unique treasures that will create lasting memories! ✨
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-saavi-gold hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
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

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saavi-gold dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
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
              className="bg-saavi-gold hover:bg-yellow-600 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Let us help you
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