"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PHONE_1 } from "@/lib/constants";

type PriceItem = {
  name: string;
  prices: [string, string, string];
  note?: string;
};

type Category = {
  id: string;
  icon: string;
  title: string;
  color: string;
  items: PriceItem[];
};

// Zona 1 = Beograd | Zona 2 = -10% | Zona 3 = -19%
const categories: Category[] = [
  {
    id: "infuzije",
    icon: "💉",
    title: "Infuzije",
    color: "blue",
    items: [
      { name: "Vitaminska", prices: ["8.500 RSD", "7.700 RSD", "6.900 RSD"] },
      { name: "After Party", prices: ["10.400 RSD", "9.400 RSD", "8.400 RSD"] },
      { name: "Sport", prices: ["10.400 RSD", "9.400 RSD", "8.400 RSD"] },
      { name: "Estetski Eliksir", prices: ["11.400 RSD", "10.300 RSD", "9.200 RSD"] },
      { name: "Detox", prices: ["9.900 RSD", "8.900 RSD", "8.000 RSD"] },
      { name: "Jet Lag", prices: ["9.900 RSD", "8.900 RSD", "8.000 RSD"] },
      { name: "Gvožđe", prices: ["9.900 RSD", "8.900 RSD", "8.000 RSD"] },
    ],
  },
  {
    id: "dodaci",
    icon: "⚗️",
    title: "Personalizovani dodaci",
    color: "teal",
    items: [
      { name: "Rastvor", prices: ["4.500 RSD", "4.100 RSD", "3.700 RSD"] },
      { name: "Magnezijum", prices: ["1.000 RSD", "900 RSD", "800 RSD"] },
      { name: "Elektroliti", prices: ["1.000 RSD", "900 RSD", "800 RSD"] },
      { name: "Anti-Nausea", prices: ["1.000 RSD", "900 RSD", "800 RSD"] },
      { name: "Amino kiseline", prices: ["1.000 RSD", "900 RSD", "800 RSD"] },
      { name: "Vitamin C 1g", prices: ["1.000 RSD", "900 RSD", "800 RSD"] },
      { name: "N-Acetyl Cysteine", prices: ["1.000 RSD", "900 RSD", "800 RSD"] },
      { name: "Complex B", prices: ["1.000 RSD", "900 RSD", "800 RSD"] },
    ],
  },
  {
    id: "lekar",
    icon: "👨‍⚕️",
    title: "Posete lekara",
    color: "indigo",
    items: [
      { name: "Poseta Dr. opšte prakse", prices: ["7.000 RSD", "6.300 RSD", "5.700 RSD"] },
      { name: "Online konsultacija Dr.", prices: ["2.000 RSD", "1.800 RSD", "1.600 RSD"] },
    ],
  },
  {
    id: "nega",
    icon: "❤️",
    title: "Kućna nega",
    color: "rose",
    items: [
      { name: "Presvlačenje pelena", prices: ["2.000 RSD", "1.800 RSD", "1.600 RSD"] },
      { name: "Kupanje", prices: ["7.000 RSD", "6.300 RSD", "5.700 RSD"] },
    ],
  },
  {
    id: "masaza",
    icon: "🤲",
    title: "Masaža u kući",
    color: "purple",
    items: [
      {
        name: "Relax — Antistres",
        prices: ["9.000 RSD", "8.100 RSD", "7.300 RSD"],
        note: "45 min",
      },
      {
        name: "Sportska i terapeutska",
        prices: ["10.000 RSD", "9.000 RSD", "8.100 RSD"],
        note: "45 min",
      },
    ],
  },
  {
    id: "dijagnostika",
    icon: "🔬",
    title: "Dijagnostika",
    color: "cyan",
    items: [
      { name: "Ultrazvuk mekih tkiva", prices: ["16.000 RSD", "14.400 RSD", "13.000 RSD"] },
      { name: "EKG", prices: ["6.000 RSD", "5.400 RSD", "4.900 RSD"] },
    ],
  },
  {
    id: "ostalo",
    icon: "🩺",
    title: "Ostale usluge",
    color: "blue",
    items: [
      {
        name: "Oksigenator — 30 dana",
        prices: ["17.550 RSD", "15.800 RSD", "14.200 RSD"],
        note: "Sa dostavom i montažom",
      },
      {
        name: "Oksigenator — 24 h",
        prices: ["4.000 RSD", "3.600 RSD", "3.200 RSD"],
        note: "Sa dostavom i montažom",
      },
      { name: "Plasiranje urinarnog katetera", prices: ["7.500 RSD", "6.800 RSD", "6.100 RSD"] },
      {
        name: "Previjanje",
        prices: ["3.500 RSD", "3.200 RSD", "2.900 RSD"],
        note: "Uključen materijal za 5×5 ranu",
      },
      { name: "I.V. injekcija", prices: ["3.500 RSD", "3.200 RSD", "2.900 RSD"] },
      { name: "I.M. injekcija", prices: ["3.500 RSD", "3.200 RSD", "2.900 RSD"] },
      { name: "Vađenje krvi", prices: ["2.000 RSD", "1.800 RSD", "1.600 RSD"] },
      { name: "Klizma", prices: ["5.500 RSD", "5.000 RSD", "4.500 RSD"] },
      { name: "Ispiranje ušiju", prices: ["5.500 RSD", "5.000 RSD", "4.500 RSD"] },
      { name: "Plasiranje nazogastrične sonde", prices: ["7.000 RSD", "6.300 RSD", "5.700 RSD"] },
    ],
  },
];

const transportItems = [
  { zone: "Prva zona", price: "4.500 RSD", note: "Jedan pravac" },
  { zone: "Druga zona", price: "5.500 RSD", note: "Jedan pravac" },
  { zone: "Treća zona", price: "6.000 RSD", note: "Jedan pravac" },
  { zone: "Duže relacije", price: "1,5 €/km", note: "" },
];

const zones = [
  { id: 0, label: "Zona 1", sublabel: "Beograd", color: "bg-[#0a5c9b] text-white" },
  {
    id: 1,
    label: "Zona 2",
    sublabel: "uskoro gradovi",
    color: "bg-[#0f9488] text-white",
  },
  {
    id: 2,
    label: "Zona 3",
    sublabel: "uskoro gradovi",
    color: "bg-purple-600 text-white",
  },
];

const colorMap: Record<string, { header: string; badge: string; row: string; price: string }> = {
  blue: {
    header: "bg-[#0a5c9b] text-white",
    badge: "bg-blue-100 text-[#0a5c9b]",
    row: "hover:bg-blue-50",
    price: "text-[#0a5c9b] font-black",
  },
  teal: {
    header: "bg-[#0f9488] text-white",
    badge: "bg-teal-100 text-[#0f9488]",
    row: "hover:bg-teal-50",
    price: "text-[#0f9488] font-black",
  },
  indigo: {
    header: "bg-indigo-700 text-white",
    badge: "bg-indigo-100 text-indigo-700",
    row: "hover:bg-indigo-50",
    price: "text-indigo-700 font-black",
  },
  rose: {
    header: "bg-rose-600 text-white",
    badge: "bg-rose-100 text-rose-600",
    row: "hover:bg-rose-50",
    price: "text-rose-600 font-black",
  },
  purple: {
    header: "bg-purple-700 text-white",
    badge: "bg-purple-100 text-purple-700",
    row: "hover:bg-purple-50",
    price: "text-purple-700 font-black",
  },
  cyan: {
    header: "bg-cyan-700 text-white",
    badge: "bg-cyan-100 text-cyan-700",
    row: "hover:bg-cyan-50",
    price: "text-cyan-700 font-black",
  },
};

function PricingTable({
  category,
  index,
  zoneIndex,
}: {
  category: Category;
  index: number;
  zoneIndex: number;
}) {
  const c = (colorMap[category.color] ?? colorMap["blue"])!;
  return (
    <motion.div
      className="rounded-2xl overflow-hidden shadow-sm border border-slate-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
    >
      <div className={`${c.header} px-6 py-4 flex items-center gap-3`}>
        <span className="text-2xl">{category.icon}</span>
        <h2 className="text-xl font-black tracking-wide">{category.title}</h2>
      </div>
      <div className="bg-white divide-y divide-slate-50">
        {category.items.map((item, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-6 py-4 transition-colors ${c.row}`}
          >
            <div className="flex-1 pr-4">
              <span className="text-slate-800 font-medium">{item.name}</span>
              {item.note && (
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${c.badge}`}>
                  {item.note}
                </span>
              )}
            </div>
            <span className={`text-lg whitespace-nowrap ${c.price}`}>{item.prices[zoneIndex]}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function PricingContent() {
  const [zoneIndex, setZoneIndex] = useState(0);
  const zone = zones[zoneIndex];

  return (
    <section className="py-16 bg-[#f0f7ff] overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Zone selector */}
        <motion.div
          className="mb-8 bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {zones.map((z) => (
            <button
              key={z.id}
              onClick={() => setZoneIndex(z.id)}
              className={`flex-1 rounded-xl py-3 px-4 transition-all text-center ${
                zoneIndex === z.id ? z.color + " shadow-md" : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <div className="font-black text-lg leading-none">{z.label}</div>
              <div
                className={`text-xs mt-1 ${zoneIndex === z.id ? "opacity-80" : "text-slate-400"}`}
              >
                {z.sublabel}
              </div>
              {z.discount && (
                <div
                  className={`text-xs font-bold mt-1 ${zoneIndex === z.id ? "opacity-90" : "text-green-600"}`}
                >
                  {z.discount}
                </div>
              )}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {categories.map((cat, i) => (
            <PricingTable key={cat.id} category={cat} index={i} zoneIndex={zoneIndex} />
          ))}
        </div>

        {/* Sanitski transport — iste cene za sve zone */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800 text-white px-6 py-4 flex items-center gap-3">
            <span className="text-2xl">🚑</span>
            <h2 className="text-xl font-black tracking-wide">Sanitski transport</h2>
          </div>
          <div className="bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
              {transportItems.map((t, i) => (
                <div key={i} className="px-6 py-5 text-center hover:bg-slate-50 transition-colors">
                  <p className="text-slate-500 text-sm mb-1">{t.zone}</p>
                  <p className="text-2xl font-black text-slate-800">{t.price}</p>
                  {t.note && <p className="text-xs text-slate-400 mt-1">{t.note}</p>}
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 px-6 py-4 bg-amber-50 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">⏱️</span>
              <p className="text-slate-600 text-sm">
                <strong className="text-slate-800">Čekanje:</strong> Prvi sat čekanja je besplatan.
                Svaki naredni sat naplaćuje se <strong className="text-slate-800">3.000 RSD</strong>
                .
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="bg-gradient-to-br from-[#0a3d6b] to-[#0a5c9b] rounded-3xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4">🎁</div>
          <h3 className="text-2xl font-black mb-2">
            Uz svaku posetu — besplatno merenje vitalnih parametara
          </h3>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            Krvni pritisak, puls, saturacija kiseonika i temperatura — bez dodatnih troškova pri
            svakom dolasku naše sestre.
          </p>
          <a
            href={`tel:${PHONE_1}`}
            className="inline-flex items-center gap-2 bg-[#14b8a6] hover:bg-[#0f9488] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
          >
            📞 Zakažite posetu odmah
          </a>
        </motion.div>
      </div>
    </section>
  );
}
