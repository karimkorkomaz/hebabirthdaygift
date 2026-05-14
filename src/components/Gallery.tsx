import { motion } from "framer-motion";

// Replace these with your own photos. Keep aspect ratios for best results.
const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&q=80",
    caption: "Golden afternoons",
  },
  {
    src: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=900&q=80",
    caption: "Endless laughs",
  },
  {
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80",
    caption: "Quiet adventures",
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900&q=80",
    caption: "Long talks, longer walks",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=80",
    caption: "Festival nights",
  },
  {
    src: "https://images.unsplash.com/photo-1502536201613-f31a1d2d8c69?w=900&q=80",
    caption: "Sunsets together",
  },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PHOTOS.map((p, i) => (
        <motion.figure
          key={p.src}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
          whileHover={{ y: -6 }}
          className="glass group overflow-hidden rounded-3xl p-2"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <figcaption className="px-3 py-3 text-center text-sm italic text-muted-foreground">
            {p.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
