import { useRef } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";

const steps = [
  ["01", "Descoberta", "Entendemos o negócio, o público e o que precisa mudar."],
  ["02", "Estratégia", "Definimos a direção, a mensagem e a estrutura do projeto."],
  ["03", "Design", "Transformamos estratégia em experiência visual e navegação."],
  ["04", "Desenvolvimento", "Construímos o produto digital com performance e cuidado."],
  ["05", "Evolução", "Medimos, ajustamos e melhoramos ao longo do tempo."],
];

export function Process() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pr-step", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.fromTo(
        ".pr-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="processo" ref={root} className="relative border-t border-white/[0.07] py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.04em]">
            Como trabalhamos.
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Um processo curto, transparente e sem etapas decorativas.
          </p>
        </div>

        <div className="relative mt-20 pl-8 md:pl-16">
          <div className="absolute left-0 top-0 h-full w-px bg-white/[0.1] md:left-6" />
          <div className="pr-progress absolute left-0 top-0 h-full w-px bg-foreground/70 md:left-6" />

          {steps.map(([n, title, desc]) => (
            <div
              key={n}
              className="pr-step grid gap-3 border-b border-white/[0.07] py-8 md:grid-cols-[6rem_16rem_1fr] md:items-baseline md:py-10"
            >
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground">{n}</span>
              <h3 className="font-display text-2xl font-light tracking-[-0.02em] md:text-3xl">
                {title}
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
