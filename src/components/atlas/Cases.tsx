import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import casePizza from "@/assets/case-pizza.jpg";
import caseBarber from "@/assets/case-barber.jpg";
import caseGym from "@/assets/case-gym.jpg";
import caseClinic from "@/assets/case-clinic.jpg";
import caseRealestate from "@/assets/case-realestate.jpg";
import caseDashboard from "@/assets/case-dashboard2.jpg";

const cases = [
  {
    img: casePizza,
    tag: "Site · Restaurante",
    title: "Forno Antico",
    goal: "Modernizar a presença online e facilitar pedidos pelo site.",
    solution: "Site responsivo com cardápio digital, integração com WhatsApp e área de contato.",
  },
  {
    img: caseBarber,
    tag: "Site · Barbearia",
    title: "Norte Barbearia",
    goal: "Receber agendamentos online e organizar a agenda da equipe.",
    solution: "Página institucional com sistema de agendamento e mensagens automáticas de confirmação.",
  },
  {
    img: caseGym,
    tag: "Landing · Academia",
    title: "Vértice Studio",
    goal: "Captar contatos para a aula experimental de uma nova unidade.",
    solution: "Landing page focada em conversão, com formulário simples e disparo automático no CRM.",
  },
  {
    img: caseClinic,
    tag: "Site · Clínica",
    title: "Clínica Lumis",
    goal: "Transmitir mais credibilidade e centralizar agendamentos.",
    solution: "Site institucional, página para cada especialidade e integração com a agenda online.",
  },
  {
    img: caseRealestate,
    tag: "Site · Imobiliária",
    title: "Solar Imóveis",
    goal: "Organizar o catálogo de imóveis e melhorar a busca dos clientes.",
    solution: "Site com listagem filtrável, ficha completa de cada imóvel e contato direto pelo WhatsApp.",
  },
  {
    img: caseDashboard,
    tag: "Sistema · Pequeno comércio",
    title: "Painel de pedidos",
    goal: "Acompanhar pedidos e indicadores básicos em um único lugar.",
    solution: "Dashboard simples e leve, com login, gráficos essenciais e exportação para planilha.",
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Trabalhos"
            title="Alguns projetos recentes."
            description="Uma seleção de sites, landing pages e sistemas que entregamos para clientes de diferentes segmentos."
          />
          <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            Solicitar portfólio completo →
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="group rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-background">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-7">
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{c.tag}</div>
                <h3 className="mt-3 text-xl font-display font-medium text-foreground">{c.title}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">Objetivo</dt>
                    <dd className="mt-1 text-foreground/85 leading-relaxed">{c.goal}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">Solução</dt>
                    <dd className="mt-1 text-muted-foreground leading-relaxed">{c.solution}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
