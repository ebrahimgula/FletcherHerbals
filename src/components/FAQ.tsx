"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How long does a jar last?",
    a: "One jar lasts most people 6–8 weeks, depending on hair length and how often you apply. A little goes a long way.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most customers notice a difference within 2–4 weeks of consistent use. For deeper concerns like hair fall or thinning, give it 6–8 weeks — herbs work gently but powerfully over time.",
  },
  {
    q: "Is it suitable for all hair types?",
    a: "Yes — our blend works for all hair types and textures. Those with thicker or coarser hair may want to use a little more; fine hair should apply sparingly to avoid weighing it down.",
  },
  {
    q: "Do you ship Australia-wide?",
    a: "Yes! We ship Australia-wide from Newcastle, NSW. Once your jar is poured and ready, it typically takes 3–5 business days to arrive.",
  },
  {
    q: "Is it vegan and cruelty-free?",
    a: "100%. No animal products, no animal testing. Just plants, oils, and intention.",
  },
  {
    q: "I have a sensitive scalp — is this safe for me?",
    a: "We recommend doing a patch test on your inner wrist 24 hours before first use. If you have known allergies to any of our listed ingredients, please review the full ingredient list or reach out to us before purchasing.",
  },
  {
    q: "How should I store it?",
    a: "Store in a cool, dry place away from direct sunlight. Shelf life is 12 months from the date of pour.",
  },
  {
    q: "Do you offer gift sets or bundles?",
    a: "We're working on it! Message us on WhatsApp and we'll let you know what we can put together for you.",
  },
  {
    q: "What is your return policy?",
    a: "As our oil is hand-poured to order, we don't accept returns for change of mind. However, if there is ever an issue with your jar, please contact us directly and we will make it right.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#B89968]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-4">
            Questions & Answers
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-6 leading-tight">
            Good to know
          </h2>
          <div className="w-16 h-px bg-[#B89968] mx-auto" />
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="border border-[var(--color-sage-dark)]/15 rounded-xl overflow-hidden bg-[var(--color-cream-dark)]/50">
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[var(--color-cream-dark)] transition-colors duration-200"
                  aria-expanded={open === idx}
                >
                  <span className="font-serif text-base md:text-lg text-[var(--color-foreground)] leading-snug">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#C26B4F]/40 flex items-center justify-center text-[#C26B4F]">
                    {open === idx ? (
                      <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm md:text-base text-[var(--color-sage-dark)] leading-relaxed font-sans border-t border-[var(--color-sage-dark)]/10 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-sm text-[var(--color-sage-dark)] mt-12 font-serif italic"
        >
          Still have questions?{" "}
          <a
            href="https://wa.me/61408725942"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C26B4F] underline underline-offset-4 hover:text-[#A0533A] transition-colors"
          >
            Message us on WhatsApp
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
