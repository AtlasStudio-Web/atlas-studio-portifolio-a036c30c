import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  { title: "Trabalho próximo", desc: "Atendimento direto, sem intermediários. Você conversa com quem está executando o projeto." },
  { title: "Entrega previsível", desc: "Escopo, prazo e valor definidos antes do início. Sem surpresas no meio do caminho." },
  { title: "Foco no negócio", desc: "Cada decisão de design e tecnologia é tomada pensando no resultado prático para o cliente." },
  { title: "Suporte contínuo", desc: "Acompanhamento após a entrega para ajustes, manutenção e novas evoluções." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sobre"
          title="Uma agência pequena, focada em fazer bem feito."
          description="Atuamos com sites, identidade visual e automações para negócios locais, profissionais liberais e pequenas empresas que buscam uma presença digital mais organizada e profissional."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-background p-7"
            >
              <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-4 text-base font-medium text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
