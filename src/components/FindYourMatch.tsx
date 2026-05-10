"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MATCHES = [
  {
    concern: "Growth & Length",
    ingredients: ["Rosemary", "Castor Oil", "Curry Leaf"],
    tip: "Focus massage on the scalp — circular motions for 5–10 minutes stimulate the follicle and boost circulation.",
    arrow: "These three do the heavy lifting.",
  },
  {
    concern: "Dandruff & Flakes",
    ingredients: ["Oregano", "Lavender", "Peppermint"],
    tip: "Apply twice a week and let it sit overnight for best results against persistent flaking.",
    arrow: "Lean on these three for a clear, calm scalp.",
  },
  {
    concern: "Shine & Softness",
    ingredients: ["Hibiscus", "Vitamin E", "Coconut Oil"],
    tip: "Work through mid-lengths and ends as well as the scalp for all-over lustre.",
    arrow: "These bring the glow.",
  },
  {
    concern: "Breakage & Thinning",
    ingredients: ["Black Seed", "Castor Oil", "Vitamin E"],
    tip: "Use consistently twice a week. Be gentle — avoid rough towel-drying after washing.",
    arrow: "These rebuild strength at the root.",
  },
  {
    concern: "Itchy Scalp",
    ingredients: ["Aloe Vera", "Lavender", "Peppermint"],
    tip: "The cooling effect of Peppermint gives immediate relief. Leave on for at least an hour.",
    arrow: "These calm and cool.",
  },
  {
    concern: "Postnatal & Stress Shedding",
    ingredients: ["Full Blend"],
    tip: "Gentle daily scalp massage, applied twice a week. Consistency matters more than quantity — be patient with yourself.",
    arrow: "The full blend works together — gentle daily massage, twice a week.",
  },
];

export default function FindYourMatch() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? MATCHES[selected] : null;

  return (
    <section
      id="find-your-match"
      className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden"
    >
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C26B4F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-4">
            A little guide
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-6 leading-tight">
            Find your <span className="italic text-[#B89968]">match</span>
          </h2>
          <div className="w-16 h-px bg-[#B89968] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[var(--color-sage-dark)] font-serif italic max-w-xl mx-auto leading-relaxed">
            One jar, twelve herbs, infinite results — select what your hair is
            asking for.
          </p>
        </motion.div>

        {/* Concern Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {MATCHES.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(selected === idx ? null : idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                selected === idx
                  ? "bg-[#C26B4F] text-[var(--color-cream)] shadow-md scale-105"
                  : "bg-transparent text-[var(--color-foreground)] border border-[#C26B4F]/40 hover:border-[#C26B4F] hover:text-[#C26B4F]"
              }`}
            >
              {m.concern}
            </button>
          ))}
        </motion.div>

        {/* Result Panel */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto bg-gradient-to-br from-[var(--color-sage-dark)] to-[#3E4A38] rounded-2xl p-8 md:p-10 text-[var(--color-cream)] shadow-xl"
            >
              <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-cream)]/60 mb-3">
                For {active.concern}
              </p>
              <div className="flex items-start gap-3 mb-5">
                <span className="text-[#B89968] font-serif italic text-2xl leading-none mt-0.5">→</span>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {active.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-3 py-1 rounded-full bg-[var(--color-cream)]/15 border border-[var(--color-cream)]/20 text-sm font-serif text-[var(--color-cream)]"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                  <p className="font-serif italic text-[var(--color-cream)]/80 text-base">
                    {active.arrow}
                  </p>
                </div>
              </div>
              <div className="border-t border-[var(--color-cream)]/15 pt-5">
                <p className="text-xs font-sans font-semibold tracking-[0.28em] uppercase text-[#B89968] mb-2">
                  Ritual tip
                </p>
                <p className="font-serif italic text-[var(--color-cream)]/90 text-base leading-relaxed">
                  {active.tip}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 md:mt-20 bg-[var(--color-sage-dark)] text-[var(--color-cream)] rounded-2xl px-8 py-10 md:px-12 md:py-12 text-center shadow-lg max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-cream)]/70 font-medium mb-4">
            Our Promise
          </p>
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed">
            No silicones. No parabens. No sulphates.
            <br />
            Just herbs, oils &amp; a little time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
