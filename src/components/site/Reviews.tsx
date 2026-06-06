import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const reviews = [
  {
    name: "Mariana A.",
    text: "Carnes maravilhosas, atendimento impecável e ambiente sofisticado. Voltarei sempre!",
    rating: 5,
  },
  {
    name: "Rafael S.",
    text: "Melhor rodízio de Franca. O buffet é completo e o sushi surpreende — verdadeiro luxo.",
    rating: 5,
  },
  {
    name: "Patrícia M.",
    text: "Levei minha família para comemorar e foi inesquecível. Um lugar que cuida de cada detalhe.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Avaliações"
          title={
            <>
              Quem visita,
              <span className="italic text-gold-gradient"> recomenda</span>.
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <div className="font-display text-6xl text-gold-gradient">4.8</div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <div className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Baseado em avaliações reais
          </div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative bg-card border border-border rounded-sm p-8 hover:border-gold/50 transition-colors duration-500"
            >
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <blockquote className="text-muted-foreground leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium">{r.name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
