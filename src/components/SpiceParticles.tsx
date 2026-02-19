"use client";

import { useEffect, useState } from "react";

const spiceEmojis = ["🌶️", "⭐", "✨", "🔥", "🌿", "🍂"];

interface Particle {
  id: number;
  emoji: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function SpiceParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Delay particle generation to not block first paint
    const raf = requestAnimationFrame(() => {
      const generated: Particle[] = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        emoji: spiceEmojis[i % spiceEmojis.length],
        left: (i / 15) * 100 + Math.random() * 6,
        size: 16 + Math.random() * 12,
        duration: 2.5 + Math.random() * 2,
        delay: Math.random() * 1.2,
      }));
      setParticles(generated);
    });

    const timer = setTimeout(() => setShow(false), 4500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="spice-particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            ["--duration" as string]: `${p.duration}s`,
            ["--delay" as string]: `${p.delay}s`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
