import { motion } from "framer-motion";

// Customize these memory entries with your own friendship moments.
const MEMORIES = [
  {
    year: "Then",
    title: "The day we became close",
    body: "An ordinary day that quietly turned into the start of everything.",
  },
  {
    year: "Always",
    title: "Our funniest moment",
    body: "The kind of laugh that still makes me smile when nobody's around.",
  },
  {
    year: "Forever",
    title: "A memory I'll never forget",
    body: "Some moments live in your chest like a warm light. This is one of them.",
  },
  {
    year: "Today",
    title: "Why I'm grateful for you",
    body: "Because you make ordinary days feel like something worth remembering.",
  },
];

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

      <div className="space-y-10">
        {MEMORIES.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`relative flex sm:items-center ${
              i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <span className="bg-gradient-warm absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-background sm:left-1/2" />
            <div
              className={`glass ml-12 w-full rounded-2xl p-6 sm:ml-0 sm:w-[46%] ${
                i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
              }`}
            >
              <div className="text-xs uppercase tracking-[0.25em] text-primary">{m.year}</div>
              <h3 className="mt-2 text-2xl">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
