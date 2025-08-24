import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import { AuthProvider } from "@/components/AuthProvider";


const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Saavi - Sustainable Gifts, Empowered Communities",
  description: "Handcrafted eco-friendly products made by skilled women artisans and rural communities. Supporting sustainable livelihoods while preserving traditional Indian craftsmanship.",
  icons: {
    icon: '/img/logo1.svg',
    shortcut: '/img/logo1.svg',
    apple: '/img/logo1.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.variable}`}>
        <AuthProvider>
          <ThemeProvider attribute="class">
            <ContactModalProvider>
              <Navbar />
              <div>{children}</div>
              <Footer />
            </ContactModalProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
