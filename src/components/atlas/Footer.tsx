import { Logo } from "./Logo";
import { ATLAS_INSTAGRAM, ATLAS_WHATSAPP } from "@/lib/atlas";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Studio digital de sites, design e presença online para empresas
              que querem ser percebidas de outra forma.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title="Navegação"
              links={[
                ["Projetos", "#projetos"],
                ["Serviços", "#servicos"],
                ["Processo", "#processo"],
                ["Contato", "#contato"],
              ]}
            />
            <FooterCol
              title="Serviços"
              links={[
                ["Sites", "#servicos"],
                ["Landing pages", "#servicos"],
                ["Conteúdo", "#servicos"],
                ["Marketing", "#servicos"],
              ]}
            />
            <FooterCol
              title="Contato"
              links={[
                ["WhatsApp", ATLAS_WHATSAPP],
                ["Instagram", ATLAS_INSTAGRAM],
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Atlas Studio</span>
          <span>Sites · Design · Presença digital</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/80">{title}</div>
      <ul className="mt-4 space-y-3">
        {links.map(([l, h]) => (
          <li key={l}>
            <a
              href={h}
              target={h.startsWith("http") ? "_blank" : undefined}
              rel={h.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
