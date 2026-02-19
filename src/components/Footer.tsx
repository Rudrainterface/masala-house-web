"use client";

import { m } from "framer-motion";

const WHATSAPP_NUMBER = "919885594984";
const WHATSAPP_GREETING = "Hello! I'm interested in your fresh spices and would like to place an order. Thank you!";
const STORE_ADDRESS = "Near Nalla Pochamma Temple, Y Junction, Golconda X Road, Musheerabad, Hyderabad, Telangana";
/** Official Masala House location (Google Maps) */
const MAP_LINK = "https://maps.app.goo.gl/kizp3SNLGaSqygmj6";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(STORE_ADDRESS)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark text-white relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-gold via-crimson to-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Row 1: Brand, Quick Links, Visit Our Store */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pr-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-maroon font-heading font-black text-xl">M</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-gold">MASALA HOUSE</h3>
                <p className="text-gold-light text-[10px] tracking-[3px] uppercase -mt-0.5">The Magic of Flavour</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              We deal in Spices (whole) &amp; Freshly Grinded (Ginger Garlic Paste, Masala&apos;s, Powders) and other General items. Serving Hyderabad with love since 2015.
            </p>
            <div className="flex gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              <a href="tel:+919885594984" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon transition-all" aria-label="Call">📞</a>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all" aria-label="View location on map">📍</a>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <h4 className="font-heading font-bold text-lg text-gold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "#hero" },
                { name: "Products", href: "#products" },
                { name: "Specials", href: "#specials" },
                { name: "Recipes", href: "#recipes" },
                { name: "Reviews", href: "#testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Visit Our Store - address & contact only */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-lg text-gold mb-5">Visit Our Store</h4>
            <p className="text-white/90 text-sm leading-relaxed">
              Near Nalla Pochamma Temple,<br />
              Y Junction, Golconda X Road,<br />
              Musheerabad, Hyderabad
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" /> WhatsApp 9885594984
              </a>
              <a href="tel:+919885594984" className="text-gold hover:text-gold-light transition-colors block">📞 9885594984</a>
              <p className="text-white/50 text-xs mt-1">🚚 Free Delivery within 2km</p>
            </div>
          </m.div>
        </div>

        {/* Row 2: Map - full width, exact store location */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 lg:mt-12"
        >
          <h4 className="font-heading font-bold text-base text-gold mb-3">📍 Find us on map</h4>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-xl border border-gold/30 aspect-video max-h-[280px] sm:max-h-[320px] bg-white/5 relative group"
            aria-label="Open Masala House location in Google Maps"
          >
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 240 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Masala House - Near Nalla Pochamma Temple, Musheerabad, Hyderabad"
              className="pointer-events-none"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
              <span className="bg-gold text-maroon px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Open in Google Maps →
              </span>
            </span>
          </a>
          <div className="mt-3 flex flex-wrap gap-4">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold hover:text-gold-light transition-colors"
            >
              View Masala House location →
            </a>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold hover:text-gold-light transition-colors"
            >
              Get directions →
            </a>
          </div>
        </m.div>

        {/* Bottom bar - stacks on mobile, inline on laptop */}
        <div className="mt-10 lg:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left max-w-full min-w-0">
            © {new Date().getFullYear()} Masala House. All rights reserved. Made
            with 🌶️ in Hyderabad. Made by Rudra @ rudrAInterface..
          </p>
          <div className="flex gap-4 text-white/40 text-xs flex-shrink-0">
            <span className="hover:text-gold transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-gold transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-green-500 shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110">
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-crimson rounded-full flex items-center justify-center text-[10px] text-white font-bold animate-bounce">
            1
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 bg-white text-maroon px-4 py-2 rounded-xl shadow-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with us!
            <div className="absolute top-full right-6 w-3 h-3 bg-white transform rotate-45 -mt-1.5" />
          </div>
        </div>
      </a>
    </footer>
  );
}
