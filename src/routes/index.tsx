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
      { title: "ATLAS Studio — Arquitetura digital para marcas de elite" },
      { name: "description", content: "Estúdio premium de IA, automação, branding e crescimento digital. Sistemas inteligentes para marcas que lideram categoria." },
      { property: "og:title", content: "ATLAS Studio — Arquitetura digital para marcas de elite" },
      { property: "og:description", content: "IA, automação e design cinematográfico para marcas high-ticket." },
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
