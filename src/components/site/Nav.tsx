import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#galeria", label: "Galeria" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#reservas", label: "Reservas" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gold/50 grid place-items-center group-hover:border-gold transition">
            <Flame className="w-4 h-4 text-gold" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">Nonno Grill</div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Churrascaria</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#reservas"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-primary-foreground text-sm font-medium hover:shadow-[var(--shadow-gold)] transition-shadow"
        >
          Reservar
        </a>
      </div>
    </motion.header>
  );
}
