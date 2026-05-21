import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const data = [
  {
    initials: "MR",
    name: "Marcelo Ribeiro",
    role: "Sócio · Forno Antico",
    quote: "O site ficou muito mais organizado e nossos clientes começaram a pedir direto pelo cardápio digital. O processo foi tranquilo do início ao fim.",
  },
  {
    initials: "AS",
    name: "Ana Souza",
    role: "Gestora · Clínica Lumis",
    quote: "Hoje temos uma identidade visual coerente em todos os materiais e o site passou a transmitir muito mais profissionalismo para os pacientes.",
  },
  {
    initials: "TC",
    name: "Thiago Carvalho",
    role: "Proprietário · Norte Barbearia",
    quote: "A automação de agendamento reduziu muito o tempo no WhatsApp. Trabalho direto, comunicação clara e prazos cumpridos.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Depoimentos"
          title="O que clientes dizem."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {data.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-7 flex flex-col"
            >
              <blockquote className="text-[15px] text-foreground/90 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-xs font-medium text-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
