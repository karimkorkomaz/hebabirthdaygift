import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Particles } from "./Particles";

interface HeroProps {
  onOpen: () => void;
}

export function Hero({ onOpen }: HeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <Particles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="glass relative z-10 mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />An Early birthday gift
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
        className="relative z-10 max-w-4xl text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
      >
        For My <span className="text-gradient italic">Princess</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
      >
        This is one of your birthday gifts, because you mean more than words can say.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        className="bg-gradient-warm shadow-glow relative z-10 mt-10 rounded-full px-9 py-4 text-base font-medium text-primary-foreground transition-shadow hover:shadow-[0_25px_70px_-15px_oklch(0.65_0.2_25/0.6)]"
      >
        Open Your Gift
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 z-10 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
