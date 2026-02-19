"use client";

import { m, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Stat {
  number: number;
  suffix: string;
  label: string;
  emoji: string;
}

const stats: Stat[] = [
  { number: 50, suffix: "+", label: "Spice Varieties", emoji: "🌶️" },
  { number: 500, suffix: "+", label: "Happy Families", emoji: "👨‍👩‍👧‍👦" },
  { number: 3, suffix: "+", label: "Years of Trust", emoji: "⭐" },
  { number: 1, suffix: "", label: "Store Location", emoji: "🏪" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-maroon via-maroon-dark to-maroon py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #FDB813 0, transparent 10px, transparent 20px)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <m.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="font-heading font-bold text-3xl sm:text-4xl text-gold">
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
