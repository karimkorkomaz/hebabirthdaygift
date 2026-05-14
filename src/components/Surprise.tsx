import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { Gift } from "lucide-react";
import { useState } from "react";

export function Surprise() {
  const [revealed, setRevealed] = useState(false);

  const fire = () => {
    setRevealed(true);
    const end = Date.now() + 1200;
    const colors = ["#f4a3a0", "#f3c9a3", "#f6d27a", "#e0a8c7", "#ffffff"];
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.7 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  return (
    <div className="glass-strong mx-auto flex max-w-2xl flex-col items-center rounded-3xl px-8 py-14 text-center">
      <motion.div
        animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
        className="bg-gradient-warm shadow-glow mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
      >
        <Gift className="h-7 w-7 text-primary-foreground" />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={fire}
        className="bg-gradient-warm shadow-soft rounded-full px-8 py-4 text-base font-medium text-primary-foreground"
      >
        Click for a surprise
      </motion.button>

      <AnimatePresence>
        {revealed && (
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-gradient mt-8 font-display text-3xl italic sm:text-4xl"
          >
            You deserve the whole world, bestie.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
