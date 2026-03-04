"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { icon: "🏥", title: "Klinike i bolnice", desc: "Sarađujemo sa zdravstvenim ustanovama radi koordinisane nege." },
  { icon: "🔬", title: "Laboratorije", desc: "Organizujemo uzorkovanje i dostavu uzoraka u laboratorije." },
  { icon: "🚑", title: "Sanitski transport", desc: "Obezbeđujemo prevoz pacijenata sanitetskim vozilima." },
  { icon: "👨‍⚕️", title: "Lekari specijalisti", desc: "Radimo u dogovoru sa vašim lekarima za optimalnu terapiju." },
];

export default function Partnerships() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/FB_IMG_1772578812730.jpg"
                alt="Saradnja sa lekarima i klinikama"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d6b]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-black text-xl">Koordinisana nega</p>
                <p className="text-blue-200 text-sm mt-1">
                  Sestre, lekari, laboratorije, transport — sve pod jednim krovom.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-[#14b8a6] text-white rounded-2xl px-5 py-3 shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <p className="font-black text-lg leading-tight">Potpuna</p>
              <p className="font-black text-lg leading-tight">podrška</p>
            </motion.div>
          </motion.div>

          {/* Text + cards side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#14b8a6] font-semibold tracking-widest text-sm uppercase">
              Partnerstva
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a3d6b] mt-2 mb-4">
              Kompletan sistem <span className="text-[#0a5c9b]">zdravstvene brige</span>
            </h2>
            <p className="text-slate-500 mb-8 text-lg">
              Nismo samo terenska nega — mi smo vaš most ka celom zdravstvenom sistemu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partners.map((p, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-2xl bg-[#f0f7ff] hover:bg-[#0a5c9b] hover:text-white transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <h3 className="font-bold text-[#0a3d6b] group-hover:text-teal-300 mb-1 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-blue-100 text-sm transition-colors">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
