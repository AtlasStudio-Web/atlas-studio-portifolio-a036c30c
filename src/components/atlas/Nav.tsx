import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ATLAS_WHATSAPP } from "@/lib/atlas";
import { MagneticLink } from "@/components/ui/magnetic-link";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 240 && y > last.current);
      last.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${solid ? "border-b border-white/[0.07] bg-background/80 backdrop-blur-xl" : ""}`}
    >
      <div
        className="mx-auto max-w-[1500px] px-6 md:px-10"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="flex items-center justify-between py-4 md:py-5">
          <a href="#topo" className="shrink-0" aria-label="Atlas Studio — início">
            <Logo />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <MagneticLink
                key={l.href}
                href={l.href}
                strength={0.15}
                className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
              >
                {l.label}
              </MagneticLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={ATLAS_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Atlas Studio pelo WhatsApp"
              className="hidden shrink-0 border border-foreground/25 px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 sm:inline-flex"
            >
              Falar com a Atlas
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/12 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-0 -z-10 bg-background pt-[calc(var(--header-height)+2rem)] md:hidden">
          <nav className="flex flex-col px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.08] py-6 font-display text-3xl font-light tracking-[-0.02em] text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={ATLAS_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex justify-center bg-foreground px-6 py-4 text-[12px] uppercase tracking-[0.2em] text-background"
            >
              Falar com a Atlas
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
