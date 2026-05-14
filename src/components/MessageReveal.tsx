import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MessageReveal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/30 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative z-10 max-w-xl rounded-3xl p-10 text-center sm:p-14"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 12 }}
              className="bg-gradient-warm shadow-glow mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full"
            >
              <Heart className="h-7 w-7 text-primary-foreground" fill="currentColor" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl">A note for you</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              You are not just my best friend, you are one of the best parts of my life. I know
              I've said it a million times, but I will say it again: I love you so so freaking much, and I will always be there for you even in your darkest days. You're my everything.
              
            </p>
            <button
              onClick={onClose}
              className="mt-8 rounded-full border border-border px-6 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              Continue
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
