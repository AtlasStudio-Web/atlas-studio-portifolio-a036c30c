import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import caseDashboard from "@/assets/case-dashboard.jpg";
import caseLanding from "@/assets/case-landing.jpg";
import caseBrand from "@/assets/case-brand.jpg";
import caseMobile from "@/assets/case-mobile.jpg";

const cases = [
  {
    img: caseDashboard,
    tag: "SaaS · Dashboard",
    title: "Nimbus Analytics",
    metric: "+312% conversão em 90 dias",
    desc: "Reposicionamento completo, dashboard proprietário e funil de aquisição inteligente para SaaS B2B em crescimento acelerado.",
    span: "lg:col-span-2",
  },
  {
    img: caseBrand,
    tag: "Branding · Luxo",
    title: "Maison Vère",
    metric: "Reposicionamento premium",
    desc: "Identidade visual atemporal para marca de cosméticos high-end.",
  },
  {
    img: caseMobile,
    tag: "Produto · Mobile",
    title: "Vault Finance",
    metric: "0 → 40k usuários",
    desc: "Design de produto e estratégia de growth para fintech de elite.",
  },
  {
    img: caseLanding,
    tag: "Landing · IA",
    title: "Helios AI",
    metric: "8.4x ROAS em 60 dias",
    desc: "Site institucional, automação de leads e integração com CRM inteligente para startup de IA generativa.",
    span: "lg:col-span-2",
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow="Portfólio"
            title="Cases que redefinem categoria."
            description="Cada projeto é uma operação de transformação — não um entregável. Veja o que construímos para marcas em crescimento."
          />
          <a href="#contato" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            Ver todos →
          </a>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl glass ring-silver-glow ${c.span ?? ""}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy"
                  className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="relative p-7">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{c.tag}</span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="text-[11px] text-silver">{c.metric}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
