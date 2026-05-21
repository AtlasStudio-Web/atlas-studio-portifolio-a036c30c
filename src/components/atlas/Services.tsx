import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import {
  Bot, Globe, Palette, LineChart, Megaphone, Network, GitBranch, Layers,
} from "lucide-react";

const services = [
  { icon: Bot, title: "Automação com IA", desc: "Agentes inteligentes, fluxos autônomos e integrações de modelos LLM em operações reais." },
  { icon: Globe, title: "Criação de Sites", desc: "Sites e plataformas premium, performáticos e cinematográficos. Padrão Awwwards." },
  { icon: Palette, title: "Branding", desc: "Identidades visuais sofisticadas, atemporais e construídas para liderar categoria." },
  { icon: LineChart, title: "Gestão de Tráfego", desc: "Mídia paga estruturada por dados — Google, Meta, LinkedIn e canais emergentes." },
  { icon: Megaphone, title: "Social Media", desc: "Conteúdo de alto padrão, narrativa de marca e presença digital memorável." },
  { icon: Layers, title: "Estruturação Digital", desc: "Diagnóstico, arquitetura e implementação completa do ecossistema digital." },
  { icon: GitBranch, title: "Funis Inteligentes", desc: "Jornadas de aquisição, ativação e retenção projetadas para escalar receita." },
  { icon: Network, title: "Sistemas Inteligentes", desc: "Plataformas internas sob medida, dashboards e ferramentas proprietárias." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px divider-line" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Serviços"
          title="Tudo que sua marca precisa para escalar — sob um único teto."
          description="Combinamos disciplinas que normalmente vivem em silos: tecnologia, design, branding e mídia operando em uma só inteligência."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative rounded-2xl glass p-7 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, oklch(1 0 0 / 0.15), transparent 50%)" }} />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <s.icon className="h-5 w-5 text-silver" strokeWidth={1.3} />
                </div>
                <h3 className="mt-6 font-display text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60 group-hover:text-foreground/80 transition-colors">
                  <span>Saber mais</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
