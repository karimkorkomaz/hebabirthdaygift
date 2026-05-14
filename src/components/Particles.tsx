import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

// Floating ambient particles for the hero. Customize count or icons here.
const ITEMS = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  Icon: [Heart, Sparkles, Star][i % 3],
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 8 + Math.random() * 8,
  size: 12 + Math.random() * 18,
  opacity: 0.25 + Math.random() * 0.45,
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {ITEMS.map(({ id, Icon, left, delay, duration, size, opacity }) => (
        <motion.div
          key={id}
          className="absolute text-primary/60"
          style={{ left: `${left}%`, bottom: -40, opacity }}
          animate={{ y: [0, -800], x: [0, 30, -30, 0], rotate: [0, 25, -10, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon style={{ width: size, height: size }} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
