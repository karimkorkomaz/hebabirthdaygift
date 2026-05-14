import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Closing() {
  return (
    <section className="relative px-6 py-32 text-center">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mx-auto mb-10 inline-flex h-24 w-24 items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="bg-gradient-warm absolute inset-0 rounded-full blur-2xl"
          />
          <div className="bg-gradient-warm shadow-glow relative flex h-20 w-20 items-center justify-center rounded-full">
            <Heart className="h-9 w-9 text-primary-foreground" fill="currentColor" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl leading-tight sm:text-5xl md:text-6xl"
        >
          No matter where life takes us,{" "}
          <span className="text-gradient italic">I'll always be there for you.</span>
        </motion.h2>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> love
        </motion.footer>
      </div>
    </section>
  );
}
