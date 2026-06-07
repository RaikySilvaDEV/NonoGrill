import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const ADDRESS = "Rua dos Pracinhas, 375, Franca - SP";
const MAPS_QUERY = encodeURIComponent(ADDRESS);

export function Location() {
  return (
    <section id="localizacao" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Localização"
          title={
            <>
              Venha nos
              <span className="italic text-gold-gradient"> visitar</span>.
            </>
          }
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-card border border-border rounded-sm p-10 flex flex-col justify-between"
          >
            <div>
              <MapPin className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-display text-3xl mb-4">Nonno Grill</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rua dos Pracinhas, 375
                <br />
                Franca — São Paulo
              </p>
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between border-b border-border py-2">
                  <span>Ter — Sáb</span>
                  <span className="text-foreground">11h30–15h | 19h–23h</span>
                </div>
                <div className="flex justify-between border-b border-border py-2">
                  <span>Domingo</span>
                  <span className="text-foreground">11h30–16h (Almoço)</span>
                </div>
                <div className="flex justify-between py-2 text-red-500 font-medium">
                  <span>Segunda-feira</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              <Navigation className="w-4 h-4" />
              Como Chegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 rounded-sm overflow-hidden border border-border min-h-[420px] relative"
          >
            <iframe
              title="Mapa Nonno Grill"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              loading="lazy"
              className="w-full h-full min-h-[420px] grayscale contrast-125"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
