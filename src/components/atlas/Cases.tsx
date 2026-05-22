import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { ATLAS_INSTAGRAM } from "@/lib/atlas";
import casePizza from "@/assets/case-pizza.jpg";
import caseBarber from "@/assets/case-barber.jpg";
import caseGym from "@/assets/case-gym.jpg";
import caseClinic from "@/assets/case-clinic.jpg";
import caseRealestate from "@/assets/case-realestate.jpg";
import beforePizza from "@/assets/before-pizza.jpg";
import beforeBarber from "@/assets/before-barber.jpg";
import beforeGym from "@/assets/before-gym.jpg";
import beforeClinic from "@/assets/before-clinic.jpg";
import beforeRealestate from "@/assets/before-realestate.jpg";

type CaseItem = {
  before: string;
  after: string;
  tag: string;
  title: string;
  niche: string;
  problem: string;
  solution: string;
  result: string;
  beforePoints: string[];
  afterPoints: string[];
  metrics: { value: string; label: string }[];
};

const cases: CaseItem[] = [
  {
    before: beforeBarber,
    after: caseBarber,
    tag: "Branding · Site · Instagram",
    title: "Norte Barbearia",
    niche: "Barbearia masculina premium",
    problem:
      "Perfil desorganizado, sem identidade visual e dependente de WhatsApp para agendamentos.",
    solution:
      "Reformulação completa de identidade, site com agendamento online e organização do feed do Instagram.",
    result:
      "Agenda lotada em duas semanas após o lançamento e fila de espera nos horários de pico.",
    beforePoints: [
      "Feed bagunçado e fotos amadoras",
      "Identidade visual inconsistente",
      "Agendamento manual no WhatsApp",
    ],
    afterPoints: [
      "Identidade premium e coesa",
      "Site com agendamento online",
      "Feed organizado e profissional",
    ],
    metrics: [
      { value: "+218%", label: "Novos clientes/mês" },
      { value: "−70%", label: "Tempo no WhatsApp" },
    ],
  },
  {
    before: beforePizza,
    after: casePizza,
    tag: "Site · Automação",
    title: "Forno Antico",
    niche: "Pizzaria de bairro · São Paulo",
    problem:
      "Cardápio em PDF travado, pedidos confusos por telefone e nenhuma presença digital relevante.",
    solution:
      "Site responsivo com cardápio digital, integração direta com WhatsApp e fluxo de confirmação automatizado.",
    result:
      "Pedidos digitais passaram a representar a maior parte do faturamento da semana.",
    beforePoints: [
      "Cardápio em PDF difícil de ler",
      "Pedidos confusos por telefone",
      "Sem identidade digital",
    ],
    afterPoints: [
      "Cardápio digital responsivo",
      "Pedido em 3 cliques via WhatsApp",
      "Visual coerente com a marca",
    ],
    metrics: [
      { value: "62%", label: "Pedidos via site" },
      { value: "+35%", label: "Ticket médio" },
    ],
  },
  {
    before: beforeGym,
    after: caseGym,
    tag: "Landing · IA · Tráfego",
    title: "Vértice Studio",
    niche: "Academia / Studio de treino",
    problem:
      "Leads frios, anúncios sem direcionamento e baixa taxa de conversão na unidade nova.",
    solution:
      "Landing page de alta conversão com qualificação automática por IA e disparo direto para o time comercial.",
    result:
      "Custo por lead reduzido e turmas da aula experimental completas no primeiro mês.",
    beforePoints: [
      "Criativos genéricos sem branding",
      "Lead chega sem contexto",
      "Conversão baixa em ads",
    ],
    afterPoints: [
      "Landing com proposta clara",
      "Qualificação automática por IA",
      "Lead pronto para o comercial",
    ],
    metrics: [
      { value: "−48%", label: "CPL em ads" },
      { value: "3.4x", label: "Conversão de leads" },
    ],
  },
  {
    before: beforeClinic,
    after: caseClinic,
    tag: "Branding · Site institucional",
    title: "Clínica Lumis",
    niche: "Clínica multidisciplinar",
    problem:
      "Comunicação amadora, falta de autoridade e dificuldade de centralizar agendamentos de várias especialidades.",
    solution:
      "Identidade visual sóbria, site institucional com página por especialidade e agenda online unificada.",
    result:
      "Percepção de marca elevada e queda significativa em remarcações e no-shows.",
    beforePoints: [
      "Site antigo e pouco confiável",
      "Sem hierarquia entre especialidades",
      "Agenda dispersa em vários canais",
    ],
    afterPoints: [
      "Visual sóbrio e profissional",
      "Página dedicada por especialidade",
      "Agenda online unificada",
    ],
    metrics: [
      { value: "+140%", label: "Agendamentos online" },
      { value: "−52%", label: "No-show mensal" },
    ],
  },
  {
    before: beforeRealestate,
    after: caseRealestate,
    tag: "Site · Catálogo · Performance",
    title: "Solar Imóveis",
    niche: "Imobiliária boutique",
    problem:
      "Catálogo bagunçado, busca confusa e clientes desistindo antes de chegar ao corretor.",
    solution:
      "Site com listagem filtrável, ficha completa por imóvel e contato direto via WhatsApp por anúncio.",
    result:
      "Tempo médio no site triplicou e o volume de contatos qualificados aumentou de forma constante.",
    beforePoints: [
      "Catálogo desorganizado",
      "Busca confusa e lenta",
      "Cliente desistia antes do contato",
    ],
    afterPoints: [
      "Listagem filtrável e clara",
      "Ficha completa por imóvel",
      "Contato direto por anúncio",
    ],
    metrics: [
      { value: "3.1x", label: "Tempo no site" },
      { value: "+87%", label: "Leads qualificados" },
    ],
  },
];

function BeforeAfter({ before, after, title }: { before: string; after: string; title: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {/* ANTES */}
      <figure className="group/img relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
        <img
          src={before}
          alt={`${title} — antes`}
          loading="lazy"
          width={1280}
          height={800}
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-60 blur-[2px] scale-110 transition duration-700 group-hover/img:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/40 to-background/20" />
        <figcaption className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-background/70 backdrop-blur px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Antes</span>
        </figcaption>
      </figure>
      {/* DEPOIS */}
      <figure className="group/img relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.1] bg-background shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <img
          src={after}
          alt={`${title} — depois`}
          loading="lazy"
          width={1280}
          height={800}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover/img:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        <figcaption className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-background/70 backdrop-blur px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-foreground/90">Depois</span>
        </figcaption>
      </figure>
    </div>
  );
}

export function Cases() {
  return (
    <section id="cases" className="relative py-24 md:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Cases"
            title="Antes e depois de marcas reais."
            description="Projetos selecionados que mostram a transformação visual e estratégica de cada negócio — do estado inicial ao resultado final entregue pela Atlas."
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

        <div className="mt-16 space-y-8 md:space-y-10">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-10 p-5 sm:p-7 lg:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.015] hover:border-white/[0.12] hover:bg-white/[0.025] transition-colors"
            >
              {/* MEDIA */}
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <BeforeAfter before={c.before} after={c.after} title={c.title} />
              </div>

              {/* CONTENT */}
              <div className="lg:col-span-5 flex flex-col justify-between min-w-0">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    <span>{c.niche}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                    <span className="truncate">{c.tag}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[34px] font-light leading-[1.1] tracking-[-0.025em] text-foreground break-words">
                    {c.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                    {c.solution}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-white/[0.05] bg-background/40 p-4">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80 mb-3">
                        Antes
                      </div>
                      <ul className="space-y-1.5">
                        {c.beforePoints.map((p) => (
                          <li key={p} className="flex gap-2 text-xs sm:text-[13px] text-muted-foreground leading-snug">
                            <span className="mt-1.5 h-px w-2.5 shrink-0 bg-muted-foreground/40" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-white/[0.08] bg-background/60 p-4">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/70 mb-3">
                        Depois
                      </div>
                      <ul className="space-y-1.5">
                        {c.afterPoints.map((p) => (
                          <li key={p} className="flex gap-2 text-xs sm:text-[13px] text-foreground/85 leading-snug">
                            <span className="mt-1.5 h-px w-2.5 shrink-0 bg-foreground/60" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-6">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="min-w-0">
                      <div className="font-display text-2xl lg:text-[26px] font-light tracking-tight text-silver">
                        {m.value}
                      </div>
                      <div className="mt-1 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
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
