"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Products", href: "#products" },
  { name: "Specials", href: "#specials" },
  { name: "Recipes", href: "#recipes" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-maroon/95 backdrop-blur-md shadow-2xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div
            className={`transition-all duration-500 ${
              scrolled ? "w-10 h-10" : "w-14 h-14"
            } rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg`}
          >
            <span className="text-maroon font-heading font-black text-lg">
              M
            </span>
          </div>
          <div className="hidden sm:block">
            <h1
              className={`font-heading font-bold text-gold transition-all duration-500 ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              MASALA HOUSE
            </h1>
            <p className="text-gold-light text-[10px] tracking-[3px] uppercase -mt-1">
              The Magic of Flavour
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-gold font-medium text-sm tracking-wide transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://wa.me/919885594984?text=Hello!%20I'm%20interested%20in%20your%20fresh%20spices%20and%20would%20like%20to%20place%20an%20order.%20Thank%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Order
          </a>
        </div>

        {/* Mobile Hamburger - min 44px touch target for accessibility */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative min-w-[44px] min-h-[44px] w-11 h-11 flex flex-col items-center justify-center gap-1.5 z-50 -mr-1"
          aria-label="Toggle menu"
        >
          <span
            className={`hamburger-line block w-6 h-0.5 bg-gold rounded ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`hamburger-line block w-6 h-0.5 bg-gold rounded ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`hamburger-line block w-6 h-0.5 bg-gold rounded ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-maroon/98 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <m.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-white hover:text-gold font-medium text-lg tracking-wide transition-colors"
                >
                  {link.name}
                </m.a>
              ))}
              <a
                href="https://wa.me/919885594984?text=Hello!%20I'm%20interested%20in%20your%20fresh%20spices%20and%20would%20like%20to%20place%20an%20order.%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white text-center px-6 py-3 rounded-full font-semibold mt-4"
              >
                WhatsApp Order
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
}
