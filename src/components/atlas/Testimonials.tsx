import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const data = [
  {
    initials: "TC",
    name: "Thiago Carvalho",
    role: "Norte Barbearia",
    quote:
      "A Atlas pegou um perfil parado e devolveu uma marca. Hoje a agenda fecha sozinha pelo Instagram.",
  },
  {
    initials: "AS",
    name: "Ana Souza",
    role: "Clínica Lumis",
    quote:
      "Profissionais, diretos, sem enrolação. O site mudou totalmente como a clínica é percebida.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Depoimentos"
          title="O que os clientes falam."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {data.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-xl border border-white/[0.06] bg-white/[0.015] p-8 flex flex-col"
            >
              <div className="font-display text-5xl font-light text-foreground/15 leading-none">“</div>
              <blockquote className="-mt-4 text-[17px] text-foreground/90 leading-relaxed font-light">
                {t.quote}
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
