"use client";

import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type TabKey = "powders" | "batters" | "dryfruits";

interface SpecialItem {
  name: string;
  description: string;
  emoji: string;
  whatsappMsg: string;
  image?: string;
}

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "powders", label: "Powder Masalas", icon: "🫙" },
  { key: "batters", label: "Healthy Batters", icon: "🥣" },
  { key: "dryfruits", label: "Dry Fruits & Millets", icon: "🥜" },
];

const items: Record<TabKey, SpecialItem[]> = {
  powders: [
    {
      name: "Sambar Powder",
      description:
        "Traditional Telugu sambar masala with roasted dal, chilli & coriander. Perfect for authentic sambar.",
      emoji: "🍲",
      whatsappMsg: "I want to order Sambar Powder",
      image: "/images/specials/sambar-powder.png",
    },
    {
      name: "Rasam Powder",
      description:
        "Aromatic blend of pepper, cumin & curry leaves for the perfect tangy rasam.",
      emoji: "🥘",
      whatsappMsg: "I want to order Rasam Powder",
      image: "/images/specials/rasam-powder.png",
    },
    {
      name: "Biryani Masala",
      description:
        "Hyderabadi-style biryani blend with saffron notes, whole spices ground fresh.",
      emoji: "🍚",
      whatsappMsg: "I want to order Biryani Masala",
      image: "/images/specials/biryani-masala.png",
    },
    {
      name: "Chicken Masala",
      description:
        "Rich, bold spice mix for perfect gravy chicken curry every time.",
      emoji: "🍗",
      whatsappMsg: "I want to order Chicken Masala",
      image: "/images/specials/chicken-masala.png",
    },
    {
      name: "Mutton Masala",
      description:
        "Robust blend for mutton curries and biryanis. Whole spices ground fresh for deep, rich flavor.",
      emoji: "🍖",
      whatsappMsg: "I want to order Mutton Masala",
      image: "/images/specials/mutton-masala.png",
    },
    {
      name: "Mirchi Masala",
      description:
        "Vibrant red chilli powder blend for curries, tadka and pickles. Hot and aromatic.",
      emoji: "🌶️",
      whatsappMsg: "I want to order Mirchi Masala",
      image: "/images/specials/mirchi-masala.png",
    },
  ],
  batters: [
    {
      name: "Dosa Batter",
      description:
        "Perfectly fermented rice & urad dal batter for crispy golden dosas. Ready to pour!",
      emoji: "🫓",
      whatsappMsg: "I want to order Dosa Batter",
      image: "/images/specials/dosa-batter.png",
    },
    {
      name: "Idli Batter",
      description:
        "Soft, fluffy idli guaranteed. Our classic batter with perfect fermentation.",
      emoji: "⚪",
      whatsappMsg: "I want to order Idli Batter",
      image: "/images/specials/idli-batter.png",
    },
    {
      name: "Wada Batter",
      description:
        "Thick urad dal batter for crispy outside, soft inside medu vada.",
      emoji: "🍩",
      whatsappMsg: "I want to order Wada Batter",
      image: "/images/specials/wada-batter.png",
    },
    {
      name: "Millet Dosa Batter",
      description:
        "Healthy millet-based batter for nutritious, crispy dosas. Diabetic-friendly!",
      emoji: "🌾",
      whatsappMsg: "I want to order Millet Dosa Batter",
      image: "/images/specials/millet-dosa-batter.png",
    },
    {
      name: "Ragi Idli Batter",
      description:
        "Finger millet batter for protein-rich, iron-loaded healthy idlis.",
      emoji: "💪",
      whatsappMsg: "I want to order Ragi Idli Batter",
      image: "/images/specials/ragi-idli-batter.png",
    },
    {
      name: "Pesarattu Batter",
      description:
        "Green moong dal batter for the famous Andhra-style pesarattu dosa.",
      emoji: "🟢",
      whatsappMsg: "I want to order Pesarattu Batter",
      image: "/images/specials/pesarattu-batter.png",
    },
  ],
  dryfruits: [
    {
      name: "Almonds (Badam)",
      description:
        "Premium California almonds, crunchy and fresh. Great for snacking & cooking.",
      emoji: "🥜",
      whatsappMsg: "I want to order Almonds",
      image: "/images/specials/almonds.png",
    },
    {
      name: "Cashews (Jeedipappu)",
      description:
        "Whole white cashews W320 grade, perfect for sweets and gravies.",
      emoji: "🫘",
      whatsappMsg: "I want to order Cashews",
      image: "/images/specials/cashews.png",
    },
    {
      name: "Raisins (Endu Draksha)",
      description:
        "Sweet golden raisins for pulao, payasam & healthy snacking.",
      emoji: "🍇",
      whatsappMsg: "I want to order Raisins",
      image: "/images/specials/raisins.png",
    },
    {
      name: "Foxtail Millet (Korra)",
      description:
        "Ancient grain superfood, high in iron. Perfect rice substitute for health-conscious families.",
      emoji: "🌾",
      whatsappMsg: "I want to order Foxtail Millet",
      image: "/images/specials/foxtail-millet.png",
    },
    {
      name: "Finger Millet (Ragi)",
      description:
        "Calcium-rich ragi for rotis, porridge & idlis. A kids' health booster!",
      emoji: "💪",
      whatsappMsg: "I want to order Ragi",
      image: "/images/specials/finger-millet.png",
    },
    {
      name: "Little Millet (Samalu)",
      description:
        "Gluten-free superfood millet, great for upma, pulao & rice replacement.",
      emoji: "🥗",
      whatsappMsg: "I want to order Little Millet",
      image: "/images/specials/little-millet.png",
    },
  ],
};

function FlipCard({ item }: { item: SpecialItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card h-72 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`flip-card-inner relative w-full h-full transition-transform duration-600 ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="flip-card-front absolute inset-0 bg-white rounded-2xl shadow-lg border border-gold/20 p-6 flex flex-col items-center justify-center overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {item.image ? (
            <div className="relative w-full h-32 mb-4 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-contain"
                loading="lazy"
              />
            </div>
          ) : (
            <span className="text-5xl mb-4">{item.emoji}</span>
          )}
          <h3 className="font-heading font-bold text-lg text-maroon text-center">
            {item.name}
          </h3>
          <p className="text-xs text-gray-400 mt-3">Tap to see details</p>
        </div>

        {/* Back */}
        <div
          className="flip-card-back absolute inset-0 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-white/90 text-sm text-center leading-relaxed mb-4">
            {item.description}
          </p>
          <a
            href={`https://wa.me/919885594984?text=${encodeURIComponent(item.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            📱 Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SpecialsTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("powders");

  return (
    <section id="specials" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-crimson font-semibold tracking-[5px] uppercase text-sm">
            Freshly Made
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-maroon mt-3">
            Our Bestsellers
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From aromatic masala powders to fresh batters and premium dry fruits
            — everything your kitchen needs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-crimson to-gold mx-auto mt-6 rounded-full" />
        </m.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2 ${
                activeTab === tab.key
                  ? "bg-maroon text-gold shadow-lg scale-105"
                  : "bg-beige text-maroon hover:bg-gold/20"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items[activeTab].map((item, index) => (
              <m.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <FlipCard item={item} />
              </m.div>
            ))}
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
