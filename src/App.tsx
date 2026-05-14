import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Closing } from "@/components/Closing";
import { Hero } from "@/components/Hero";
import { MessageReveal } from "@/components/MessageReveal";
import { Section } from "@/components/Section";
import { Surprise } from "@/components/Surprise";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For My Best Friend - A digital gift" },
      {
        name: "description",
        content: "A little website made just for you, because you mean more than words can say.",
      },
      { property: "og:title", content: "For My Best Friend" },
      {
        property: "og:description",
        content: "An interactive friendship letter - memories, messages, and a small surprise.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600);
  };

  return (
    <main className="relative">
      <Hero onOpen={handleOpen} />
      <MessageReveal open={open} onClose={() => setOpen(false)} />

      <div ref={messageRef} />

      <Section
        eyebrow="One more thing"
        title={
          <>
            A little <span className="text-gradient italic">surprise</span>
          </>
        }
      >
        <Surprise />
      </Section>

      <Closing />
    </main>
  );
}

export default Index;
