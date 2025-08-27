import { Container } from "@/components/Container";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg p-8">
          <svg className="mx-auto h-16 w-16 text-green-600 dark:text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-4 font-playfair">
            Thank you for contacting us! 🎉
          </h1>
          <p className="text-green-700 dark:text-green-300 mb-6 text-lg">
            Your message has been sent successfully. We&apos;re excited to help you discover 
            the perfect handcrafted gifts from Saavi!
          </p>
          <p className="text-green-700 dark:text-green-300 mb-6">
            Our team will review your inquiry and get back to you within 24 hours 
            with personalized recommendations and next steps.
          </p>
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block bg-saavi-gold hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Return to Home
            </Link>
            <Link 
              href="/catalog"
              className="inline-block ml-4 bg-saavi-brown hover:bg-brown-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Browse Our Catalog
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
