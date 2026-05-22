import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { ATLAS_INSTAGRAM } from "@/lib/atlas";
import casePizza from "@/assets/case-pizza.jpg";
import caseBarber from "@/assets/case-barber.jpg";
import caseGym from "@/assets/case-gym.jpg";
import caseClinic from "@/assets/case-clinic.jpg";
import caseRealestate from "@/assets/case-realestate.jpg";

type CaseItem = {
  img: string;
  tag: string;
  title: string;
  niche: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { value: string; label: string }[];
};

const cases: CaseItem[] = [
  {
    img: caseBarber,
    tag: "Branding · Site · Instagram",
    title: "Norte Barbearia",
    niche: "Barbearia masculina premium",
    problem:
      "Perfil desorganizado, sem identidade visual e dependente de WhatsApp para agendamentos.",
    solution:
      "Reformulação completa de identidade, site com agendamento online e automação no Instagram para captação de clientes.",
    result:
      "Agenda lotada em duas semanas após o lançamento e fila de espera nos horários de pico.",
    metrics: [
      { value: "+218%", label: "Novos clientes/mês" },
      { value: "−70%", label: "Tempo no WhatsApp" },
    ],
  },
  {
    img: casePizza,
    tag: "Site · Automação",
    title: "Forno Antico",
    niche: "Pizzaria de bairro · São Paulo",
    problem:
      "Cardápio em PDF travado, pedidos confusos por telefone e nenhuma presença digital relevante.",
    solution:
      "Site responsivo com cardápio digital, integração direta com WhatsApp e fluxo de confirmação automatizado.",
    result:
      "Pedidos digitais passaram a representar a maior parte do faturamento da semana.",
    metrics: [
      { value: "62%", label: "Pedidos via site" },
      { value: "+35%", label: "Ticket médio" },
    ],
  },
  {
    img: caseGym,
    tag: "Landing · IA · Tráfego",
    title: "Vértice Studio",
    niche: "Academia / Studio de treino",
    problem:
      "Leads frios, anúncios sem direcionamento e baixa taxa de conversão na unidade nova.",
    solution:
      "Landing page de alta conversão com qualificação automática por IA e disparo direto para o time comercial.",
    result:
      "Custo por lead reduzido e turmas da aula experimental completas no primeiro mês.",
    metrics: [
      { value: "−48%", label: "CPL em ads" },
      { value: "3.4x", label: "Conversão de leads" },
    ],
  },
  {
    img: caseClinic,
    tag: "Branding · Site institucional",
    title: "Clínica Lumis",
    niche: "Clínica multidisciplinar",
    problem:
      "Comunicação amadora, falta de autoridade e dificuldade de centralizar agendamentos de várias especialidades.",
    solution:
      "Identidade visual sóbria, site institucional com página por especialidade e integração com agenda online unificada.",
    result:
      "Percepção de marca elevada e queda significativa em remarcações e no-shows.",
    metrics: [
      { value: "+140%", label: "Agendamentos online" },
      { value: "−52%", label: "No-show mensal" },
    ],
  },
  {
    img: caseRealestate,
    tag: "Site · Catálogo · Performance",
    title: "Solar Imóveis",
    niche: "Imobiliária boutique",
    problem:
      "Catálogo bagunçado, busca confusa e clientes desistindo antes de chegar ao corretor.",
    solution:
      "Site com listagem filtrável, ficha completa por imóvel e contato direto via WhatsApp por anúncio.",
    result:
      "Tempo médio no site triplicou e o volume de contatos qualificados aumentou de forma constante.",
    metrics: [
      { value: "3.1x", label: "Tempo no site" },
      { value: "+87%", label: "Leads qualificados" },
    ],
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Cases"
            title="Resultados reais para negócios reais."
            description="Projetos selecionados que mostram como design, tecnologia e estratégia se combinam para transformar a presença digital de uma marca."
          />
          <a
            href={ATLAS_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Ver mais projetos no Instagram
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-16 space-y-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="group grid md:grid-cols-12 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <div
                className={`relative md:col-span-6 aspect-[16/10] md:aspect-auto md:min-h-[420px] overflow-hidden bg-background ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={c.img}
                  alt={`${c.title} — ${c.niche}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/60 backdrop-blur px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/80" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-foreground/85">{c.tag}</span>
                </div>
              </div>

              <div className="md:col-span-6 bg-background p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{c.niche}</div>
                  <h3 className="mt-3 font-display text-3xl md:text-[34px] font-light tracking-[-0.025em] text-foreground">
                    {c.title}
                  </h3>

                  <dl className="mt-7 space-y-5 text-sm">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80">Desafio</dt>
                      <dd className="mt-1.5 text-foreground/85 leading-relaxed">{c.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80">Solução Atlas</dt>
                      <dd className="mt-1.5 text-muted-foreground leading-relaxed">{c.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80">Resultado</dt>
                      <dd className="mt-1.5 text-foreground/90 leading-relaxed">{c.result}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-2xl md:text-[26px] font-light tracking-tight text-silver">
                        {m.value}
                      </div>
                      <div className="mt-1 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
