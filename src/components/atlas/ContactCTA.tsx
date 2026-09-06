import { useRef } from "react";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";
import { ATLAS_WHATSAPP } from "@/lib/atlas";
import { MagneticLink } from "@/components/ui/magnetic-link";

export function ContactCTA() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-line", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        yPercent: 110,
        duration: 1.1,
        stagger: 0.1,
        ease: "expo.out",
      });
      gsap.from(".cta-fade", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 20,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contato" ref={root} className="relative border-t border-white/[0.07] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground cta-fade">
          Contato
        </div>
        <h2 className="mt-8 font-display text-[clamp(2.4rem,7.5vw,6.5rem)] font-light leading-[0.92] tracking-[-0.045em]">
          {["Vamos construir algo", "que vale a pena visitar."].map((l) => (
            <span key={l} className="block overflow-hidden">
              <span className="cta-line block">{l}</span>
            </span>
          ))}
        </h2>

        <p className="cta-fade mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Conte-nos sobre o seu negócio e descubra o que podemos construir juntos.
        </p>

        <div className="cta-fade mt-12 flex flex-wrap items-center gap-4">
          <MagneticLink
            href={ATLAS_WHATSAPP}
            external
            cursor="WhatsApp"
            ariaLabel="Falar com a Atlas Studio pelo WhatsApp"
            className="inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Falar com a Atlas
          </MagneticLink>
          <MagneticLink
            href="#projetos"
            className="inline-flex items-center border-b border-foreground/25 px-1 py-2 text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
          >
            Ver projetos
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
