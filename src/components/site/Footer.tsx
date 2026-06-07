import { Flame, Instagram, Facebook, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-gold/50 grid place-items-center">
                <Flame className="w-4 h-4 text-gold" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-xl">Nonno Grill</div>
                <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Churrascaria</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A tradição do verdadeiro churrasco brasileiro, servida em um ambiente sofisticado em Franca-SP.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Navegação</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-gold transition">Sobre</a></li>
              <li><a href="#experiencia" className="hover:text-gold transition">Experiência</a></li>
              <li><a href="#galeria" className="hover:text-gold transition">Galeria</a></li>
              <li><a href="#reservas" className="hover:text-gold transition">Reservas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                Rua dos Pracinhas, 375 — Franca/SP
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:1637224032" className="hover:text-gold transition">(16) 3722-4032</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Horários</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Ter — Sáb · 11h30 às 15h · 19h às 23h</li>
              <li>Domingo · 11h30 às 16h (Almoço)</li>
              <li>Segunda-feira · Fechado</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/nonno_grill" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-gold hover:text-gold transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/nonnogrillfranca" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-gold hover:text-gold transition">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Nonno Grill Churrascaria. Todos os direitos reservados.</span>
          <span className="tracking-[0.3em] uppercase text-gold">Franca · SP</span>
        </div>
      </div>
    </footer>
  );
}
