import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ATLAS_INSTAGRAM } from "@/lib/atlas";
import { ArrowUpRight, Instagram as IGIcon } from "lucide-react";

const posts = [
  { tone: "from-neutral-800 to-neutral-950", label: "Editorial", title: "Reposicionamento de marca" },
  { tone: "from-zinc-700 to-zinc-950", label: "Bastidores", title: "Direção de arte em estúdio" },
  { tone: "from-stone-800 to-black", label: "Lançamento", title: "Bastidores de um novo site" },
  { tone: "from-neutral-700 to-neutral-950", label: "Estratégia", title: "3 erros em landing pages" },
  { tone: "from-neutral-900 to-black", label: "Processo", title: "Como estruturamos um projeto" },
  { tone: "from-zinc-800 to-neutral-950", label: "Conteúdo", title: "Identidade visual que vende" },
];

export function InstagramSection() {
  return (
    <section id="instagram" className="relative py-28 md:py-36 border-t border-white/[0.06] overflow-hidden">
      <div
        className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full blur-3xl opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(closest-side, oklch(1 0 0 / 0.4), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <IGIcon className="h-3 w-3 text-foreground/80" strokeWidth={1.6} />
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Instagram</span>
            </div>

            <h2 className="mt-7 font-display text-4xl md:text-5xl font-light tracking-[-0.03em] leading-[1.05]">
              Seu Instagram como uma vitrine{" "}
              <span className="text-silver italic font-extralight">premium</span>.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Cuidamos do posicionamento visual, estratégia de conteúdo e gestão completa do
              seu perfil — para sua marca passar a transmitir autoridade desde a primeira impressão.
            </p>

            <ul className="mt-8 space-y-3.5 text-sm">
              {[
                "Reposicionamento e identidade visual do perfil",
                "Planejamento mensal de conteúdo estratégico",
                "Design de feed coerente e memorável",
                "Roteiros e edição de vídeos curtos",
                "Acompanhamento de métricas e crescimento",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/85">
                  <span className="mt-2 h-1 w-4 bg-foreground/40 rounded-full" />
                  {t}
                </li>
              ))}
            </ul>

            <a
              href={ATLAS_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:bg-foreground/90 transition-all hover:gap-3"
            >
              Ver nosso Instagram
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mock feed grid */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 md:p-5">
              <div className="flex items-center justify-between px-2 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-500 p-[2px]">
                    <div className="h-full w-full rounded-full bg-background flex items-center justify-center text-[10px] font-display tracking-tight">
                      A
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">@atlasstudio.web</div>
                    <div className="text-[11px] text-muted-foreground">Estúdio digital · Design & IA</div>
                  </div>
                </div>
                <div className="text-[11px] text-muted-foreground hidden sm:block">Seguir</div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 md:gap-3">
                {posts.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br ${p.tone} border border-white/[0.06]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(1_0_0_/_0.08),transparent_60%)]" />
                    <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
                      <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/60">
                        {p.label}
                      </div>
                      <div className="text-[11px] md:text-[13px] font-display font-light leading-snug text-white/95">
                        {p.title}
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 px-2 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-muted-foreground">
                <span>+ conteúdo semanal</span>
                <span>@atlasstudio.web</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
