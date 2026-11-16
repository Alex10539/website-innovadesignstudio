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
  title: "Custom Home Designer in Moncton, NB | Innova Design Studio",
  description:
    "Custom homes, multi-unit buildings, and renovations designed in Moncton, Dieppe, Riverview, and Shediac. Permit-ready design from Innova Design Studio. Book a free consult.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  image: `${SITE_URL}/images/portfolio/custom-homes-70.jpg`,
  areaServed: [
    { "@type": "City", name: "Moncton" },
    { "@type": "City", name: "Dieppe" },
    { "@type": "City", name: "Riverview" },
    { "@type": "City", name: "Shediac" },
    { "@type": "AdministrativeArea", name: "New Brunswick" },
  ],
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
