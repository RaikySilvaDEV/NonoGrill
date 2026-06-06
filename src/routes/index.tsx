import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Gallery } from "@/components/site/Gallery";
import { Differentials } from "@/components/site/Differentials";
import { Reviews } from "@/components/site/Reviews";
import { Reservation } from "@/components/site/Reservation";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nonno Grill Churrascaria · Rodízio Premium em Franca-SP" },
      {
        name: "description",
        content:
          "Rodízio premium, buffet completo, sushi e uma experiência gastronômica inesquecível em Franca/SP. Reserve sua mesa na Nonno Grill.",
      },
      { property: "og:title", content: "Nonno Grill Churrascaria · Franca-SP" },
      {
        property: "og:description",
        content: "A tradição do verdadeiro churrasco em Franca. Rodízio premium, buffet, sushi e atendimento impecável.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <Differentials />
        <Reviews />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
