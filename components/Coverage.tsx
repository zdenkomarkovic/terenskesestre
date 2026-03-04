"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COVERED_CITIES, PHONE_1 } from "@/lib/constants";

export default function Coverage() {
  return (
    <section id="pokrivenost" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[#14b8a6] font-semibold tracking-widest text-sm uppercase">
              Pokrivenost terena
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a3d6b] mt-3 mb-6 leading-tight">
              Sestra <span className="text-[#0a5c9b]">najbliža vama</span>
              <br />
              ide na teren
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Naš sistem je jednostavan ali moćan: kada pozovete,
              <strong className="text-[#0a3d6b]">
                {" "}
                medicinska sestra koja je najbliža vašoj adresi po kilometrima
              </strong>{" "}
              odmah kreće prema vama. Nema čekanja, nema gubljenja vremena.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Pokrivamo <strong>celu Srbiju</strong> — od Novog Sada do Aranđelovca, sve gradove i
              sela između. Ako ste u dilemi da li pokrivamo vaše mesto — samo pozovite, i to ćemo
              rešiti.
            </p>

            {/* Team illustration */}
            <motion.div
              className="relative h-56 rounded-2xl overflow-hidden mb-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/FB_IMG_1772579017045.jpg"
                alt="Tim terenskih sestara Velika Porodica"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
            </motion.div>

            <a
              href={`tel:${PHONE_1}`}
              className="inline-flex items-center gap-3 bg-[#0a5c9b] hover:bg-[#074a7d] text-white px-7 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105"
            >
              📞 Proverite pokrivenost
            </a>
          </motion.div>

          {/* Cities side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-[#0a3d6b] to-[#0a5c9b] rounded-3xl overflow-hidden text-white shadow-xl">
              {/* Image inside the dark card */}
              <div className="relative h-44">
                <Image
                  src="/FB_IMG_1772579664984.jpg"
                  alt="Terenska sestra na terenu"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d6b]/30 to-[#0a5c9b]/80" />
                <div className="absolute bottom-4 left-6">
                  <p className="font-black text-xl">Pokrivamo celu Srbiju</p>
                  <p className="text-teal-200 text-sm">Sestra najbliža vama — dolazi odmah</p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-bold text-xl mb-5 text-teal-200">
                  📍 Trenutno pokriveni gradovi
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {COVERED_CITIES.map((city, i) => (
                    <motion.div
                      key={city}
                      className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
                      <span className="font-medium text-sm">{city}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-blue-200 text-sm text-center">
                    + sva mesta između ovih gradova
                    <br />
                    <strong className="text-white">i cela Srbija na upit</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Proximity highlight */}
            <motion.div
              className="mt-6 bg-teal-50 border border-teal-200 rounded-2xl p-6 flex gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl flex-shrink-0">🗺️</div>
              <div>
                <h4 className="font-bold text-[#0a3d6b] mb-1">Sistem blizine</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Uvek šaljemo sestru koja je <strong>geografski najbliža vama</strong>. To znači
                  brži dolazak, manje čekanja i bržu pomoć.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
