"use client";

import { m } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  name: string;
  area: string;
  rating: number;
  text: string;
  avatar: string;
  dish: string;
}

const testimonials: Testimonial[] = [
  {
    name: "D.V. RAMANA",
    area: "Hyderabad",
    rating: 5,
    text: "Biryani masala, very good product, aromatic spices.",
    avatar: "👨",
    dish: "Biryani Masala fan",
  },
  {
    name: "Biswajeet M",
    area: "Hyderabad",
    rating: 5,
    text: "Very tasty Biryani Masala and Sambar Masala with home made authenticity. Will reorder as we really liked it!",
    avatar: "👨",
    dish: "Biryani & Sambar lover",
  },
  {
    name: "Keerthi teja",
    area: "Hyderabad",
    rating: 5,
    text: "They prepared them with fresh ingredients and the Biryani Masala powder smelled amazing!",
    avatar: "👩",
    dish: "Fresh masala fan",
  },
  {
    name: "Chandan Singh",
    area: "Hyderabad",
    rating: 4,
    text: "Good place to get home made produce. I have been purchasing various products from them since June 2022.",
    avatar: "👨",
    dish: "Regular customer since 2022",
  },
  {
    name: "Shanti sree",
    area: "Hyderabad",
    rating: 5,
    text: "Good quality ginger garlic paste, mirchi powder, dosa batter, haldi & sambar masala — all ground fresh. Value for money, paisa vasool. If you want home made & fresh masala, definitely try Masala House. Thank you!",
    avatar: "👩",
    dish: "Paisa vasool — loved it",
  },
  {
    name: "Kiran Talla",
    area: "Hyderabad",
    rating: 5,
    text: "Excellent masalas gives rich taste to food, maintaining top quality products.",
    avatar: "👩",
    dish: "Top quality fan",
  },
  {
    name: "Saqlain nizami",
    area: "Hyderabad",
    rating: 5,
    text: "All the spices are unadulterated and customized for our needs. Very professional.",
    avatar: "👨",
    dish: "Customized & professional",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? "text-gold" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-maroon via-maroon-dark to-maroon relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🌶️</div>
        <div className="absolute bottom-10 right-10 text-9xl">⭐</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-5">
          ❝
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold tracking-[5px] uppercase text-sm">
            Happy Customers
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3">
            What Hyderabad Says
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Trusted by hundreds of families across Hyderabad for fresh, quality
            spices every day.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-crimson mx-auto mt-6 rounded-full" />
        </m.div>

        {/* Testimonials slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[current, current + 1].map((idx) => {
            const t = testimonials[idx % testimonials.length];
            return (
              <m.div
                key={`${t.name}-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx - current) * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-3xl">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white">
                      {t.name}
                    </h4>
                    <p className="text-white/50 text-sm">{t.area}</p>
                    <p className="text-gold text-xs">{t.dish}</p>
                  </div>
                </div>
                <StarRating rating={t.rating} />
                <p className="text-white/80 mt-4 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </m.div>
            );
          })}
        </div>

        {/* Dots - 44px min touch target for mobile */}
        <div className="flex justify-center gap-1 sm:gap-3 mt-10 flex-wrap">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-full transition-all duration-300 active:scale-95"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  index === current ? "bg-gold w-6 sm:w-8 h-3" : "bg-white/30 hover:bg-gold/50 w-2 h-2"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
