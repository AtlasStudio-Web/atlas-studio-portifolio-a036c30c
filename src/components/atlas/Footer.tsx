import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Arquitetura digital, IA e estratégia para marcas que lideram categoria.
            </p>
          </div>

          <FooterCol title="Navegação" links={[
            ["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Cases", "#cases"], ["Contato", "#contato"],
          ]} />
          <FooterCol title="Serviços" links={[
            ["Automação IA", "#"], ["Sites premium", "#"], ["Branding", "#"], ["Tráfego", "#"],
          ]} />
          <FooterCol title="Social" links={[
            ["Instagram", "#"], ["LinkedIn", "#"], ["Behance", "#"], ["Dribbble", "#"],
          ]} />
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} ATLAS Studio · Todos os direitos reservados
          </div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            Crafted with precision · São Paulo / Global
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-[11px] tracking-[0.3em] uppercase text-foreground/80">{title}</div>
      <ul className="mt-5 space-y-3">
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
