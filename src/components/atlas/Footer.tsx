import { Logo } from "./Logo";
import { ATLAS_INSTAGRAM } from "@/lib/atlas";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Estúdio digital de design, IA e estratégia — para marcas que querem
              crescer com presença, autoridade e consistência no digital.
            </p>
          </div>

          <FooterCol
            title="Navegação"
            links={[
              ["Serviços", "#servicos"],
              ["Cases", "#cases"],
              ["Instagram", "#instagram"],
              ["Processo", "#diferenciais"],
              ["Contato", "#contato"],
            ]}
          />
          <FooterCol
            title="Serviços"
            links={[
              ["Landing pages", "#servicos"],
              ["Sites premium", "#servicos"],
              ["Automações com IA", "#servicos"],
              ["Gestão de Instagram", "#servicos"],
              ["Branding digital", "#servicos"],
            ]}
          />
          <FooterCol
            title="Contato"
            links={[
              ["Instagram", ATLAS_INSTAGRAM],
              ["Solicitar projeto", ATLAS_INSTAGRAM],
              ["Falar conosco", ATLAS_INSTAGRAM],
            ]}
          />
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ATLAS Studio · Todos os direitos reservados
          </div>
          <div className="text-xs text-muted-foreground">
            Design, IA & crescimento digital · Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-[11px] tracking-[0.25em] uppercase text-foreground/80">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map(([l, h]) => (
          <li key={l}>
            <a
              href={h}
              target={h.startsWith("http") ? "_blank" : undefined}
              rel={h.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
