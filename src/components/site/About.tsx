import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./SectionTitle";
import ambiente from "@/assets/ambiente.jpg";
import churrasqueiro from "@/assets/churrasqueiro.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 15, suffix: "+", label: "Anos de tradição" },
  { to: 250000, suffix: "+", label: "Clientes atendidos" },
  { to: 98, suffix: "%", label: "Avaliações positivas" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 [background:var(--gradient-radial-gold)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagens */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/20"
            >
              <img
                src={ambiente}
                alt="Salão elegante da Nonno Grill"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -bottom-12 -right-6 lg:-right-16 w-56 sm:w-72 aspect-[4/5] overflow-hidden rounded-sm border border-gold/30 shadow-[var(--shadow-deep)]"
            >
              <img
                src={churrasqueiro}
                alt="Churrasqueiro cortando picanha"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </motion.div>
          </div>

          {/* Texto */}
          <div>
            <SectionTitle
              align="left"
              eyebrow="Nossa Casa"
              title={
                <>
                  Mais que um restaurante,
                  <br />
                  <span className="italic text-gold-gradient">uma tradição</span>.
                </>
              }
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              <p>
                A <span className="text-foreground font-medium">Nonno Grill</span> nasceu em Franca com
                a missão de preservar o ritual sagrado do verdadeiro churrasco brasileiro —
                cortes nobres, braseiro vivo, o sal grosso e o tempo certo.
              </p>
              <p>
                Hoje, somos referência regional em rodízio premium, com um buffet
                generoso, sushi fresco preparado diariamente e um atendimento que
                transforma cada visita em uma celebração.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.1 * i }}
                  className="border-l border-gold/40 pl-4"
                >
                  <div className="font-display text-3xl sm:text-5xl text-gold">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
