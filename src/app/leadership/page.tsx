import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

export default function Leadership() {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Leadership"
        title="Meet Our Founder"
      >
        A story of transformation, courage, and purpose-driven leadership
      </SectionTitle>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-8 lg:py-16">
          {/* Hero Image Section */}
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/img/leader.jpeg"
                  alt="Founder - Learner, Teacher, Mother, Trailblazer"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Quote Overlay */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-saavi-gold text-white p-4 lg:p-6 rounded-lg shadow-lg max-w-xs">
                <blockquote className="text-sm font-medium italic">
                  &quot;This isn&apos;t what I truly want.&quot;
                </blockquote>
                <cite className="text-xs mt-2 block opacity-90">The moment that changed everything</cite>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:w-2/3 space-y-8">
            {/* Title Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white font-playfair">
                Learner. Teacher. Mother. Trailblazer.
              </h1>
              <div className="mt-4 w-24 h-1 bg-saavi-gold mx-auto lg:mx-0"></div>
            </div>

            {/* Journey Sections */}
            <div className="space-y-10">
              {/* The Beginning */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-saavi-gold/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-saavi-gold rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">The Awakening</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      She began her journey with a Master&apos;s in Computer Management from MIT College, now known as MIT-WPU. 
                      But soon after completing her degree, a quiet realization emerged — <em>This isn&apos;t what I truly want.</em> 
                      And thus began a deeply personal journey of self-discovery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Discovery */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-saavi-gold/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-saavi-gold rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Finding Her Passion</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Her first professional chapter took her to L&T John Deere (before it became John Deere), 
                      where she worked in Human Resources. It was here that she discovered her true passion — people. 
                      She found genuine joy in engaging with employees, listening to their needs, and creating better 
                      workplace experiences. This desire to positively impact others would become her enduring compass.
                    </p>
                  </div>
                </div>
              </div>

              {/* Motherhood Chapter */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-saavi-gold/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-saavi-gold rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">The Heart&apos;s Calling</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      In 2002, she made the conscious decision to pause her career and devote herself fully to raising her 
                      two children. For the next 12 years, she poured her heart into motherhood. Yet, the calling to 
                      contribute to human growth and development never faded.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Education & Teaching Section with Visual Elements */}
      <Container>
        <div className="py-8 lg:py-16 px-4 sm:px-8 lg:px-12 bg-gray-50 dark:bg-gray-800 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-playfair">
                Return to Purpose
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When the time was right, she chose to return — not to the corporate world, but to education. 
                  She started anew, focusing on early childhood development, believing that nurturing young minds 
                  could lead to better generations.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Her teaching journey took her through esteemed institutions like Vibgyor and Serra International 
                  (now Vivero). While the work was fulfilling, she often felt constrained — unable to implement 
                  the individualized learning strategies she believed each child deserved.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  She knew every child was unique, and their growth couldn&apos;t be standardized.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
                {/* Education and Learning Visual */}
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-saavi-gold/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-12 h-12 text-saavi-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education & Growth</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                        </svg>
                      </div>
                      <span>Early Childhood</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span>Individual Learning</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span>Vibgyor</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                      </div>
                      <span>Serra International</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic max-w-xs mx-auto">
                    &quot;Every child was unique, and their growth couldn&apos;t be standardized.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Entrepreneurship Journey */}
      <Container>
        <div className="py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative bg-white dark:bg-gray-700 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg w-full max-w-md">
                {/* Entrepreneurship and Artisan Empowerment Visual */}
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-saavi-gold/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-12 h-12 text-saavi-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Entrepreneurship & Artisan Empowerment</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <span>Rural Women</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <span>Sustainability</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      </div>
                      <span>Handcrafted Art</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <span>Economic Impact</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic max-w-xs mx-auto">
                    &quot;Empower rural artisans by helping them monetize their work&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-playfair">
                Creating Her Own Path
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With courage and clarity, she stepped away from conventional schooling and started her own academy — 
                  a space where she could shape learning her way.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A gifted artist herself, she also long nurtured the dream of becoming an entrepreneur — one who would 
                  not only share her art with the world, but also empower rural artisans, especially women, by helping 
                  them monetize their work.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Her focus was on creating sustainable, earth-friendly artefacts that could be customized to meet each 
                  customer&apos;s sensibility and values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Saavi Brand Story - Final Section */}
      <Container>
        <div className="py-8 lg:py-16 px-4 lg:px-0 bg-gradient-to-br from-saavi-gold/5 to-saavi-brown/5 rounded-3xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Image
                src="/img/logo.svg"
                alt="Saavi Logo"
                width={120}
                height={40}
                className="h-16 w-auto mx-auto mb-6"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-playfair mb-6">
                Saavi — Meaning Pure
              </h2>
              <div className="w-32 h-1 bg-saavi-gold mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-6 text-base lg:text-lg text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                This dream finally came to life with the launch of her brand: <strong className="text-saavi-gold">Saavi</strong> — meaning Pure.
              </p>
              <p className="leading-relaxed text-lg lg:text-xl font-medium text-gray-900 dark:text-white">
                A name that reflects not just her products, but her journey, her purpose, and her unwavering spirit.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <a
                href="/catalog"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-saavi-gold hover:bg-saavi-gold-dark rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore Our Story Through Our Products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Values Section */}
      <Container>
        <div className="py-16">
          <SectionTitle
            preTitle="Our Values"
            title="What Drives Us Forward"
          >
            The principles that guide every decision and every product we create
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-saavi-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-saavi-gold/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-saavi-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Empowerment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Supporting rural artisans and women entrepreneurs to build sustainable livelihoods
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-saavi-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-saavi-gold/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-saavi-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating earth-friendly products that respect our planet and future generations
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-saavi-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-saavi-gold/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-saavi-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tradition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                                  Preserving and celebrating India&apos;s rich cultural heritage and traditional craftsmanship
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}