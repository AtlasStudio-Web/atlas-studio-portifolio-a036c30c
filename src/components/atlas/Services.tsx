import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import {
  Globe, Palette, LayoutGrid, Workflow, BarChart3, Search,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Sites institucionais", desc: "Páginas claras e responsivas para empresas que precisam transmitir credibilidade e organizar informações." },
  { icon: LayoutGrid, title: "Landing pages", desc: "Páginas objetivas para campanhas, lançamentos e captação de contatos, focadas em conversão." },
  { icon: Palette, title: "Identidade visual", desc: "Logotipo, paleta, tipografia e aplicações — um sistema visual coerente para a sua marca." },
  { icon: Workflow, title: "Automações", desc: "Fluxos para WhatsApp, e-mail, CRM e planilhas. Menos trabalho manual no dia a dia." },
  { icon: BarChart3, title: "Dashboards", desc: "Painéis simples para acompanhar vendas, atendimentos e indicadores do seu negócio." },
  { icon: Search, title: "SEO & tráfego", desc: "Estrutura técnica, conteúdo e campanhas pagas para você ser encontrado por quem importa." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Serviços"
          title="O que entregamos."
          description="Trabalhos sob medida para o porte e o momento de cada cliente. Sem pacote engessado."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group bg-background p-8 hover:bg-white/[0.02] transition-colors"
            >
              <s.icon className="h-5 w-5 text-foreground/80" strokeWidth={1.4} />
              <h3 className="mt-5 text-base font-medium text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
