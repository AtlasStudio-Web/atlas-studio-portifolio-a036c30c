import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import {
  LayoutGrid, Globe, Sparkles, Instagram, Camera,
  Palette, Compass, ImageIcon,
} from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Landing pages de alta conversão",
    desc: "Páginas estratégicas, com copy orientada a resultado e estrutura testada para transformar visitantes em clientes.",
  },
  {
    icon: Globe,
    title: "Sites premium",
    desc: "Sites institucionais sofisticados, rápidos e responsivos, construídos para posicionar a sua marca como referência.",
  },
  {
    icon: Sparkles,
    title: "Automações com IA",
    desc: "Atendimento automatizado, qualificação de leads e integrações inteligentes que reduzem tarefas manuais.",
  },
  {
    icon: Instagram,
    title: "Gestão de Instagram",
    desc: "Planejamento, posicionamento e execução completa do seu perfil — feed coerente e conteúdo com intenção.",
  },
  {
    icon: Camera,
    title: "Criação de conteúdo",
    desc: "Roteiros, fotografia e edição de vídeos curtos para destacar sua marca no digital com identidade própria.",
  },
  {
    icon: ImageIcon,
    title: "Design para redes sociais",
    desc: "Posts, carrosséis e stories desenhados para gerar autoridade e fortalecer a percepção da sua marca.",
  },
  {
    icon: Palette,
    title: "Branding digital",
    desc: "Construção de identidade visual completa: logotipo, paleta, tipografia e diretrizes de aplicação.",
  },
  {
    icon: Compass,
    title: "Estratégia de presença online",
    desc: "Diagnóstico, posicionamento e plano de ação para sua marca crescer de forma consistente no digital.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Serviços"
          title="Tudo que sua marca precisa para crescer no digital."
          description="Soluções integradas de design, tecnologia e conteúdo — pensadas para gerar autoridade, presença e resultado real."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="group relative bg-background p-8 transition-colors hover:bg-white/[0.025] overflow-hidden"
            >
              <div
                className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(closest-side, oklch(1 0 0 / 0.10), transparent 70%)" }}
              />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
                  <s.icon className="h-4.5 w-4.5 text-foreground/85" strokeWidth={1.4} />
                </div>
                <h3 className="mt-5 text-[15px] font-medium text-foreground leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
