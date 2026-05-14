import { motion } from "framer-motion";
import { Heart, Smile, Sparkles, Star } from "lucide-react";

// Customize the reasons you're grateful for them.
const REASONS = [
  {
    Icon: Sparkles,
    title: "You make everything better",
    body: "Even the dullest day feels brighter when you're in it.",
  },
  {
    Icon: Heart,
    title: "You always understand me",
    body: "Without explanation, without judgement. Always.",
  },
  {
    Icon: Smile,
    title: "You bring happiness everywhere",
    body: "Your energy is a kind of small magic.",
  },
  {
    Icon: Star,
    title: "You are truly one of a kind",
    body: "There is no one else quite like you. Not even close.",
  },
];

export function Reasons() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {REASONS.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="glass group relative overflow-hidden rounded-3xl p-8"
        >
          <div className="bg-gradient-warm shadow-soft mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
            <r.Icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="text-2xl">{r.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/30 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
        </motion.div>
      ))}
    </div>
  );
}
