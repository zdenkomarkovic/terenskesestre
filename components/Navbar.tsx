"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PHONE_1, PHONE_2 } from "@/lib/constants";

const navLinks = [
  { href: "/#usluge", label: "Usluge" },
  { href: "/#pokrivenost", label: "Pokrivenost" },

  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar — phones */}
      <div className="bg-[#0a5c9b] text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span className="font-medium">Terenske Sestre Velika Porodica</span>
          <div className="flex gap-4">
            <a href={`tel:${PHONE_1}`} className="hover:text-teal-200 transition-colors font-bold">
              📞 {PHONE_1}
            </a>
            <a href={`tel:${PHONE_2}`} className="hover:text-teal-200 transition-colors font-bold">
              📞 {PHONE_2}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-300 ${solid ? "py-0" : "py-0"}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Terenske Sestre Velika Porodica"
              width={75}
              height={75}
              className="rounded-full object-cover"
            />
            <span className={`text-xl font-bold ${solid ? "text-[#0a5c9b]" : "text-white"}`}>
              Terenske Sestre
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors hover:text-teal-400 ${
                    solid ? "text-slate-700" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${PHONE_1}`}
                className="bg-[#14b8a6] hover:bg-[#0f9488] text-white px-5 py-2 rounded-full font-bold transition-colors"
              >
                Pozovite nas
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${solid ? "text-slate-700" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span className={`h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <ul className="px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block text-slate-700 font-medium hover:text-[#0a5c9b]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`tel:${PHONE_1}`}
                    className="block bg-[#14b8a6] text-white px-4 py-2 rounded-full font-bold text-center"
                  >
                    📞 Pozovite nas
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
