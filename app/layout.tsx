import type { Metadata } from "next";
import "./globals.css";
import { Merienda, Roboto } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const merienda = Merienda({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-merienda'
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "Barbershop Template",
  description: "A template website for barbershops",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merienda.variable} ${roboto.variable}`}>
      <body>
        <Navbar />
          <main className="flex min-h-screen flex-col bg-white">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
