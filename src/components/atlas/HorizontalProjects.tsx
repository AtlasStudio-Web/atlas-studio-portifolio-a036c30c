import { useRef } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";

type Project = {
  n: string;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  year: string;
  /** cor de destaque do projeto */
  accent: string;
  gradient: string;
};

const projects: Project[] = [
  {
    n: "01",
    title: "Farmácia de bairro",
    category: "Website institucional",
    type: "Projeto conceitual",
    description:
      "Estrutura clara de serviços, atendimento e localização, pensada para quem chega pela busca local.",
    image: p1,
    year: "2026",
    accent: "#3BB2A0",
    gradient: "linear-gradient(135deg, #3BB2A0 0%, #1B6FA8 100%)",
  },
  {
    n: "02",
    title: "Barbearia",
    category: "Website + mobile",
    type: "Projeto conceitual",
    description:
      "Identidade forte, galeria de cortes e agendamento direto pelo WhatsApp em poucos toques.",
    image: p2,
    year: "2026",
      accent: "#C9772F",
    gradient: "linear-gradient(135deg, #C9772F 0%, #7A2E2E 100%)",
  },
  {
    n: "03",
    title: "Restaurante",
    category: "Landing page",
    type: "Projeto conceitual",
    description:
      "Cardápio, ambiente e reserva em uma única página editorial, leve e rápida no celular.",
    image: p3,
    year: "2026",
      accent: "#D64545",
    gradient: "linear-gradient(135deg, #D64545 0%, #F0A202 100%)",
  },
  {
    n: "04",
    title: "Clínica odontológica",
    category: "Identidade + conteúdo",
    type: "Projeto conceitual",
    description:
      "Sistema visual aplicado em papelaria e posts, com linguagem consistente em todos os pontos.",
    image: p4,
    year: "2026",
      accent: "#4F7CFF",
    gradient: "linear-gradient(135deg, #4F7CFF 0%, #8A5CF6 100%)",
  },
];

export function HorizontalProjects() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current;
        if (!el) return;
        const distance = () => el.scrollWidth - window.innerWidth + 80;
        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".hp-card").forEach((card) => {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 85%" },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
          });
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projetos" ref={root} className="relative overflow-hidden border-t border-white/[0.07] py-24 lg:h-[100svh] lg:py-0">
      <div className="lg:flex lg:h-full lg:flex-col lg:justify-center">
        <div className="mx-auto mb-14 w-full max-w-[1500px] px-6 md:px-10 lg:mb-12">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.04em]">
              Feito para ser visto.
            </h2>
            <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:block">
              Role para navegar →
            </span>
          </div>
        </div>

        <div
          ref={track}
          className="flex flex-col gap-16 px-6 md:px-10 lg:w-max lg:flex-row lg:gap-10 lg:pl-10 lg:pr-24"
        >
          {projects.map((p) => (
            <article
              key={p.n}
              className="hp-card group lg:w-[62vw] lg:max-w-[880px]"
              data-cursor="Ver"
            >
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.category}, ${p.type} da Atlas Studio`}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="block aspect-[4/3] w-full object-cover grayscale transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0 lg:aspect-auto lg:h-[46vh]"
                />
                <span className="absolute left-5 top-5 border border-white/25 bg-background/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-foreground backdrop-blur-sm">
                  {p.type}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <span className="text-[11px] tracking-[0.3em] text-muted-foreground">{p.n}</span>
                  <h3 className="mt-2 font-display text-3xl font-light tracking-[-0.03em] md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
                <div className="text-right text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  <div>{p.category}</div>
                  <div className="mt-1">{p.year}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
