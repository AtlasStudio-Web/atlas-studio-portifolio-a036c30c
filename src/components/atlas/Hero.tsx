import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            Agência digital · Sites, branding e automação
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-[clamp(2.5rem,6.5vw,5rem)] font-light leading-[1] tracking-[-0.035em] max-w-4xl"
        >
          Presença digital bem feita,<br />
          <span className="text-muted-foreground">para negócios que querem crescer com consistência.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-xl text-base text-muted-foreground leading-relaxed"
        >
          Somos um estúdio focado em sites, identidade visual e automações sob medida —
          ajudando pequenas e médias empresas a se comunicarem com mais clareza e profissionalismo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#contato"
            className="rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
            Solicitar orçamento
          </a>
          <a href="#cases"
            className="rounded-md border border-white/10 px-6 py-3 text-sm text-foreground hover:bg-white/[0.04] transition-colors">
            Ver trabalhos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
        >
          {[
            ["Sites institucionais", "Páginas claras e responsivas"],
            ["Landing pages", "Otimizadas para conversão"],
            ["Identidade visual", "Branding consistente"],
            ["Automações", "Fluxos e integrações"],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="text-sm font-medium text-foreground">{t}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{d}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
