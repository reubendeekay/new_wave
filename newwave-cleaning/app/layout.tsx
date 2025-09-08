import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEWWAVE Cleaning Services - Professional Cleaning & Fumigation in Nairobi",
  description: "Professional cleaning and fumigation services in Nairobi. Residential, commercial, and deep cleaning solutions. Get a free quote today!",
  keywords: "cleaning services nairobi, fumigation services, residential cleaning, commercial cleaning, deep cleaning, professional cleaners kenya",
  authors: [{ name: "NEWWAVE Cleaning Services" }],
  creator: "NEWWAVE Cleaning Services",
  publisher: "NEWWAVE Cleaning Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://newwavecleaning.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEWWAVE Cleaning Services - Professional Cleaning & Fumigation in Nairobi",
    description: "Professional cleaning and fumigation services in Nairobi. Residential, commercial, and deep cleaning solutions.",
    url: "https://newwavecleaning.co.ke",
    siteName: "NEWWAVE Cleaning Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEWWAVE Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEWWAVE Cleaning Services",
    description: "Professional cleaning and fumigation services in Nairobi",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
