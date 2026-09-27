import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/lib/restaurant";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://www.shaluc-dakar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SHALUC — Taste of India | Restaurant indien à Dakar",
    template: "%s | SHALUC — Taste of India",
  },
  description:
    "SHALUC, restaurant indien moderne à Dakar. Cuisine indienne authentique au four tandoor, butter chicken, biryani. Note 4,9/5 sur 406 avis.",
  keywords: [
    "restaurant indien Dakar",
    "restaurant indien Sénégal",
    "Indian restaurant Dakar",
    "Indian food Dakar",
    "SHALUC Dakar",
    "SHALUC Taste of India",
  ],
  openGraph: {
    title: "SHALUC — Taste of India",
    description:
      "Restaurant indien moderne à Dakar. Épices, feu du tandoor, et l'art du partage.",
    url: siteUrl,
    siteName: "SHALUC — Taste of India",
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHALUC — Taste of India",
    description: "Restaurant indien moderne à Dakar.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "SHALUC — Taste of India",
  servesCuisine: "Indian",
  telephone: restaurant.phone,
  priceRange: `${restaurant.priceRange.min}-${restaurant.priceRange.max} ${restaurant.priceRange.currency}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: restaurant.address.city,
    addressCountry: "SN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: restaurant.rating,
    reviewCount: restaurant.reviewCount,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
