import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import t1 from "@/assets/test-1.jpg";
import t2 from "@/assets/test-2.jpg";
import t3 from "@/assets/test-3.jpg";

const data = [
  {
    img: t1, name: "Ricardo Mendes", role: "CEO · Helios AI", result: "8.4x ROAS em 60 dias",
    quote: "A ATLAS reposicionou nossa marca de um startup técnico para uma referência de categoria. O salto em percepção e em receita foi imediato.",
  },
  {
    img: t2, name: "Carolina Reis", role: "Founder · Maison Vère", result: "+212% ticket médio",
    quote: "Eles não entregam um site — eles entregam um sistema. Cada detalhe foi pensado em função do crescimento da marca.",
  },
  {
    img: t3, name: "Henrique Vasco", role: "COO · Vault Finance", result: "0 → 40k usuários",
    quote: "Trabalhamos com agências internacionais antes. Nenhuma operou com a precisão e o padrão visual da ATLAS.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Depoimentos"
          title="O que dizem fundadores que escalaram com a ATLAS."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {data.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl glass p-8 flex flex-col"
            >
              <div className="text-silver text-5xl font-display leading-none opacity-30">"</div>
              <blockquote className="mt-2 text-foreground/90 leading-relaxed text-[15px]">
                {t.quote}
              </blockquote>
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-4">
                <img src={t.img} alt={t.name} loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-white/10" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-silver">
                <span className="h-1 w-1 rounded-full bg-white" />
                {t.result}
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
