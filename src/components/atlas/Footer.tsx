import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Estúdio digital focado em sites, identidade visual e automações
              para pequenas e médias empresas.
            </p>
          </div>

          <FooterCol title="Navegação" links={[
            ["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Trabalhos", "#cases"], ["Processo", "#diferenciais"], ["Contato", "#contato"],
          ]} />
          <FooterCol title="Serviços" links={[
            ["Sites", "#servicos"], ["Landing pages", "#servicos"], ["Identidade visual", "#servicos"], ["Automações", "#servicos"],
          ]} />
          <FooterCol title="Contato" links={[
            ["contato@atlas.studio", "mailto:contato@atlas.studio"], ["WhatsApp", "https://wa.me/5511999999999"], ["Instagram", "#"], ["LinkedIn", "#"],
          ]} />
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ATLAS Studio · Todos os direitos reservados
          </div>
          <div className="text-xs text-muted-foreground">
            São Paulo · Brasil
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
            <a href={h} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
