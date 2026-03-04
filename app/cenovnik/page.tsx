import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/cenovnik/PricingHero";
import PricingContent from "@/components/cenovnik/PricingContent";

export const metadata = buildMetadata({
  title: "Cenovnik usluga",
  description:
    "Cenovnik medicinskih usluga Terenske Sestre Velika Porodica — infuzije, kućna nega, dijagnostika, masaže, sanitski transport i još mnogo toga.",
});

export default function CenovnikPage() {
  return (
    <main>
      <Navbar />
      <PricingHero />
      <PricingContent />
      <Footer />
    </main>
  );
}
