import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 40%, oklch(1 0 0 / 0.08), transparent 70%)" }} />
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Floating particles */}
      <Particles />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-glow" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
            Inteligência · Automação · Performance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-light leading-[0.95] tracking-[-0.04em]"
        >
          <span className="block text-silver">Arquitetura digital</span>
          <span className="block text-foreground/90">para marcas de elite.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Construímos sistemas inteligentes de crescimento — combinando IA, design cinematográfico
          e automação para transformar marcas em referências de mercado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contato"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-background transition-all hover:scale-[1.02]">
            <span className="relative z-10">Iniciar projeto</span>
            <span className="absolute inset-0 animate-shimmer" />
          </a>
          <a href="#cases"
            className="rounded-full border border-white/15 px-8 py-4 text-sm tracking-wide text-foreground hover:bg-white/5 transition-colors">
            Ver portfólio →
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden glass"
        >
          {[
            ["+127", "Projetos entregues"],
            ["8.4x", "ROI médio"],
            ["48h", "Time-to-launch"],
            ["100%", "Foco em performance"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background/40 px-6 py-6">
              <div className="text-2xl md:text-3xl font-display font-light text-silver">{n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

function Particles() {
  const dots = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
