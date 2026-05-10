"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "61408725942";
const DEFAULT_MESSAGE =
  "Hi Fletcher Herbals! I'd love to place an order for your golden hair oil 🌿";

export default function MobileOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const onScroll = () => {
      if (window.scrollY > 200) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--color-cream)]/95 backdrop-blur-md border-t border-[var(--color-sage-dark)]/10 px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1CA54F] text-white font-medium py-3.5 px-6 rounded-xl shadow-lg transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
            <span className="text-base tracking-wide">Order on WhatsApp · $28</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
