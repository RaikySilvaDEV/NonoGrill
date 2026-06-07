import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import heroVideo from "@/assets/Nonno_Grill_restaurant_exterior_…_202606062342.mp4";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLeftHeroRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) {
      return;
    }

    const replayVideo = () => {
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          hasLeftHeroRef.current = true;
          return;
        }

        if (hasLeftHeroRef.current) {
          replayVideo();
          hasLeftHeroRef.current = false;
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={heroImg}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,oklch(0.04_0_0/0.85)_80%)]" />
      <div className="absolute inset-0 [background-image:linear-gradient(transparent_0,transparent_calc(100%-1px),oklch(1_0_0/0.04)_100%)] [background-size:100%_3px] pointer-events-none" />

      {/* Floating gold dot */}
      <div className="absolute top-1/3 right-[15%] w-[420px] h-[420px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center py-32">
        <motion.div
          initial={{ opacity: 0.01, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/40 bg-background/40 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] tracking-[0.3em] text-gold uppercase">
            Franca · São Paulo · Desde sempre
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0.01, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] tracking-tight"
        >
          A tradição do verdadeiro
          <br />
          <span className="italic shimmer-gold">churrasco em Franca.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0.01, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Rodízio premium, buffet completo, sushi e uma experiência gastronômica
          inesquecível — servida com a alma da casa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0.01, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#reservas"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-primary-foreground font-medium tracking-wide hover:shadow-[var(--shadow-gold)] transition-all duration-500"
          >
            Reservar Mesa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#experiencia"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/20 text-foreground hover:border-gold hover:text-gold transition-all duration-500 backdrop-blur-sm"
          >
            <UtensilsCrossed className="w-4 h-4" />
            Ver Cardápio
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0.01 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
      >
        <div className="flex flex-col items-center gap-3">
          <span>Role para descobrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
