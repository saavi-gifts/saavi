import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { GiftShowcase } from "@/components/GiftShowcase";
import { GiftCurator } from "@/components/GiftCurator";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Saavi Impact"
        title="Sustainable Products, Empowered Communities"
      >
        Our handcrafted products support rural artisans and remote manufacturers across India. 
        Every purchase contributes to sustainable livelihoods while preserving traditional 
        Indian craftsmanship for future generations.
      </SectionTitle>

      <Container>
        <div className="flex flex-col justify-center py-6">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Empowering <span className="text-saavi-gold">200+</span> rural artisans{" "}
            and remote manufacturers across India
          </div>
        </div>
      </Container>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
          {/* Our Products Section */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-sm font-semibold tracking-wider text-saavi-gold uppercase">
                Our Products
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-playfair lg:text-4xl">
                Handcrafted with Love, Made with Purpose
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Text Content */}
                <div>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Explore our collection of sustainable products made by skilled artisans. From traditional 
                    wooden diyas to contemporary eco-friendly items, each piece supports rural communities 
                    and celebrates Indian craftsmanship.
                  </p>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Our curated selection includes handwoven textiles, artisanal pottery, intricate jewelry, 
                    and beautiful home décor pieces—all created using time-honored techniques passed down 
                    through generations. Every purchase directly empowers rural artisans and remote manufacturers, 
                    helping preserve India&apos;s rich cultural heritage.
                  </p>
                </div>
                
                {/* Image */}
                <div className="flex items-center justify-center">
                  <img
                    src="/img/artisan-crafts.svg"
                    alt="Traditional handcrafted products and artisan tools"
                    className="w-full max-w-xs h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 mt-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="flex flex-col items-center justify-center text-center">
                  <a
                    href="/catalog"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium tracking-wide text-white bg-saavi-brown rounded-lg hover:bg-saavi-brown-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saavi-gold transition-all duration-200 transform hover:scale-105"
                  >
                    <span className="mr-2">Explore Products</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center max-w-md">
                    Browse our curated collection of handcrafted gifts made by skilled artisans across India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Solutions Section */}
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-sm font-semibold tracking-wider text-saavi-gold uppercase">
                Custom Solutions
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-playfair lg:text-4xl">
                Personalized Gifts for Individuals & Corporates
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Whether you need personal gifts or corporate solutions, we create customized packages 
                that reflect your values and support meaningful causes. Every order directly benefits 
                rural artisans, remote manufacturers, and their communities.
              </p>
            </div>
            
            <div className="flex-1">
              <GiftCurator />
            </div>
          </div>
        </div>
      </Container>

      <SectionTitle
        preTitle="Our Mission"
        title="Empowering Rural Communities, Preserving Traditions"
      >
        Watch how Saavi is making a difference in rural India by supporting artisans and 
        remote manufacturers while preserving traditional crafts. Every product purchase creates 
        sustainable livelihoods while keeping ancient Indian art forms alive.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Customer Stories"
        title="Moments That Matter"
      >
        Hear from families who have celebrated life&apos;s precious moments with Saavi&apos;s curated gifts. 
        These stories showcase how the right gift can create lasting memories and strengthen bonds.
      </SectionTitle>

      <Testimonials />

      {/* FAQ Section - Commented out for later implementation
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Get answers to common questions about our gift curation process, 
        pricing, delivery, and customization options to help you make the perfect choice.
      </SectionTitle>

      <Faq />
      */}
      <Cta />
    </Container>
  );
}
