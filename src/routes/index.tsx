import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/atlas/Nav";
import { CinematicHero } from "@/components/atlas/CinematicHero";
import { WhatWeDo } from "@/components/atlas/WhatWeDo";
import { HorizontalProjects } from "@/components/atlas/HorizontalProjects";
import { Process } from "@/components/atlas/Process";
import { Manifesto } from "@/components/atlas/Manifesto";
import { ContactCTA } from "@/components/atlas/ContactCTA";
import { Footer } from "@/components/atlas/Footer";
import { FloatingCTA } from "@/components/atlas/FloatingCTA";
import { CustomCursor } from "@/components/ui/custom-cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Studio — Sites, Design & Digital" },
      {
        name: "description",
        content:
          "A Atlas Studio cria experiências digitais, sites e estratégias de presença online para empresas que querem crescer.",
      },
      { property: "og:title", content: "Atlas Studio — Sites, Design & Digital" },
      {
        property: "og:description",
        content:
          "Sites, landing pages, conteúdo e marketing para empresas que querem ser percebidas de outra forma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://atlas-studio-portifolio.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="topo" className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="grain" aria-hidden />
      <CustomCursor />
      <Nav />
      <main>
        <CinematicHero />
        <WhatWeDo />
        <HorizontalProjects />
        <Process />
        <Manifesto />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
