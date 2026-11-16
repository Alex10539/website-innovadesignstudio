import type { Metadata } from "next";
import { Rubik, Nunito_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import Tracking from "./components/Tracking";
import { SITE_URL, SITE_NAME, SITE_PHONE, SITE_EMAIL, GTM_ID } from "./lib/site";

// Tag Manager only loads in production builds, so running the site on a computer (next dev)
// never sends test visits or test events to the real Google Analytics.
const loadGtm = process.env.NODE_ENV === "production";

// Standard Google Tag Manager head snippet
const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

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
  // Every page names itself, on the non-www address, as the preferred version. www redirects here
  // (next.config.ts); this keeps Google from treating the two addresses as separate copies.
  alternates: { canonical: "./" },
  title: "Custom Home Designer in Moncton, Saint John & Fredericton, NB | Innova Design Studio",
  description:
    "Custom homes, multi-unit buildings, and renovations designed in Moncton, Dieppe, Riverview, Shediac, Saint John, and Fredericton, NB. Permit-ready design from Innova Design Studio. Book a free consult.",
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
    { "@type": "City", name: "Saint John" },
    { "@type": "City", name: "Fredericton" },
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
      <head>
        {loadGtm && <script dangerouslySetInnerHTML={{ __html: gtmHeadScript }} />}
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        {loadGtm && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Tracking />
        {children}
        <JsonLd data={localBusinessJsonLd} />
      </body>
    </html>
  );
}
