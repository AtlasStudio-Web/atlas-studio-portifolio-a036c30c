import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const rows = [
  ["01", "Tecnologia proprietária", "Stack próprio de IA e automação aplicado em cada projeto."],
  ["02", "Estratégia antes de execução", "Diagnóstico profundo e plano de crescimento antes de qualquer pixel."],
  ["03", "Time sênior dedicado", "Squad pequena, especialista, com acesso direto à liderança."],
  ["04", "Escalabilidade nativa", "Arquitetamos para crescer 10x — não para entregar e sumir."],
  ["05", "Performance como obsessão", "Métricas reais, ciclos curtos, otimização contínua."],
  ["06", "Padrão visual de elite", "Estética cinematográfica, atemporal e reconhecidamente premium."],
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, oklch(1 0 0 / 0.06), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Por que marcas de elite escolhem a ATLAS."
        />

        <div className="mt-20 border-t border-white/[0.08]">
          {rows.map(([num, title, desc], i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group grid grid-cols-12 gap-6 items-start py-8 border-b border-white/[0.08] hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="col-span-2 md:col-span-1 text-[11px] tracking-[0.3em] text-muted-foreground pt-1">{num}</div>
              <h3 className="col-span-10 md:col-span-4 font-display text-xl md:text-2xl text-foreground group-hover:text-silver transition-colors">{title}</h3>
              <p className="col-span-12 md:col-span-7 text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
