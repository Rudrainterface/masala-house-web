"use client";

import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpiceParticles from "@/components/SpiceParticles";
import SectionDivider from "@/components/SectionDivider";

// Minimal placeholder to reserve space and avoid layout shift while lazy chunks load
const sectionPlaceholder = <div className="min-h-[80px]" aria-hidden="true" />;

// Lazy load everything below the fold — only loads when user scrolls near
const StatsBar = dynamic(() => import("@/components/StatsBar"), { ssr: false, loading: () => sectionPlaceholder });
const ProductsGrid = dynamic(() => import("@/components/ProductsGrid"), { ssr: false, loading: () => sectionPlaceholder });
const StoreGallery = dynamic(() => import("@/components/StoreGallery"), { ssr: false, loading: () => sectionPlaceholder });
const SpecialsTabs = dynamic(() => import("@/components/SpecialsTabs"), { ssr: false, loading: () => sectionPlaceholder });
const RecipesCarousel = dynamic(() => import("@/components/RecipesCarousel"), { ssr: false, loading: () => sectionPlaceholder });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false, loading: () => sectionPlaceholder });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false, loading: () => sectionPlaceholder });

export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <main className="min-h-screen">
        <SpiceParticles />
        <Navbar />
        <Hero />
        <SectionDivider />
        <StatsBar />
        <SectionDivider />
        <ProductsGrid />
        <SectionDivider />
        <StoreGallery />
        <SectionDivider />
        <SpecialsTabs />
        <SectionDivider />
        <RecipesCarousel />
        <SectionDivider />
        <Testimonials />
        <Footer />
      </main>
    </LazyMotion>
  );
}
