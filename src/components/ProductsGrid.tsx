"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Spice {
  name: string;
  telugu: string;
  heat: number; // 1-5
  image: string;
  tip: string;
  color: string;
}

const spices: Spice[] = [
  {
    name: "Chilli",
    telugu: "Mirchi",
    heat: 5,
    image: "/images/spices/chilli.png",
    tip: "Toast in oil for 10s to unlock smoky heat in curries!",
    color: "#DC143C",
  },
  {
    name: "Turmeric",
    telugu: "Pasupu",
    heat: 1,
    image: "/images/spices/turmeric.png",
    tip: "Add a pinch to warm milk with honey for golden immunity!",
    color: "#DAA520",
  },
  {
    name: "Ginger Garlic Paste",
    telugu: "Allam Vellulli",
    heat: 2,
    image: "/images/spices/ginger-garlic-paste.png",
    tip: "Base for every curry - 1 tbsp per serving is perfect!",
    color: "#DEB887",
  },
  {
    name: "Pepper",
    telugu: "Miriyalu",
    heat: 4,
    image: "/images/spices/pepper.png",
    tip: "Crush fresh over dal for a warm, earthy kick!",
    color: "#2F4F4F",
  },
  {
    name: "Coriander",
    telugu: "Dhaniyalu",
    heat: 1,
    image: "/images/spices/coriander.png",
    tip: "Dry roast before grinding for nuttier flavor in rasam!",
    color: "#8B7355",
  },
  {
    name: "Cardamom",
    telugu: "Elaichi",
    heat: 1,
    image: "/images/spices/cardamom.png",
    tip: "Crush pods fresh into chai for aromatic bliss!",
    color: "#556B2F",
  },
  {
    name: "Cumin",
    telugu: "Jeera",
    heat: 2,
    image: "/images/spices/cumin.png",
    tip: "Temper in ghee as first step for perfect biryani base!",
    color: "#C4A35A",
  },
  {
    name: "Cloves",
    telugu: "Lavangalu",
    heat: 2,
    image: "/images/spices/cloves.png",
    tip: "Use 2-3 per cup of rice for subtle aromatic pilaf!",
    color: "#8B4513",
  },
  {
    name: "Cinnamon",
    telugu: "Dalchini",
    heat: 1,
    image: "/images/spices/cinnamon.png",
    tip: "Add a stick to biryani for warm, sweet undertones!",
    color: "#A0522D",
  },
  {
    name: "Mustard",
    telugu: "Avalu",
    heat: 3,
    image: "/images/spices/mustard.png",
    tip: "Pop in hot oil until they splutter for perfect tadka!",
    color: "#DAA520",
  },
  {
    name: "Fenugreek",
    telugu: "Menthulu",
    heat: 2,
    image: "/images/spices/fenugreek.png",
    tip: "Soak overnight, add to dosa batter for crispy edges!",
    color: "#6B8E23",
  },
  {
    name: "Garam Masala",
    telugu: "Special Blend",
    heat: 3,
    image: "/images/spices/garam-masala.png",
    tip: "Sprinkle at the end of cooking for peak aroma!",
    color: "#8B0000",
  },
];

function SpiceCard({ spice, index }: { spice: Spice; index: number }) {
  const [showTip, setShowTip] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="spice-card relative group"
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gold/20 h-full flex flex-col">
        {/* Image area */}
        <div
          className="relative h-44 sm:h-52 flex items-center justify-center overflow-hidden bg-beige-dark/30"
          style={{
            background: `linear-gradient(135deg, ${spice.color}15, ${spice.color}08)`,
          }}
        >
          <Image
            src={spice.image}
            alt={`${spice.name} (${spice.telugu})`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Recipe tip overlay */}
          <m.div
            initial={false}
            animate={{
              opacity: showTip ? 1 : 0,
              y: showTip ? 0 : 10,
            }}
            className="absolute inset-0 bg-maroon/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="text-center">
              <p className="text-gold font-heading font-bold text-sm mb-2">
                💡 Recipe Tip
              </p>
              <p className="text-white text-sm leading-relaxed">
                {spice.tip}
              </p>
            </div>
          </m.div>
        </div>

        {/* Card content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-heading font-bold text-lg text-maroon">
            {spice.name}
          </h3>
          <p className="text-sm text-gray-500 italic">({spice.telugu})</p>
        </div>
      </div>
    </m.div>
  );
}

export default function ProductsGrid() {
  return (
    <section id="products" className="py-20 bg-beige-light relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold tracking-[5px] uppercase text-sm">
            Our Collection
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-maroon mt-3">
            Premium Fresh Spices
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hand-picked, freshly ground, and packed with love. Each spice
            sourced directly from farms to your kitchen.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-crimson mx-auto mt-6 rounded-full" />
        </m.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {spices.map((spice, index) => (
            <SpiceCard key={spice.name} spice={spice} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            Can&apos;t find what you need? We have 50+ spices in store!
          </p>
          <a
            href="https://wa.me/919885594984?text=Hi%20Masala%20House!%20I'd%20like%20to%20order%20spices."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            📱 Order via WhatsApp
          </a>
        </m.div>
      </div>
    </section>
  );
}
