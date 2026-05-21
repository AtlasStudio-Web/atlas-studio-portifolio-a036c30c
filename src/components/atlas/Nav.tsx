import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#cases", label: "Cases" },
  { href: "#diferenciais", label: "Diferenciais" },
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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass" : ""
        }`}>
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contato"
            className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[12px] tracking-[0.18em] uppercase text-foreground transition-all hover:bg-white hover:text-background">
            Falar agora
          </a>
        </div>
      </div>
    </motion.header>
  );
}
