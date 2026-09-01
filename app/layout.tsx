import type { Metadata } from "next";
import { Rubik, Nunito_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_PHONE, SITE_EMAIL } from "./lib/site";

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["500", "700"],
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Innova Design Studio | Custom Home & Multi-Unit Design in Atlantic Canada",
  description:
    "Custom home, multi-unit, and renovation design across Atlantic Canada. Full-lifecycle design and permitting so your project moves from idea to built without surprises.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  image: `${SITE_URL}/images/portfolio/custom-homes-1.jpg`,
  areaServed: {
    "@type": "Place",
    name: "Atlantic Canada",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "NB",
    addressCountry: "CA",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <JsonLd data={localBusinessJsonLd} />
      </body>
    </html>
  );
}
