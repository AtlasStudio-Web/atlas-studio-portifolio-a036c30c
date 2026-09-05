import { useRef, useState } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";

const items = [
  {
    n: "01",
    title: "Sites",
    desc: "Experiências digitais rápidas, responsivas e pensadas para converter visitantes em clientes.",
  },
  {
    n: "02",
    title: "Landing pages",
    desc: "Páginas focadas em campanhas, produtos, serviços e geração de leads.",
  },
  {
    n: "03",
    title: "Conteúdo",
    desc: "Design de posts e materiais digitais para fortalecer a presença da marca.",
  },
  {
    n: "04",
    title: "Marketing",
    desc: "Estratégias para posicionar empresas e transformar atenção em oportunidades.",
  },
];

export function WhatWeDo() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".wwd-row", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        yPercent: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.09,
        ease: "expo.out",
      });
      gsap.from(".wwd-line", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.1,
        stagger: 0.09,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicos" ref={root} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.04em]">
            Da ideia à<br />presença digital.
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Quatro frentes de trabalho que se conectam para construir a
            presença digital de um negócio.
          </p>
        </div>

        <div className="mt-20">
          {items.map((it, i) => (
            <div
              key={it.n}
              className="wwd-row group"
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
            >
              <div className="wwd-line h-px w-full bg-white/[0.12]" />
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-baseline gap-6 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 md:gap-12 md:py-10"
              >
                <span className="text-[11px] tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-foreground">
                  {it.n}
                </span>
                <span className="flex-1">
                  <span
                    className={`block font-display font-light uppercase tracking-[-0.02em] transition-all duration-500 ${
                      open === i
                        ? "text-[clamp(2rem,6vw,4.5rem)] text-foreground"
                        : "text-[clamp(1.7rem,5vw,3.6rem)] text-foreground/55"
                    }`}
                  >
                    {it.title}
                  </span>
                  <span
                    className={`block max-w-xl overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-500 ${
                      open === i ? "mt-4 max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {it.desc}
                  </span>
                </span>
              </button>
            </div>
          ))}
          <div className="wwd-line h-px w-full bg-white/[0.12]" />
        </div>
      </div>
    </section>
  );
}
