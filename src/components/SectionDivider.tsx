"use client";

import { m } from "framer-motion";

export default function SectionDivider() {
  return (
    <m.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="section-divider"
    />
  );
}
