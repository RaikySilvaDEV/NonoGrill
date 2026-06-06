import { motion } from "motion/react";
import { Beef, Users, Heart, Salad, Fish, Car } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const items = [
  { icon: Beef, title: "Carnes Nobres", desc: "Cortes selecionados, maturados e preparados na brasa viva." },
  { icon: Users, title: "Atendimento Premium", desc: "Equipe treinada para receber você como em casa." },
  { icon: Heart, title: "Ambiente Familiar", desc: "Espaço acolhedor para celebrar com quem importa." },
  { icon: Salad, title: "Buffet Completo", desc: "Variedade diária de saladas, pratos quentes e clássicos." },
  { icon: Fish, title: "Sushi Fresco", desc: "Combinados preparados na hora pelos nossos sushimen." },
  { icon: Car, title: "Estacionamento", desc: "Estacionamento próprio, com segurança e comodidade." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-32 lg:py-40 bg-graphite/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Por que a Nonno Grill"
          title={
            <>
              O padrão que
              <span className="italic text-gold-gradient"> nos define</span>.
            </>
          }
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group bg-background p-10 hover:bg-graphite transition-colors duration-500 relative"
              >
                <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
                <div className="w-14 h-14 rounded-full border border-gold/40 grid place-items-center mb-6 group-hover:border-gold group-hover:bg-gold/5 transition">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-2xl mb-3">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
