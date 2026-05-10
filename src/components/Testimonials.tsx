"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Two months in, my postnatal hair fall has completely calmed. This jar lives on my bedside table now — it's my Sunday ritual.",
    author: "Amelia",
    location: "Hamilton NSW",
  },
  {
    quote:
      "My scalp used to feel angry and itchy by midweek. One jar in and the calm is unreal. The smell alone is therapy.",
    author: "Priya R.",
    location: "Newcastle",
  },
  {
    quote:
      "I bought a jar for my mum and now my whole family is on Fletcher. Thicker, shinier, healthier — the real deal.",
    author: "Jenna",
    location: "Mayfield",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--color-cream-dark)] overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.06] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M50 5 C 30 30, 30 70, 50 90 C 70 70, 70 30, 50 5 Z" stroke="#5A6850" strokeWidth="0.8" />
          <path d="M50 5 L 50 90" stroke="#5A6850" strokeWidth="0.8" />
          <path d="M50 25 L 35 35 M50 35 L 33 45 M50 45 L 32 55 M50 55 L 33 65 M50 65 L 36 75" stroke="#5A6850" strokeWidth="0.8" />
          <path d="M50 25 L 65 35 M50 35 L 67 45 M50 45 L 68 55 M50 55 L 67 65 M50 65 L 64 75" stroke="#5A6850" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-4">
            Words from our community
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-6 leading-tight">
            Loved by hands{" "}
            <span className="italic text-[#B89968]">like yours</span>
          </h2>
          <div className="w-16 h-px bg-[#B89968] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative bg-[var(--color-cream)] rounded-2xl p-7 md:p-8 shadow-sm border-l-4 border-[#C26B4F] flex flex-col"
            >
              <span className="absolute -top-3 left-7 text-6xl font-serif text-[#C26B4F]/20 leading-none select-none" aria-hidden="true">
                &ldquo;
              </span>
              <p className="font-serif italic text-base md:text-lg text-[var(--color-foreground)] leading-relaxed mb-6 mt-2 flex-1">
                {t.quote}
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#B89968]" />
                <div>
                  <span className="block text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[var(--color-foreground)]">
                    {t.author}
                  </span>
                  <span className="block text-xs font-sans text-[var(--color-sage-dark)] tracking-wide">
                    {t.location}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
