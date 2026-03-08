"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PHONE_1 } from "@/lib/constants";

const careServices = [
  {
    icon: "👵",
    title: "Čuvanje starih i nemoćnih",
    desc: "Pažljiva i posvećena briga o starijim osobama u njihovom domu.",
  },
  {
    icon: "🏥",
    title: "Postoperativna nega",
    desc: "Stručna nega nakon operacija — od previjanja do praćenja oporavka.",
  },
  {
    icon: "🦽",
    title: "Pomoć nepokretnim osobama",
    desc: "Svakodnevna nega, polažaj, dekubitus prevencija i rehabilitacija.",
  },
  {
    icon: "🍽️",
    title: "Pomoć pri hranjenju i higijeni",
    desc: "Nežna pomoć pri obroku, kupanju, presvlačenju i ličnoj higijeni.",
  },
  {
    icon: "🌙",
    title: "Noćne smene",
    desc: "Sestra ostaje tokom noći — nadzor, nega i sigurnost do jutra.",
  },
  {
    icon: "☀️",
    title: "Dnevne smene",
    desc: "Pratnja i nega tokom dana dok su članovi porodice na poslu.",
  },
];

export default function NursingCare() {
  return (
    <section className="py-20 bg-[#fffaf5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-rose-400 font-semibold tracking-widest text-sm uppercase">
            Dugotrajna briga
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a3d6b] mt-2">
            Nega i čuvanje pacijenata
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
            Briga koja ne prestaje — danju, noću, vikendom. Vaša porodica može da odahne, mi smo tu.
          </p>
        </motion.div>

        {/* Main split layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/FB_IMG_1772579497735.jpg"
                alt="Nega i briga o starim osobama u domu"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d6b]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-black text-2xl leading-tight">
                  Nežna i iskusna
                  <br />
                  pomoć kod kuće
                </p>
                <p className="text-blue-200 text-sm mt-2">
                  Pozovite nas kada vam je potrebna briga.
                </p>
              </div>
            </div>

            {/* Floating 24/7 badge */}
            <motion.div
              className="absolute -top-5 -right-5 bg-[#0a5c9b] text-white rounded-2xl px-5 py-4 shadow-xl text-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <p className="font-black text-3xl leading-none">24/7</p>
              <p className="text-teal-200 text-xs font-semibold mt-1">NEGA</p>
            </motion.div>

            {/* Floating smene badge */}
            <motion.div
              className="absolute -bottom-5 -left-5 bg-rose-500 text-white rounded-2xl px-5 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <p className="font-black text-sm">🌙 Noćne smene</p>
              <p className="font-black text-sm">☀️ Dnevne smene</p>
            </motion.div>
          </motion.div>

          {/* Services list side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {careServices.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-rose-50 hover:border-rose-200 hover:shadow-md transition-all group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 bg-rose-50 group-hover:bg-rose-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0a3d6b] group-hover:text-rose-600 transition-colors mb-1">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={`tel:${PHONE_1}`}
                className="inline-flex items-center gap-3 bg-rose-500 hover:bg-rose-600 text-white px-7 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105"
              >
                📞 Dogovorite negu — {PHONE_1}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom image banner */}
        <motion.div
          className="relative aspect-video rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/IMG-06a28b45f94aefd6d806d53a3fa90daa-V.jpg"
            alt="Briga o starima u njihovom domu"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d6b]/85 via-[#0a5c9b]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-14">
            <div className="text-white max-w-lg">
              <p className="text-teal-300 font-semibold uppercase tracking-wider text-sm mb-2">
                Medicinske sestre i negovatelji
              </p>
              <p className="text-2xl md:text-3xl font-black leading-tight">
                Individualan pristup · Dolazak na kućnu adresu
              </p>
              <p className="text-blue-200 text-sm mt-2">Jedna porodica brine o vašoj porodici.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
