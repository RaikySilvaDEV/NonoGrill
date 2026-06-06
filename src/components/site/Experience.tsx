import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";
import carnes from "@/assets/carnes.jpg";
import buffet from "@/assets/buffet.jpg";
import sushi from "@/assets/sushi.jpg";
import sobremesa from "@/assets/sobremesa.jpg";

const items = [
  {
    title: "Rodízio Premium",
    desc: "Cortes nobres servidos à mesa no ponto perfeito — picanha, fraldinha, costela e mais.",
    img: carnes,
  },
  {
    title: "Buffet Completo",
    desc: "Saladas frescas, pratos quentes, frutos do mar e iguarias regionais, todos os dias.",
    img: buffet,
  },
  {
    title: "Sushi Fresco",
    desc: "Combinados elaborados diariamente por nossos sushimen, com o melhor do mar.",
    img: sushi,
  },
  {
    title: "Sobremesas",
    desc: "Finalize com doces artesanais, frutas selecionadas e clássicos da confeitaria.",
    img: sobremesa,
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative py-32 lg:py-40 bg-graphite/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="A Experiência"
          title={
            <>
              Uma jornada gastronômica em
              <span className="italic text-gold-gradient"> quatro tempos</span>.
            </>
          }
          description="Do primeiro corte ao último gole, cada momento é cuidadosamente desenhado para encantar."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-sm border border-border bg-card aspect-[3/4]"
            >
              <img
                src={it.img}
                alt={it.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                loading="lazy"
                width={1280}
                height={960}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors duration-700" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700">
                  {it.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
