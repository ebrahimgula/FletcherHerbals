"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const INGREDIENTS = [
  {
    name: "Rosemary",
    latin: "Rosmarinus officinalis",
    benefit:
      "Stimulates the follicle, awakens circulation and encourages strong, healthy growth.",
    category: "growth",
  },
  {
    name: "Lavender",
    latin: "Lavandula",
    benefit:
      "Calms an irritated scalp, soothes itchiness and gently lifts dandruff.",
    category: "calm",
  },
  {
    name: "Hibiscus",
    latin: "Hibiscus rosa-sinensis",
    benefit:
      "Strengthens follicles, deepens natural shine and softens every strand.",
    category: "shine",
  },
  {
    name: "Curry Leaf",
    latin: "Murraya koenigii",
    benefit:
      "A grandma classic — nourishes the roots and prevents premature greying.",
    category: "growth",
  },
  {
    name: "Aloe Vera",
    latin: "Aloe barbadensis",
    benefit:
      "Vitamin-rich hydration that calms inflammation and brings life back to dry hair.",
    category: "calm",
  },
  {
    name: "Oregano",
    latin: "Origanum vulgare",
    benefit:
      "Naturally antibacterial — fights fungal flakes and supports a clear, healthy scalp.",
    category: "calm",
  },
  {
    name: "Peppermint",
    latin: "Mentha piperita",
    benefit:
      "A cool tingle that wakes the follicle and brings clarity to mind & scalp.",
    category: "growth",
  },
  {
    name: "Castor Oil",
    latin: "Ricinus communis",
    benefit:
      "Rich in ricinoleic acid — the heavyweight for thickness, length and edges.",
    category: "growth",
  },
  {
    name: "Black Seed",
    latin: "Nigella sativa",
    benefit:
      "A nutrient powerhouse — strengthens strands and reduces breakage at the root.",
    category: "strength",
  },
  {
    name: "Vitamin E",
    latin: "Tocopherol",
    benefit:
      "Antioxidant protection — shields hair from damage and locks in shine.",
    category: "shine",
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "growth", label: "Growth" },
  { id: "calm", label: "Calming" },
  { id: "shine", label: "Shine" },
  { id: "strength", label: "Strength" },
];

export default function BotanicalLibrary() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? INGREDIENTS
      : INGREDIENTS.filter((herb) => herb.category === activeFilter);

  return (
    <section
      id="botanical"
      className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-4">
            What&apos;s Inside
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-6 leading-tight">
            Crafted from the earth
          </h2>
          <div className="w-16 h-px bg-[#B89968] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[var(--color-sage-dark)] font-serif italic max-w-xl mx-auto leading-relaxed">
            A small-batch blend of ten time-honoured herbs &amp; oils,
            <br className="hidden md:block" />
            grown and gathered with intention.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 md:mb-16">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-[var(--color-sage-dark)] text-[var(--color-cream)] shadow-md"
                  : "bg-transparent text-[var(--color-sage-dark)] border border-[var(--color-sage-light)]/60 hover:border-[var(--color-sage-dark)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10 max-w-4xl mx-auto">
          {filtered.map((herb, idx) => (
            <motion.article
              key={`${herb.name}-${activeFilter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group flex gap-5 pb-8 border-b border-[var(--color-sage-light)]/40 last:border-b-0"
            >
              {/* Number ornament */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-[#B89968]/40 flex items-center justify-center font-serif text-lg text-[#C26B4F] group-hover:bg-[#C26B4F] group-hover:text-[var(--color-cream)] group-hover:border-[#C26B4F] transition-all duration-300">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline flex-wrap gap-x-3 mb-2">
                  <h3 className="text-2xl md:text-[26px] font-serif text-[var(--color-foreground)] leading-none">
                    {herb.name}
                  </h3>
                  <span className="font-serif italic text-xs md:text-sm text-[var(--color-sage)]">
                    {herb.latin}
                  </span>
                </div>
                <p className="text-sm md:text-[15px] text-[var(--color-sage-dark)] leading-relaxed font-sans">
                  {herb.benefit}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-24 max-w-2xl mx-auto"
        >
          <div className="bg-[var(--color-sage-dark)] text-[var(--color-cream)] rounded-2xl px-8 py-10 md:px-12 md:py-12 text-center shadow-lg">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-cream-dark)]/80 font-medium mb-4">
              Our Promise
            </p>
            <p className="font-serif italic text-xl md:text-2xl leading-relaxed">
              No silicones. No parabens. No sulphates.
              <br />
              Just herbs, oils &amp; a little time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
