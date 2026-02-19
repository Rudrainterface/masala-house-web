"use client";

import { m } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Unlock the Magic of Flavors in Your Kitchen!";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let index = 0;
    // Start typewriter a bit faster
    intervalRef.current = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 45);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - pure CSS, instant render */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #800020 0%, #4a0010 30%, #2d0008 50%, #800020 70%, #4a0010 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 25% 25%, #FDB813 0, transparent 50px), repeating-radial-gradient(circle at 75% 75%, #DC143C 0, transparent 50px)",
          }}
        />
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-crimson/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Floating decorations - CSS only for GPU perf */}
      <div
        className="absolute top-16 right-16 text-6xl opacity-20"
        style={{ animation: "spin 20s linear infinite" }}
      >
        🌶️
      </div>
      <div
        className="absolute bottom-24 left-16 text-5xl opacity-15"
        style={{ animation: "spin 25s linear infinite reverse" }}
      >
        🫚
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo - faster entrance */}
        <m.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-block relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-16 border-t-4 border-l-4 border-r-4 border-gold rounded-t-full opacity-60" />
            <div className="bg-gradient-to-b from-gold via-gold-dark to-gold rounded-2xl px-8 py-4 shadow-2xl inline-block">
              <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-maroon tracking-wider">
                MASALA HOUSE
              </h2>
              <div className="w-3/4 h-1 bg-crimson mx-auto my-2 rounded-full" />
              <p className="text-maroon-dark font-heading italic text-lg sm:text-xl tracking-[4px]">
                The Magic of Flavour
              </p>
            </div>
          </div>
        </m.div>

        {/* Typewriter heading - faster reveal */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="mb-6 max-w-full min-w-0 px-1"
        >
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl text-white leading-tight">
            <span className="inline-block overflow-hidden border-r-4 border-gold animate-blink sm:whitespace-nowrap">
              {typedText}
            </span>
          </h1>
        </m.div>

        {/* Subtitle - much earlier */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Fresh whole spices, powders, garlic pastes, batters, dry fruits from{" "}
          <span className="text-gold font-semibold">
            Bakaram, Gandhi Nagar, Hyderabad
          </span>
          .{" "}
          <span className="text-green-400 font-semibold">
            Free local delivery!
          </span>
        </m.p>

        {/* CTA Buttons - appear much sooner */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <m.a
            href="#products"
            className="btn-gold-gradient text-maroon font-bold text-lg px-10 py-4 rounded-full shadow-2xl animate-pulse-glow inline-flex items-center gap-2"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🌶️</span> Shop Fresh Spices
          </m.a>
          <m.a
            href="#specials"
            className="bg-crimson hover:bg-crimson-dark text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl inline-flex items-center gap-2 transition-transform duration-200"
            whileHover={{
              scale: 1.05,
              x: [0, -3, 3, -3, 3, 0],
              transition: { x: { duration: 0.3 } },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🥣</span> Order Batters Now
          </m.a>
        </m.div>

        {/* Trust badges - appear with CTAs */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-white/60 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-gold text-lg">✓</span> 100% Fresh Ground
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold text-lg">✓</span> No Preservatives
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold text-lg">✓</span> Same Day Delivery
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold text-lg">✓</span> Family Recipes
          </div>
        </m.div>
      </div>

      {/* Scroll indicator - CSS animation only */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "float 1.5s ease-in-out infinite" }}
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
