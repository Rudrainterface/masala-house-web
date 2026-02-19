"use client";

import { m } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    image: "/images/store-gallery/bakaram-store.png",
    title: "Our Bakaram Store",
    description: "Warm, vibrant space filled with aromatic spices",
    area: "Gandhi Nagar, Hyderabad",
  },
  {
    image: "/images/store-gallery/spice-shelves.png",
    title: "Fresh Spice Shelves",
    description: "Neatly packed spice powders and whole spices",
    area: "Packaged for freshness",
  },
  {
    image: "/images/store-gallery/dry-fruits.png",
    title: "Dry Fruits Collection",
    description: "Premium almonds, cashews, pistachios & more",
    area: "Best quality, best prices",
  },
  {
    image: "/images/store-gallery/handcrafted.png",
    title: "Handcrafted with Care",
    description: "Our team hand-sorts and freshly grinds every batch",
    area: "Made daily, sold fresh",
  },
  {
    image: "/images/store-gallery/red-chilli.png",
    title: "Red Chilli Selection",
    description: "Guntur, Byadgi & Kashmiri varieties available",
    area: "Farm-fresh sourcing",
  },
  {
    image: "/images/store-gallery/fresh-pastes.png",
    title: "Fresh Pastes Daily",
    description: "Ginger, garlic & ginger-garlic paste ground fresh",
    area: "No preservatives added",
  },
];

export default function StoreGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-beige to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark font-semibold tracking-[5px] uppercase text-sm">
            Inside Our Store
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-maroon mt-3">
            A Glimpse of Masala House
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Step inside our warm, fragrant store where every shelf tells a story
            of flavor and tradition.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-crimson mx-auto mt-6 rounded-full" />
        </m.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-gold/10"
            >
              {/* Image */}
              <div className="h-56 relative overflow-hidden bg-beige-dark/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/60 transition-all duration-500 flex items-center justify-center">
                  <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-heading font-bold text-maroon text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.area}</p>
              </div>
            </m.div>
          ))}
        </div>

        {/* Visit CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://maps.google.com/?q=Bakaram+Gandhi+Nagar+Hyderabad+Masala+House"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-gold px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            📍 Visit Our Store
          </a>
        </m.div>
      </div>
    </section>
  );
}
