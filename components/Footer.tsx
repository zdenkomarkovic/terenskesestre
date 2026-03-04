"use client";

import { PHONE_1, PHONE_2, EMAIL, COVERED_CITIES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#071e37] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-3">
              <span className="text-teal-400">❤</span> Terenske Sestre
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Velika Porodica Terenske Sestre — zdravstvena nega u vašem domu, 
              dostupna 24/7 širom Srbije.
            </p>
            <p className="text-teal-300 font-bold text-sm italic">
              &ldquo;MI SMO TU ZBOG VAS&rdquo;
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-teal-200 mb-4 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${PHONE_1}`} className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  📞 {PHONE_1}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_2}`} className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  📞 {PHONE_2}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  ✉️ {EMAIL}
                </a>
              </li>
              <li className="text-blue-200 flex items-center gap-2">
                🕐 Dostupni 24/7
              </li>
            </ul>
          </div>

          {/* Gradovi */}
          <div>
            <h4 className="font-bold text-teal-200 mb-4 uppercase tracking-wider text-sm">Pokriveni gradovi</h4>
            <div className="flex flex-wrap gap-2">
              {COVERED_CITIES.map((city) => (
                <span
                  key={city}
                  className="bg-white/10 text-blue-200 text-xs px-3 py-1 rounded-full hover:bg-teal-600/30 transition-colors"
                >
                  {city}
                </span>
              ))}
              <span className="bg-teal-600/30 text-teal-300 text-xs px-3 py-1 rounded-full">
                + cela Srbija
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Terenske Sestre Velika Porodica. Sva prava zadržana.</p>
          <p>Zdravstvena nega u vašem domu · Cela Srbija · 24/7</p>
        </div>
      </div>
    </footer>
  );
}
