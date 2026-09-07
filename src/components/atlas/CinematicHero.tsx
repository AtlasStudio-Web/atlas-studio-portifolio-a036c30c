import { useRef } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import { ATLAS_WHATSAPP } from "@/lib/atlas";
import { MagneticLink } from "@/components/ui/magnetic-link";
import heroShot from "@/assets/proj-1.jpg";

export function CinematicHero() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!reduced) {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(".hero-eyebrow", { y: 14, opacity: 0, duration: 0.8 })
          .from(".hero-word", { yPercent: 115, duration: 1.1, stagger: 0.09 }, "-=0.45")
          .from(".hero-sub", { y: 18, opacity: 0, filter: "blur(6px)", duration: 0.9 }, "-=0.7")
          .from(".hero-cta", { y: 16, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.6")
          .from(".hero-meta", { opacity: 0, duration: 0.9 }, "-=0.5")
          .from(frame.current, { yPercent: 8, opacity: 0, duration: 1.2 }, "-=0.9");
      }

      const mm = gsap.matchMedia();

      // Sequência cinematográfica: tipografia recua, mockup cresce
      mm.add(
        {
          desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { desktop } = context.conditions as { desktop: boolean };
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: desktop ? "+=1600" : "+=800",
              scrub: 1,
              pin: stage.current,
              anticipatePin: 1,
            },
          });
          tl.to(".hero-type", { yPercent: -14, opacity: 0, filter: "blur(8px)", duration: 1 })
            .to(
              frame.current,
              { scale: desktop ? 1.28 : 1.1, yPercent: desktop ? -12 : -6, duration: 1.6 },
              0,
            )
            .to(".hero-caption", { opacity: 1, y: 0, duration: 0.6 }, 0.9);
        },
      );

      // parallax de mouse muito sutil
      const fine = window.matchMedia("(pointer: fine)").matches;
      if (fine && !reduced) {
        const onMove = (e: MouseEvent) => {
          const dx = (e.clientX / window.innerWidth - 0.5) * 2;
          const dy = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(frame.current, {
            rotateY: dx * 3,
            rotateX: -dy * 2,
            duration: 0.9,
            ease: "power3.out",
            transformPerspective: 1200,
          });
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative">
      <div ref={stage} className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.07]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-[calc(var(--header-height)+3rem)] md:px-10 md:pt-[calc(var(--header-height)+4.5rem)]">
          <div className="hero-type">
            <div className="hero-eyebrow flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              <span className="h-px w-10 bg-white/25" />
              Studio digital · Brasil
            </div>

            <h1 className="mt-8 font-display text-[clamp(3rem,10.5vw,9.5rem)] font-light leading-[0.86] tracking-[-0.045em]">
              {["Experiências", "digitais que fazem", "negócios avançarem."].map((line) => (
                <span key={line} className="block overflow-hidden">
                  <span className="hero-word block">{line}</span>
                </span>
              ))}
            </h1>

            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="hero-sub max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Sites, design e presença digital para empresas que querem ser
                percebidas de outra forma.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <MagneticLink
                  href="#projetos"
                  cursor="Ver"
                  className="hero-cta inline-flex items-center gap-3 rounded-none border border-foreground bg-foreground px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Conheça nossos projetos
                </MagneticLink>
                <MagneticLink
                  href={ATLAS_WHATSAPP}
                  external
                  ariaLabel="Falar com a Atlas Studio pelo WhatsApp"
                  className="hero-cta inline-flex items-center gap-3 border-b border-foreground/25 px-1 py-2 text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
                >
                  Fale com a Atlas
                </MagneticLink>
              </div>
            </div>
          </div>

          <div className="relative mt-14 md:mt-10">
            <div
              ref={frame}
              className="relative mx-auto w-full max-w-4xl origin-top overflow-hidden border border-white/10 will-change-transform"
            >
              <img
                src={heroShot}
                alt="Website de farmácia desenvolvido pela Atlas Studio em um navegador desktop"
                width={1408}
                height={1008}
                className="block h-[38vh] w-full object-cover object-top md:h-[46vh]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
            <p className="hero-caption mt-5 translate-y-3 text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground opacity-0">
              Web · Design · Estratégia
            </p>
          </div>

          <div className="hero-meta mt-10 grid grid-cols-2 gap-6 border-t border-white/[0.07] pt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:grid-cols-4">
            <span>Sites</span>
            <span>Landing pages</span>
            <span>Conteúdo</span>
            <span>Marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
