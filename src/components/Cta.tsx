"use client";
import React from "react";
import { Container } from "@/components/Container";
import { useContactModal } from "./ContactModalProvider";

export const Cta = () => {
  const { openContactModal } = useContactModal();
  
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-saavi-brown px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl font-playfair">
            Ready to create meaningful moments?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Let Saavi help you find the perfect gift for every occasion.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            onClick={openContactModal}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-saavi-brown bg-white hover:bg-gray-100 rounded-md px-7 lg:px-10 lg:py-5 cursor-pointer transition-colors duration-200"
          >
            Let&apos;s discuss
          </button>
        </div>
      </div>
    </Container>
  );
};
