import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";
import { ATLAS_INSTAGRAM } from "@/lib/atlas";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="float-cta"
          href={ATLAS_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-foreground pl-4 pr-5 py-3 text-sm font-medium text-background shadow-[0_10px_40px_-10px_oklch(1_0_0_/_0.35)] hover:gap-3 transition-all"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-background/10">
            <Instagram className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
          Começar agora
        </motion.a>
      )}
    </AnimatePresence>
  );
}
