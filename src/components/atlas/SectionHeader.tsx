import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`inline-flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-white/30" />
        <span className="text-[11px] tracking-[0.32em] uppercase text-muted-foreground">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.05]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-muted-foreground leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
