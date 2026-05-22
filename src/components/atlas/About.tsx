import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    title: "Design com intenção",
    desc: "Cada decisão visual existe para reforçar posicionamento, gerar autoridade e converter.",
  },
  {
    title: "Tecnologia + IA",
    desc: "Automações inteligentes que economizam horas de trabalho manual e qualificam leads no piloto automático.",
  },
  {
    title: "Estratégia de marca",
    desc: "Não entregamos só arquivos — entregamos uma direção clara para sua marca crescer no digital.",
  },
  {
    title: "Trabalho próximo",
    desc: "Sem intermediários. Você fala direto com quem está pensando e executando o seu projeto.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sobre"
          title="Um estúdio digital pensado para marcas que querem crescer."
          description="A Atlas Studio nasceu para fazer o que a maioria das agências não faz: unir design premium, automação com IA e estratégia real — em projetos que entregam resultado, não só estética."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-background p-8 hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="mt-4 text-base font-medium text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
