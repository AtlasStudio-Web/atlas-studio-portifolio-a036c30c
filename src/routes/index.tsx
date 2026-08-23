import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/atlas/Nav";
import { Hero } from "@/components/atlas/Hero";
import { About } from "@/components/atlas/About";
import { Services } from "@/components/atlas/Services";
import { InstagramSection } from "@/components/atlas/Instagram";
import { Differentials } from "@/components/atlas/Differentials";
import { Testimonials } from "@/components/atlas/Testimonials";
import { CTA } from "@/components/atlas/CTA";
import { Footer } from "@/components/atlas/Footer";
import { FloatingCTA } from "@/components/atlas/FloatingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATLAS Studio — Design, IA e crescimento digital para marcas modernas" },
      { name: "description", content: "Estúdio digital especializado em landing pages, sites premium, automações com IA, branding e gestão de Instagram para marcas que querem crescer no digital." },
      { property: "og:title", content: "ATLAS Studio — Design, IA & crescimento digital" },
      { property: "og:description", content: "Transformamos negócios comuns em marcas digitais modernas." },
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
      <InstagramSection />
      <Differentials />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
