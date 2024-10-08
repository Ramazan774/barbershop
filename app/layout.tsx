import type { Metadata } from "next";
import { Merienda, Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

const merienda = Merienda({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-merienda',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Magico Barbershop",
    template: "%s | Magico Barbershop"
  },
  description: "Experience the magic of grooming at Magico Barbershop. Professional haircuts, shaves, and styling for the modern gentleman in [Your Location].",
  keywords: ["Magico Barbershop", "haircut", "shave", "men's grooming", "barber services", "[Your Location]"],
  openGraph: {
    title: "Magico Barbershop",
    description: "Experience the magic of grooming at Magico Barbershop in [Your Location]",
    url: "https://magicobarbershop.com",
    siteName: "Magico Barbershop",
    images: [
      {
        url: "https://magicobarbershop.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Magico Barbershop - Where Style Meets Magic"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merienda.variable} ${roboto.variable}`}>
      <body className="flex flex-col min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-black focus:p-4">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}