"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail, EmailData } from "@/lib/emailConfig";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: string;
  budget: string;
  message: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Send email using our email configuration
      const emailSent = await sendEmail(data);
      
      if (emailSent) {
        // Email was sent successfully via EmailJS or Web3Forms
        console.log('Email sent successfully!');
      } else {
        // Fallback to mailto was used
        console.log('Email sent via fallback method');
      }
      
      // Show success message
      setIsSuccess(true);
      
      // Auto-close after 5 seconds
      setTimeout(() => {
        handleClose();
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your inquiry. Please try again or contact us directly.');
    }
  };

  const handleClose = () => {
    reset();
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-saavi-brown to-saavi-brown-light px-8 py-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold font-playfair">Get in Touch</h2>
              <p className="text-saavi-gold/90 mt-1">
                We usually respond in a few hours
              </p>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:text-saavi-gold transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          {!isSuccess ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Full name is required" })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email"
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register("phone", { required: "Phone number is required" })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    {...register("company")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {/* Inquiry Type and Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    {...register("inquiryType", { required: "Please select inquiry type" })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.inquiryType ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select inquiry type</option>
                    <option value="Personal Gifts">Personal Gifts</option>
                    <option value="Corporate Gifts">Corporate Gifts</option>
                    <option value="Bulk Orders">Bulk Orders</option>
                    <option value="Customization">Customization</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.inquiryType && (
                    <p className="mt-1 text-sm text-red-500">{errors.inquiryType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="₹1,000 - ₹2,500">₹1,000 - ₹2,500</option>
                    <option value="₹2,500 - ₹5,000">₹2,500 - ₹5,000</option>
                    <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000+">₹25,000+</option>
                    <option value="Custom Quote">Custom Quote</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tell us more about your requirements
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Describe your gift requirements, occasion, quantity, or any specific customization needs..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-saavi-gold hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Thank you for your inquiry! 🎉
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your inquiry has been sent successfully to our team.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We&apos;ll review your requirements and get back to you within 24 hours with personalized recommendations.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>What happens next?</strong><br />
                  • Our team will review your inquiry<br />
                  • We&apos;ll prepare personalized gift recommendations<br />
                  • You&apos;ll receive a detailed response within 24 hours
                </p>
              </div>
              <button
                onClick={handleClose}
                className="bg-saavi-gold hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
