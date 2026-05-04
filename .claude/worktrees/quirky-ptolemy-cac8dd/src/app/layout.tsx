import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fletcher Herbals",
  description:
    "Utilizing the power of homegrown herbs for pure, sustainable, and empowering natural hair care. From a backyard garden in Fletcher, NSW.",
  openGraph: {
    title: "Fletcher Herbals",
    description:
      "Utilizing the power of homegrown herbs for pure, sustainable, and empowering natural hair care. From a backyard garden in Fletcher, NSW.",
    images: [
      {
        url: "/artifacts/golden_oil_botanical_hero.webp",
        width: 1200,
        height: 630,
        alt: "Fletcher Herbals Golden Oil",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fletcher Herbals",
    description:
      "Handmade, 100% natural herbal hair oil from Fletcher, NSW, Australia.",
    image: "https://fletcherherbals.com/artifacts/fletcher_logo.webp",
    url: "https://fletcherherbals.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fletcher",
      addressRegion: "NSW",
      postalCode: "2287",
      addressCountry: "AU",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased max-w-[100vw] overflow-x-hidden bg-[var(--color-background)] text-[var(--color-foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
