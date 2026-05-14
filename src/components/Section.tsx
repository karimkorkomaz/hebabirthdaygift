import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  id?: string;
}

export function Section({ eyebrow, title, description, children, id }: Props) {
  return (
    <section id={id} className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          {eyebrow && (
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
          )}
          <h2 className="text-4xl sm:text-5xl md:text-6xl">{title}</h2>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
