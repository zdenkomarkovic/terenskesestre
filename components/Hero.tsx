"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PHONE_1, PHONE_2 } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-[#0a3d6b] flex flex-col min-h-screen md:justify-end overflow-hidden pt-[120px] md:pt-0">
      {/* Desktop background image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Terenska sestra na terenu"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d6b]/60 via-[#0a5c9b]/40 to-[#0f9488]/40" />
      </div>

      {/* Mobile image — raste da popuni ekran iznad teksta */}
      <div className="md:hidden relative w-full flex-1">
        <Image
          src="/hero.jpg"
          alt="Terenska sestra na terenu"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#0a3d6b]" />
      </div>

      {/* Content — na dnu ekrana na mobilnom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white bg-[#0a3d6b] md:bg-transparent pt-4 pb-6 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-teal-400/20 border border-teal-400/50 text-teal-200 text-xs md:text-sm font-semibold px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-2 md:mb-2 tracking-wide">
            ✦ Dostupni 24/7 — Cela Srbija
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Terenske Sestre
          <br />
          <span className="text-teal-300">Velika Porodica</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-teal-200 max-w-3xl mx-auto mb-2  font-semibold tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          MI SMO TU ZBOG VAS
        </motion.p>

        <motion.p
          className="text-sm md:text-lg text-blue-100 max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Medicinska sestra <strong className="text-white">najbliža vama</strong> dolazi na vašu
          adresu. Brzo, stručno, sa srcem.
        </motion.p>

        <motion.div
          className="flex flex-row items-center justify-center gap-3 md:gap-4 md:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a
            href={`tel:${PHONE_1}`}
            className="flex items-center justify-center gap-2 bg-[#14b8a6] hover:bg-[#0f9488] text-white px-4 py-2 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl transition-all hover:scale-105"
          >
            <span className="text-base md:text-2xl">📞</span>
            {PHONE_1}
          </a>
          <a
            href={`tel:${PHONE_2}`}
            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white px-4 py-2 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all hover:scale-105"
          >
            <span className="text-base md:text-2xl">📞</span>
            {PHONE_2}
          </a>
        </motion.div>

        <motion.p
          className="mt-2 md:mt-4 text-white text-xs md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Dolazak na kućnu adresu · Sve vrste medicinskih usluga · Cela Srbija
        </motion.p>
      </div>
    </section>
  );
}
