import { motion } from "framer-motion";
import { ATLAS_INSTAGRAM } from "@/lib/atlas";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="relative py-32 md:py-40 border-t border-white/[0.06] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(1 0 0 / 0.18), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
          <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            Pronto para começar
          </span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-7 font-display text-4xl md:text-6xl font-light tracking-[-0.035em] leading-[1.02]"
        >
          Vamos elevar o nível da{" "}
          <span className="text-silver italic font-extralight">sua marca</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-muted-foreground max-w-lg mx-auto leading-relaxed text-[15px]"
        >
          Conte sobre o seu projeto pelo Instagram. Respondemos rapidamente
          com uma proposta inicial e próximos passos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 items-center justify-center"
        >
          <a
            href={ATLAS_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-7 py-4 text-sm font-medium text-background hover:bg-foreground/90 transition-all hover:gap-3"
          >
            Solicitar projeto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={ATLAS_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/10 px-7 py-4 text-sm text-foreground hover:bg-white/[0.04] transition-colors"
          >
            Falar conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
