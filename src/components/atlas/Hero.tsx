import { motion } from "framer-motion";
import { ATLAS_INSTAGRAM } from "@/lib/atlas";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-32 pb-24">
      {/* layered ambient background */}
      <div className="absolute inset-0 bg-grid opacity-[0.10]" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[640px] w-[1100px] rounded-full blur-3xl opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(closest-side, oklch(1 0 0 / 0.35), transparent 70%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-foreground/70 animate-ping opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            Estúdio digital · Design, IA & crescimento
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-[clamp(2.7rem,7vw,5.6rem)] font-light leading-[0.98] tracking-[-0.04em] max-w-5xl"
        >
          Transformamos negócios comuns em{" "}
          <span className="text-silver italic font-extralight">marcas digitais modernas</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-xl text-[17px] text-muted-foreground leading-relaxed"
        >
          Design, automação com IA e estratégia para empresas que querem crescer
          de verdade — com presença digital sólida, profissional e que converte.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={ATLAS_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:gap-3"
          >
            Iniciar um projeto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#cases"
            className="rounded-md border border-white/10 px-6 py-3.5 text-sm text-foreground hover:bg-white/[0.04] transition-colors"
          >
            Ver trabalhos
          </a>
        </motion.div>

        {/* stats / capabilities band */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06] max-w-4xl"
        >
          {[
            ["+40", "Projetos entregues"],
            ["3 anos", "Atuando no mercado"],
            ["12+", "Nichos atendidos"],
            ["98%", "Clientes recorrentes"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background px-6 py-7">
              <div className="font-display text-2xl md:text-[28px] font-light tracking-tight text-foreground">{n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">
        Role para explorar
      </div>
    </section>
  );
}
