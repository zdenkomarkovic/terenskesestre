"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "24/7", label: "Dostupnost" },
  { value: "12+", label: "Pokrivenih gradova" },
  { value: "100%", label: "Cela Srbija" },
  { value: "❤️", label: "Briga o pacijentu" },
];

export default function Stats() {
  return (
    <section className="bg-[#0a5c9b] text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl font-black text-teal-300 mb-1">{s.value}</div>
              <div className="text-blue-200 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
