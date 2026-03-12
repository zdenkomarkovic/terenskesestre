import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, PHONE_1, PHONE_2, EMAIL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Medicinska nega u vašem domu — infuzije, injekcije, nega starih, previjanja, kateteri i još mnogo toga. Dostupni 24/7 širom Srbije. Pozovite 0692327150.",
  keywords: [
    "terenska sestra",
    "medicinska sestra kod kuće",
    "medicinska nega kod kuće",
    "kućna nega",
    "kućna zdravstvena nega",
    "infuzija kod kuće",
    "injekcija kod kuće",
    "nega starih kod kuće",
    "nega nepokretnih pacijenata",
    "previjanje rana kod kuće",
    "kateter kod kuće",
    "vađenje krvi kod kuće",
    "merenje pritiska kod kuće",
    "merenje šećera kod kuće",
    "dekubitus nega",
    "gerontološka nega",
    "doživotno izdržavanje",
    "zdravstvena nega na terenu",
    "Beograd",
    "Novi Sad",
    "Zemun",
    "Batajnica",
    "Pančevo",
    "Sremska Mitrovica",
    "Ruma",
    "Inđija",
    "Stara Pazova",
    "Nova Pazova",
    "Surčin",
    "Aranđelovac",
    "Srbija",
    "terenska medicinska sestra Srbija",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "health",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Medicinska nega u vašem domu — infuzije, injekcije, nega starih, previjanja, kateteri i još mnogo toga. Dostupni 24/7 širom Srbije.",
    images: [
      {
        url: `${SITE_URL}/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Terenske Sestre Velika Porodica — Medicinska nega kod kuće",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Medicinska nega u vašem domu — infuzije, injekcije, nega starih, previjanja, kateteri i još mnogo toga. Dostupni 24/7 širom Srbije.",
    images: [`${SITE_URL}/hero.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/hero.jpg`,
  image: `${SITE_URL}/hero.jpg`,
  description:
    "Medicinska nega u vašem domu — infuzije, injekcije, nega starih, previjanja, kateteri i još mnogo toga. Dostupni 24/7.",
  telephone: [PHONE_1, PHONE_2],
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    addressCountry: "RS",
    addressRegion: "Srbija",
  },
  areaServed: [
    "Novi Sad",
    "Sremska Mitrovica",
    "Ruma",
    "Inđija",
    "Stara Pazova",
    "Nova Pazova",
    "Batajnica",
    "Zemun",
    "Beograd",
    "Pančevo",
    "Surčin",
    "Aranđelovac",
  ],
  openingHours: "Mo-Su 00:00-24:00",
  availableLanguage: "Serbian",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Medicinske usluge kućne nege",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sve vrste infuzija" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Davanje injekcija" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nega i briga o starima" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Previjanja i obrada rana" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kateteri, sonde, stome" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vađenje krvi kod kuće" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Merenje vitalnih parametara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nega dekubitusa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doživotno izdržavanje" } },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
