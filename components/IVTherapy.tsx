"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PHONE_1 } from "@/lib/constants";

const therapies = [
  {
    id: "after-party",
    color: "from-yellow-500/20 to-green-500/10 border-yellow-400/30",
    accent: "text-yellow-300",
    iconBg: "bg-yellow-400/20",
    icon: "🎉",
    title: "Infuzija posle žurki",
    subtitle: "After Party — brz oporavak",
    bullets: [
      "Brz oporavak od mamurluka",
      "Nasmijan i energičan osećaj",
      "Vraća energiju i hidrira organizam",
      "Detoksikacija i osveženje",
    ],
  },
  {
    id: "glutation",
    color: "from-sky-400/20 to-purple-500/10 border-sky-400/30",
    accent: "text-sky-300",
    iconBg: "bg-sky-400/20",
    icon: "✨",
    title: "Infuzija Glutationa",
    subtitle: "Najjači antioksidans",
    bullets: [
      "Najjači antioksidans",
      "Izbeljivanje kože",
      "Anti-age efekat",
      "Detoksikacija organizma",
    ],
  },
];

export default function IVTherapy() {
  return (
    <section className="bg-[#06111f] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-center">

          {/* Image */}
          <motion.div
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-green-400/20 via-sky-400/10 to-purple-500/20 blur-2xl scale-110" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/FB_IMG_1772579296792.jpg"
                alt="Infuzije detoksikacije i oporavka — Velika Porodica"
                width={480}
                height={640}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">
              Velika Porodica
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-3 leading-tight">
              Infuzije detoksikacije<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-400">
                &amp; oporavka
              </span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Premium IV terapije koje vraćaju energiju, čiste organizam
              i pomlađuju telo — direktno u vašem domu.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {therapies.map((t, i) => (
                <motion.div
                  key={t.id}
                  className={`rounded-2xl p-5 bg-gradient-to-br border ${t.color} backdrop-blur`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className={`inline-flex items-center gap-2 ${t.iconBg} rounded-xl px-3 py-1.5 mb-4`}>
                    <span className="text-xl">{t.icon}</span>
                    <span className={`text-xs font-bold uppercase tracking-wide ${t.accent}`}>
                      {t.subtitle}
                    </span>
                  </div>
                  <h3 className={`text-lg font-black mb-3 ${t.accent}`}>{t.title}</h3>
                  <ul className="space-y-2">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className={`mt-0.5 flex-shrink-0 ${t.accent}`}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <a
              href={`tel:${PHONE_1}`}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-green-400 hover:from-yellow-300 hover:to-green-300 text-[#06111f] font-black px-8 py-4 rounded-full text-lg shadow-xl transition-all hover:scale-105"
            >
              📞 Zakazite infuziju — {PHONE_1}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
