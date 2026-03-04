"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PHONE_1, PHONE_2, EMAIL } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-[#f0f7ff]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#14b8a6] font-semibold tracking-widest text-sm uppercase">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a3d6b] mt-2">
            Kontaktirajte nas <span className="text-[#0a5c9b]">odmah</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
            Dostupni smo 24/7. Ne čekajte — pozovite nas sada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact cards */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a
              href={`tel:${PHONE_1}`}
              className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 hover:border-teal-200 transition-all group"
            >
              <div className="w-14 h-14 bg-[#0a5c9b] rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#14b8a6] transition-colors">
                📞
              </div>
              <div>
                <p className="text-slate-500 text-sm mb-1">Telefon 1</p>
                <p className="text-2xl font-black text-[#0a3d6b] group-hover:text-[#0a5c9b] transition-colors">
                  {PHONE_1}
                </p>
              </div>
            </a>

            <a
              href={`tel:${PHONE_2}`}
              className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 hover:border-teal-200 transition-all group"
            >
              <div className="w-14 h-14 bg-[#0a5c9b] rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#14b8a6] transition-colors">
                📞
              </div>
              <div>
                <p className="text-slate-500 text-sm mb-1">Telefon 2</p>
                <p className="text-2xl font-black text-[#0a3d6b] group-hover:text-[#0a5c9b] transition-colors">
                  {PHONE_2}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 hover:border-teal-200 transition-all group"
            >
              <div className="w-14 h-14 bg-[#14b8a6] rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#0a5c9b] transition-colors">
                ✉️
              </div>
              <div>
                <p className="text-slate-500 text-sm mb-1">Email</p>
                <p className="text-xl font-bold text-[#0a3d6b] group-hover:text-[#0a5c9b] transition-colors break-all">
                  {EMAIL}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-5 bg-gradient-to-br from-[#0a3d6b] to-[#0a5c9b] rounded-2xl p-6 text-white">
              <div className="text-4xl flex-shrink-0">🕐</div>
              <div>
                <p className="font-bold text-teal-200 mb-1">Radno vreme</p>
                <p className="text-white font-black text-xl">24 sata / 7 dana</p>
                <p className="text-blue-200 text-sm mt-1">Dani praznici, vikendi — uvek tu</p>
              </div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/FB_IMG_1772579296792.jpg"
                alt="Terenska sestra"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d6b]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-black text-2xl">MI SMO TU ZBOG VAS</p>
                <p className="text-blue-200 text-sm mt-1">
                  Poštovanje svakog pacijenta uz dogovor sa porodicom i lekarom.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
