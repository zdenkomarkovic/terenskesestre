"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    icon: "⚡",
    title: "Brz dolazak",
    desc: "Sestra najbliža vama kreće odmah. Sistem blizine garantuje minimalno vreme čekanja.",
  },
  {
    icon: "🌙",
    title: "24 sata, 7 dana",
    desc: "Noću, vikendom, praznikom — uvek smo tu. Bolest ne bira vreme, ni mi ne biramo.",
  },
  {
    icon: "👩‍⚕️",
    title: "Stručne medicinske sestre",
    desc: "Naše sestre su iskusni zdravstveni profesionalci sa kompletnom medicinskom obukom.",
  },
  {
    icon: "🏠",
    title: "Dolazimo mi kod vas",
    desc: "Vi ostajete u komforu svog doma. Mi dolazimo na vašu kućnu adresu.",
  },
  {
    icon: "❤️",
    title: "Poštovanje i dostojanstvo",
    desc: "Svaki pacijent se tretira uz puno poštovanje, u dogovoru sa porodicom i lekarom.",
  },
  {
    icon: "🤝",
    title: "Saradnja sa klinikama",
    desc: "Sarađujemo sa klinikama, laboratorijama i organizujemo sanitski transport.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a3d6b] to-[#0a5c9b] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-teal-300 font-semibold tracking-widest text-sm uppercase">
            Zašto mi?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            MI SMO TU ZBOG VAS
          </h2>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-lg">
            Šta možemo da poboljšamo? Sve — uz vaše povratne informacije i našu posvećenost.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-teal-200 mb-2">{r.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Full-width image panel */}
        <motion.div
          className="mt-14 relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/FB_IMG_1772579845287.jpg"
            alt="Medicinska sestra brine o pacijentu"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d6b]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8 right-8 text-white">
            <p className="font-black text-2xl md:text-3xl">
              Kao da je neko vaš.
            </p>
            <p className="text-blue-200 text-sm mt-1">
              Briga, toplina i stručnost — na vašoj adresi.
            </p>
          </div>
        </motion.div>

        {/* Health definition quote */}
        <motion.blockquote
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-5xl text-teal-400 mb-4">&ldquo;</div>
          <p className="text-xl md:text-2xl font-light text-blue-100 italic leading-relaxed">
            Definicija zdravlja: Stanje potpunog fizičkog, mentalnog i socijalnog blagostanja,
            a ne samo odsustvo bolesti i slabosti.
          </p>
          <cite className="block mt-6 text-teal-300 font-semibold not-italic">
            — Svetska zdravstvena organizacija (WHO)
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
