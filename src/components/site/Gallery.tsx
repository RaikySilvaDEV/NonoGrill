import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import fachada from "@/assets/fachada.jpg";
import ambiente from "@/assets/ambiente.jpg";
import carnes from "@/assets/carnes.jpg";
import buffet from "@/assets/buffet.jpg";
import sushi from "@/assets/sushi.jpg";
import churrasqueiro from "@/assets/churrasqueiro.jpg";

const photos = [
  { src: ambiente, alt: "Salão principal", span: "lg:col-span-2 lg:row-span-2" },
  { src: carnes, alt: "Cortes nobres", span: "" },
  { src: sushi, alt: "Sushi da casa", span: "" },
  { src: buffet, alt: "Buffet completo", span: "lg:col-span-2" },
  { src: churrasqueiro, alt: "Atendimento à mesa", span: "" },
  { src: fachada, alt: "Fachada", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="galeria" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Galeria"
          title={
            <>
              Cada detalhe,
              <span className="italic text-gold-gradient"> uma assinatura</span>.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[240px] gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(p.src)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-sm border border-border ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-xs tracking-[0.2em] uppercase text-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity">
                {p.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl grid place-items-center p-6"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold/40 grid place-items-center text-gold hover:bg-gold hover:text-primary-foreground transition"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              key={open}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={open}
              alt=""
              className="max-w-[92vw] max-h-[88vh] object-contain rounded-sm border border-gold/30"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
