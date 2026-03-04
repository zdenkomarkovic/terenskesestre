"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PHONE_1, PHONE_2 } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Terenska sestra na terenu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d6b]/60 via-[#0a5c9b]/40 to-[#0f9488]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-teal-400/20 border border-teal-400/50 text-teal-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            ✦ Dostupni 24/7 — Cela Srbija
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Terenske Sestre
          <br />
          <span className="text-teal-300">Velika Porodica</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4 font-light"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          MI SMO TU ZBOG VAS
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Medicinska sestra koja je <strong className="text-white">najbliža vama </strong> dolazi na
          vašu adresu. Brzo, stručno, sa srcem. Strateški smo raspoređeni da brzo stignemo u pomoć
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a
            href={`tel:${PHONE_1}`}
            className="flex items-center gap-3 bg-[#14b8a6] hover:bg-[#0f9488] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105"
          >
            <span className="text-2xl">📞</span>
            {PHONE_1}
          </a>
          <a
            href={`tel:${PHONE_2}`}
            className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            <span className="text-2xl">📞</span>
            {PHONE_2}
          </a>
        </motion.div>

        <motion.p
          className="mt-6 text-white text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Dolazak na kućnu adresu · Sve vrste medicinskih usluga · Cela Srbija
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
