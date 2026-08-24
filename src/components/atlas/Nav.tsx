import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { ATLAS_WHATSAPP } from "@/lib/atlas";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#instagram", label: "Instagram" },
  { href: "#diferenciais", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.06] bg-background/75 backdrop-blur-xl" : ""
      }`}
    >
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="flex items-center justify-between gap-3 py-3 md:py-4">
          <Logo className="shrink-0" />
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:scale-x-0 after:bg-foreground/60 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={ATLAS_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Atlas Studio pelo WhatsApp"
            className="shrink-0 whitespace-nowrap rounded-md bg-foreground px-3 py-2 text-[11px] md:px-4 md:text-[12px] font-medium text-background hover:bg-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Falar com a Atlas
          </a>
        </div>
      </div>
    </motion.header>
  );
}
