import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <html lang="en">
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
