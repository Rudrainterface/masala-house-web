"use client";

import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Recipe {
  name: string;
  subtitle: string;
  spices: string[];
  description: string;
  image: string;
  bgGradient: string;
  cookTime: string;
  servings: string;
}

const recipes: Recipe[] = [
  {
    name: "Hyderabadi Biryani",
    subtitle: "The Crown Jewel of Hyderabad",
    spices: ["Garam Masala", "Cardamom", "Cinnamon", "Cloves", "Cumin"],
    description:
      "Layer fragrant basmati rice with marinated meat, saffron, and our signature garam masala for the authentic Hyderabadi dum biryani experience.",
    image: "/images/recipes/hyderabadi-biryani.png",
    bgGradient: "from-amber-900 via-amber-800 to-yellow-900",
    cookTime: "90 min",
    servings: "4-6",
  },
  {
    name: "South Indian Curry",
    subtitle: "Rich & Aromatic Comfort",
    spices: ["Turmeric", "Chilli", "Coriander", "Mustard", "Fenugreek"],
    description:
      "A velvety curry with our fresh turmeric and chilli powder, tempered with mustard seeds and curry leaves. Pure South Indian soul food.",
    image: "/images/recipes/south-indian-curry.png",
    bgGradient: "from-red-900 via-red-800 to-orange-900",
    cookTime: "45 min",
    servings: "4",
  },
  {
    name: "Telugu Dal Tadka",
    subtitle: "Daily Comfort, Perfected",
    spices: ["Cumin", "Mustard", "Turmeric", "Chilli", "Pepper"],
    description:
      "Silky toor dal finished with a sizzling tadka of cumin, mustard seeds, dry chillies, and curry leaves. Everyday magic.",
    image: "/images/recipes/dal-tadka.png",
    bgGradient: "from-yellow-900 via-amber-800 to-orange-900",
    cookTime: "30 min",
    servings: "4",
  },
  {
    name: "Crispy Masala Dosa",
    subtitle: "Breakfast of Champions",
    spices: ["Mustard", "Turmeric", "Ginger Garlic Paste", "Chilli"],
    description:
      "Golden, crispy dosa made with our fresh batter, filled with spiced potato masala. Served with coconut chutney and sambar.",
    image: "/images/recipes/crispy-masala-dosa.png",
    bgGradient: "from-stone-900 via-stone-800 to-amber-900",
    cookTime: "20 min",
    servings: "2-3",
  },
];

export default function RecipesCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % recipes.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + recipes.length) % recipes.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const recipe = recipes[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="recipes" className="py-20 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark font-semibold tracking-[5px] uppercase text-sm">
            Cook With Us
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-maroon mt-3">
            Featured Recipes
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover authentic recipes that showcase our fresh spices. From
            Hyderabadi biryani to crispy dosas.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-crimson mx-auto mt-6 rounded-full" />
        </m.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <m.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`bg-gradient-to-br ${recipe.bgGradient} rounded-3xl overflow-hidden shadow-2xl`}
            >
              <div className="p-8 sm:p-12 md:p-16">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Recipe image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-gold/30 shadow-xl bg-white/10 flex-shrink-0">
                      <Image
                        src={recipe.image}
                        alt={recipe.name}
                        fill
                        sizes="(max-width: 640px) 160px, 208px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Recipe details */}
                  <div className="text-center md:text-left flex-1">
                    <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
                      {recipe.subtitle}
                    </p>
                    <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
                      {recipe.name}
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      {recipe.description}
                    </p>

                    {/* Spices used */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                      {recipe.spices.map((spice) => (
                        <span
                          key={spice}
                          className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {spice}
                        </span>
                      ))}
                    </div>

                    {/* Meta info */}
                    <div className="flex gap-6 justify-center md:justify-start text-white/60 text-sm mb-6">
                      <span>⏱ {recipe.cookTime}</span>
                      <span>🍽 {recipe.servings} servings</span>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </AnimatePresence>

          {/* Navigation arrows - 48px touch target */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-maroon hover:bg-gold hover:text-white transition-all z-10 active:scale-95"
            aria-label="Previous recipe"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-maroon hover:bg-gold hover:text-white transition-all z-10 active:scale-95"
            aria-label="Next recipe"
          >
            →
          </button>

          {/* Dots indicator - 44px min touch target for mobile */}
          <div className="flex justify-center gap-1 sm:gap-3 mt-8">
            {recipes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-full transition-all duration-300 active:scale-95"
                aria-label={`Go to recipe ${index + 1}`}
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-gold w-6 sm:w-8 h-3"
                      : "bg-gray-300 hover:bg-gold/50 w-2 h-2"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
