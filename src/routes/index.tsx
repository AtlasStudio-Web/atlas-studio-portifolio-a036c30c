import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/atlas/Nav";
import { Hero } from "@/components/atlas/Hero";
import { About } from "@/components/atlas/About";
import { Services } from "@/components/atlas/Services";
import { Cases } from "@/components/atlas/Cases";
import { Differentials } from "@/components/atlas/Differentials";
import { Testimonials } from "@/components/atlas/Testimonials";
import { CTA } from "@/components/atlas/CTA";
import { Footer } from "@/components/atlas/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATLAS Studio — Sites, branding e automação para pequenas e médias empresas" },
      { name: "description", content: "Estúdio digital especializado em sites, identidade visual e automações sob medida para negócios locais, profissionais e pequenas empresas." },
      { property: "og:title", content: "ATLAS Studio — Sites, branding e automação" },
      { property: "og:description", content: "Presença digital bem feita para negócios que querem crescer com consistência." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Differentials />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
