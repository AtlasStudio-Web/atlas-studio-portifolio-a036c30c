import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contato" className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Vamos conversar</span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-7 font-display text-4xl md:text-5xl font-light tracking-[-0.03em] leading-[1.05]"
        >
          Conte sobre o seu projeto.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-muted-foreground max-w-lg mx-auto leading-relaxed"
        >
          Respondemos em até um dia útil com uma proposta inicial,
          escopo e estimativa de prazo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 items-center justify-center"
        >
          <a
            href="mailto:contato@atlas.studio"
            className="rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            Enviar e-mail
          </a>
          <a
            href="https://wa.me/5511999999999"
            className="rounded-md border border-white/10 px-6 py-3 text-sm text-foreground hover:bg-white/[0.04] transition-colors"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
