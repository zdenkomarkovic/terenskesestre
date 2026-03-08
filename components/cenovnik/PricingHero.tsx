"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PHONE_1 } from "@/lib/constants";

export default function PricingHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a3d6b] to-[#0a5c9b] text-white pt-28 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          {/* Text content */}
          <div className="pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-teal-400/20 border border-teal-400/40 text-teal-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
                Transparentne cene
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-4">Cenovnik usluga</h1>
              <p className="text-blue-200 text-lg max-w-lg mb-8">
                Sve cene su jasne i unapred poznate. Bez skrivenih troškova.
              </p>
            </motion.div>

            {/* FREE banner */}
            <motion.div
              className="inline-flex items-center gap-3 bg-teal-400/20 border border-teal-400/50 rounded-2xl px-6 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-3xl">🎁</span>
              <div className="text-left">
                <p className="font-black text-teal-300 text-lg leading-tight">
                  BESPLATNO uz svaku posetu
                </p>
                <p className="text-blue-200 text-sm">
                  Merenje vitalnih parametara (krvni pritisak, puls, saturacija, temperatura)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={`tel:${PHONE_1}`}
                className="inline-flex items-center gap-2 bg-white text-[#0a5c9b] hover:bg-teal-50 font-bold px-6 py-3 rounded-full transition-colors shadow-lg"
              >
                📞 Zakažite posetu — {PHONE_1}
              </a>
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            className="relative h-72 lg:h-96 rounded-t-3xl overflow-hidden self-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/hero.jpg"
              alt="Infuzijske usluge kod kuće"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d6b]/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a5c9b]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
