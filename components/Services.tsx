"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-[#f0f7ff]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#14b8a6] font-semibold tracking-widest text-sm uppercase">Naše usluge</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a3d6b] mt-2">
            Sve što medicinska sestra<br />može da uradi — <span className="text-[#0a5c9b]">dolazimo mi</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
            Kompletna zdravstvena nega u vašem domu, na vašoj adresi, u vaše vreme.
          </p>
        </motion.div>

        {/* Featured image banner */}
        <motion.div
          className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-12 shadow-lg"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/FB_IMG_1772578954350.jpg"
            alt="Terenska sestra brine o pacijentu u domu"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d6b]/80 via-[#0a5c9b]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-14">
            <div className="text-white max-w-md">
              <p className="text-teal-300 font-semibold uppercase tracking-wider text-sm mb-2">Na jedan poziv</p>
              <p className="text-3xl md:text-4xl font-black leading-tight">
                Sestra dolazi<br />direktno kod vas
              </p>
              <p className="text-blue-200 mt-3 text-sm md:text-base">
                Nežna i iskusna pomoć — kod kuće, odmah.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 hover:border-teal-200 transition-all group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-[#0a3d6b] mb-2 group-hover:text-[#0a5c9b] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
