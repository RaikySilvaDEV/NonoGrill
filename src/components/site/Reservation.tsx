import { motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(80),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  data: z.string().min(1, "Escolha uma data"),
  horario: z.string().min(1, "Escolha um horário"),
  pessoas: z.string().min(1, "Informe a quantidade"),
});

const WHATSAPP_NUMBER = "5516000000000"; // substituir pelo número real

export function Reservation() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = result.data;
    const msg = `Olá! Gostaria de reservar uma mesa na Nonno Grill.%0A%0A*Nome:* ${encodeURIComponent(
      d.nome
    )}%0A*Telefone:* ${encodeURIComponent(d.telefone)}%0A*Data:* ${encodeURIComponent(
      d.data
    )}%0A*Horário:* ${encodeURIComponent(d.horario)}%0A*Pessoas:* ${encodeURIComponent(
      d.pessoas
    )}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const field = "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors";

  return (
    <section id="reservas" className="relative py-32 lg:py-40 bg-graphite/40 overflow-hidden">
      <div className="absolute inset-0 [background:var(--gradient-radial-gold)] pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Reservas"
          title={
            <>
              Garanta a sua
              <span className="italic text-gold-gradient"> mesa</span>.
            </>
          }
          description="Preencha o formulário e finalize sua reserva diretamente pelo WhatsApp em segundos."
        />

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mt-16 bg-card border border-border rounded-sm p-8 sm:p-12 grid sm:grid-cols-2 gap-x-8 gap-y-6"
        >
          <div className="sm:col-span-2">
            <label className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Nome</label>
            <input name="nome" type="text" placeholder="Seu nome completo" className={field} />
            {errors.nome && <p className="text-xs text-destructive mt-1">{errors.nome}</p>}
          </div>
          <div>
            <label className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Telefone</label>
            <input name="telefone" type="tel" placeholder="(16) 99999-9999" className={field} />
            {errors.telefone && <p className="text-xs text-destructive mt-1">{errors.telefone}</p>}
          </div>
          <div>
            <label className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Pessoas</label>
            <input name="pessoas" type="number" min={1} max={50} placeholder="4" className={field} />
            {errors.pessoas && <p className="text-xs text-destructive mt-1">{errors.pessoas}</p>}
          </div>
          <div>
            <label className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Data</label>
            <input name="data" type="date" className={`${field} [color-scheme:dark]`} />
            {errors.data && <p className="text-xs text-destructive mt-1">{errors.data}</p>}
          </div>
          <div>
            <label className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Horário</label>
            <input name="horario" type="time" className={`${field} [color-scheme:dark]`} />
            {errors.horario && <p className="text-xs text-destructive mt-1">{errors.horario}</p>}
          </div>

          <div className="sm:col-span-2 mt-6">
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-gold text-primary-foreground font-medium tracking-wide hover:shadow-[var(--shadow-gold)] transition-all duration-500"
            >
              <MessageCircle className="w-5 h-5" />
              Reservar pelo WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
