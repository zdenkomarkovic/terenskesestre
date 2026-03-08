import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import IVTherapy from "@/components/IVTherapy";
import NursingCare from "@/components/NursingCare";
import Coverage from "@/components/Coverage";
import Partnerships from "@/components/Partnerships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Terenske Sestre Velika Porodica — Medicinska nega kod kuće 24/7",
  description:
    "Medicinska nega u vašem domu. Infuzije, injekcije, nega starih, previjanja, kateteri i sve ostalo. Sestra najbliža vama dolazi odmah. Pozovite 0692327150.",
});

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <IVTherapy />
      <NursingCare />
      <Coverage />
      <Partnerships />
      <Contact />
      <Footer />
    </main>
  );
}
