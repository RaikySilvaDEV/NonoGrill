import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 justify-center mb-5"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
