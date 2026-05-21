import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Cpu, Sparkles, Target, Zap } from "lucide-react";

const pillars = [
  { icon: Cpu, title: "Inteligência aplicada", desc: "IA integrada a processos reais que escalam decisões e operações." },
  { icon: Zap, title: "Automação total", desc: "Fluxos completos que reduzem custo operacional e aceleram resultado." },
  { icon: Target, title: "Posicionamento", desc: "Marcas construídas para liderar categoria — não apenas existir nela." },
  { icon: Sparkles, title: "Performance", desc: "Crescimento mensurável, estruturado em dados e iterado em ciclos curtos." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="A agência"
          title="Operamos no cruzamento entre tecnologia, estratégia e estética."
          description="ATLAS é um estúdio digital de alto padrão. Trabalhamos com marcas que entendem que crescimento não acontece por acaso — ele é projetado, construído e otimizado com precisão."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-background p-8 hover:bg-surface transition-colors duration-500"
            >
              <p.icon className="h-6 w-6 text-silver opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.2} />
              <h3 className="mt-6 text-lg font-display font-medium text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
