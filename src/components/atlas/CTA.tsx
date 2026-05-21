import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contato" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(1 0 0 / 0.12), transparent 70%)" }} />

      {/* Decorative triangle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <svg viewBox="0 0 400 400" className="h-[600px] w-[600px] animate-float-slow">
          <defs>
            <linearGradient id="ctaG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="oklch(0.5 0 0)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M200 60 L340 320 H60 Z" stroke="url(#ctaG)" strokeWidth="0.8" fill="none" />
          <path d="M200 100 L310 300 H90 Z" stroke="url(#ctaG)" strokeWidth="0.5" fill="none" opacity="0.5" />
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-glow" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Vagas limitadas · 2026</span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8 font-display text-5xl md:text-7xl font-light tracking-[-0.04em] leading-[0.98]"
        >
          <span className="block text-foreground/90">A próxima evolução</span>
          <span className="block text-silver">da sua marca começa aqui.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-muted-foreground text-lg max-w-xl mx-auto"
        >
          Aplicações abertas para projetos high-ticket. Resposta em até 24h úteis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-4 items-center justify-center"
        >
          <a href="mailto:contato@atlas.studio"
            className="group relative overflow-hidden rounded-full bg-white px-10 py-5 text-sm font-medium tracking-wide text-background transition-all hover:scale-[1.02]">
            <span className="relative z-10">Aplicar para um projeto</span>
            <span className="absolute inset-0 animate-shimmer" />
          </a>
          <a href="#cases"
            className="rounded-full border border-white/15 px-10 py-5 text-sm tracking-wide text-foreground hover:bg-white/5 transition-colors">
            Revisar portfólio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
