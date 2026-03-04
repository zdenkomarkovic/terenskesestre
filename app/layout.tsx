import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Terenske Sestre Velika Porodica",
    template: "%s | Terenske Sestre Velika Porodica",
  },
  description:
    "Medicinska nega u vašem domu — infuzije, injekcije, nega starih, previjanja, kateteri i još mnogo toga. Dostupni 24/7 širom Srbije. Pozovite 0692327150.",
  keywords: [
    "terenska sestra",
    "medicinska nega kod kuće",
    "kućna nega",
    "infuzija kod kuće",
    "nega starih",
    "Beograd",
    "Novi Sad",
    "Srbija",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Terenske Sestre Velika Porodica",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
