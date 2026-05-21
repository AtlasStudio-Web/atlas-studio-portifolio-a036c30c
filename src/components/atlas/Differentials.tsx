import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  ["01", "Conversa inicial", "Entendemos o seu negócio, o problema a resolver e o que é essencial para o projeto."],
  ["02", "Proposta clara", "Escopo, etapas, prazo e valor — tudo descrito antes de começarmos qualquer trabalho."],
  ["03", "Design & desenvolvimento", "Trabalhamos com aprovações por etapa, garantindo que o resultado faça sentido para você."],
  ["04", "Entrega e ajustes", "Publicação, treinamento básico e período de ajustes incluído na entrega."],
  ["05", "Acompanhamento", "Suporte mensal opcional para evoluções, manutenção e novas demandas."],
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Processo"
          title="Como trabalhamos."
          description="Um fluxo simples e transparente do primeiro contato até o pós-entrega."
        />

        <div className="mt-16 border-t border-white/[0.06]">
          {steps.map(([num, title, desc], i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-6 items-start py-7 border-b border-white/[0.06]"
            >
              <div className="col-span-2 md:col-span-1 text-[11px] tracking-[0.3em] text-muted-foreground pt-1">{num}</div>
              <h3 className="col-span-10 md:col-span-4 text-lg md:text-xl font-medium text-foreground">{title}</h3>
              <p className="col-span-12 md:col-span-7 text-muted-foreground leading-relaxed text-[15px]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
