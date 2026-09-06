import { useRef } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import shot from "@/assets/proj-3.jpg";

export function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mf-line", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        yPercent: 110,
        duration: 1.1,
        stagger: 0.1,
        ease: "expo.out",
      });

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".mf-img",
          { yPercent: -8, scale: 1.1 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: ".mf-img-wrap",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="atlas" ref={root} className="relative border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
        <h2 className="font-display text-[clamp(2.2rem,6.5vw,5.5rem)] font-light leading-[0.95] tracking-[-0.045em]">
          {["Não construímos", "apenas páginas."].map((l) => (
            <span key={l} className="block overflow-hidden">
              <span className="mf-line block">{l}</span>
            </span>
          ))}
          <span className="block overflow-hidden text-muted-foreground">
            <span className="mf-line block">Construímos pontos de contato</span>
          </span>
          <span className="block overflow-hidden text-muted-foreground">
            <span className="mf-line block">entre marcas e pessoas.</span>
          </span>
        </h2>
      </div>

      <div className="mf-img-wrap relative h-[55vh] overflow-hidden md:h-[80vh]">
        <img
          src={shot}
          alt="Composição editorial de um projeto digital criado pela Atlas Studio"
          loading="lazy"
          width={1408}
          height={1008}
          className="mf-img absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
            <p className="max-w-xl font-display text-2xl font-light leading-snug tracking-[-0.02em] md:text-4xl">
              Seu negócio merece mais do que um template.
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              A Atlas combina estratégia, design e tecnologia para criar
              experiências digitais que representam o valor real de cada negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
