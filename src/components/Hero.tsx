import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/woman-saree.svg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap pt-5 -mt-8">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white font-playfair">
              Sustainable Gifts, Empowered Communities
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Handcrafted eco-friendly products made by skilled women artisans and rural communities. 
              From wooden diyas to Madhubani art, each purchase supports sustainable livelihoods 
              and preserves traditional Indian craftsmanship.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#gifts"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-saavi-gold hover:bg-saavi-gold-dark rounded-md ">
                Explore Gifts
              </a>
              <a
                href="#custom"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Corporate Solutions</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="600"
              height="600"
              className={"object-contain"}
              alt="Woman artisan in traditional saree creating sustainable handcrafted products"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
}


