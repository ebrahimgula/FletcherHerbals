"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "61408725942";
const DISPLAY_NUMBER = "+61 408 725 942";
const DEFAULT_MESSAGE =
  "Hi Fletcher Herbals! I'd love to place an order for your golden hair oil 🌿";

export default function OrderSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <section
      id="order"
      className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#25D366]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#C26B4F]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#C26B4F] mb-4">
            Place Your Order
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] mb-6 leading-tight">
            Begin your{" "}
            <span className="italic text-[#B89968]">ritual</span>
          </h2>
          <div className="w-16 h-px bg-[#B89968] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[var(--color-sage-dark)] font-serif italic max-w-xl mx-auto leading-relaxed">
            Hand-poured to order. Message us on WhatsApp
            <br className="hidden md:block" />
            and we&apos;ll prepare your jar with care.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[var(--color-sage-dark)] to-[#3E4A38] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="leaves"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M40 10 C 25 25, 25 55, 40 70 C 55 55, 55 25, 40 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leaves)" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Price & details */}
              <div className="text-[var(--color-cream)]">
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-cream-dark)]/80 mb-3">
                  One Jar
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-6xl md:text-7xl text-[#B89968] leading-none">
                    $28
                  </span>
                  <span className="font-serif italic text-base md:text-lg text-[var(--color-cream-dark)]">
                    AUD
                  </span>
                </div>
                <p className="font-serif italic text-base md:text-lg text-[var(--color-cream-dark)] mb-8 leading-relaxed">
                  Hand-poured to order, with love.
                  <br />
                  Lasts 6–8 weeks.
                </p>

                {/* Quick info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-[var(--color-cream-dark)]/90">
                    <Clock className="w-4 h-4 flex-shrink-0 text-[#B89968]" />
                    <span>Made fresh on order</span>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--color-cream-dark)]/90">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-[#B89968]" />
                    <span>Newcastle, NSW · Australia-wide shipping</span>
                  </div>
                </div>
              </div>

              {/* Right: WhatsApp CTA */}
              <div className="flex flex-col gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6" strokeWidth={2} />
                  <span className="text-base md:text-lg tracking-wide">
                    Order on WhatsApp
                  </span>
                </a>

                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="group flex items-center justify-center gap-3 bg-transparent border border-[var(--color-cream)]/30 hover:border-[var(--color-cream)]/60 hover:bg-[var(--color-cream)]/5 text-[var(--color-cream)] font-medium py-4 px-8 rounded-2xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5" strokeWidth={1.8} />
                  <span className="text-sm md:text-base tracking-wide">
                    {DISPLAY_NUMBER}
                  </span>
                </a>

                <p className="text-center text-xs text-[var(--color-cream-dark)]/70 font-serif italic mt-2">
                  We typically reply within an hour
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
