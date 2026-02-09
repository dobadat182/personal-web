import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";

type ServiceStep = {
  title: string;
  subtitle: string;
  description: string;
};

const STEPS: ServiceStep[] = [
  {
    title: "01",
    subtitle: "Discovery & Goals",
    description:
      "We clarify your vision, target users, and success metrics so every design and technical decision is aligned with real business goals.",
  },
  {
    title: "02",
    subtitle: "UX / UI Design",
    description:
      "I translate ideas into user flows, wireframes, and polished interfaces that feel modern, fast, and easy to use on any device.",
  },
  {
    title: "03",
    subtitle: "Development",
    description:
      "Using React, Next.js, TypeScript, and Tailwind CSS, I build high‑quality, maintainable frontends that are ready to scale with your product.",
  },
  {
    title: "04",
    subtitle: "Launch & Iterate",
    description:
      "Once shipped, I help monitor performance, collect feedback, and refine the product so it keeps improving with every release.",
  },
];

const Services = () => {
  return (
    <Section>
      <Container className="space-y-10">
        <div className="space-y-4 text-center">
          <h2>How I Work With Clients</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm sm:text-base md:text-lg">
            From first idea to shipped product, here&apos;s the process I follow
            to design and build modern web experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {STEPS.map((step) => (
            <article
              key={step.subtitle}
              className="bg-card flex flex-col gap-3 rounded-2xl border border-slate-200 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900/40"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-slate-50 shadow-sm dark:bg-slate-100 dark:text-slate-900">
                  {step.title}
                </span>
                <h3 className="text-foreground text-sm font-semibold sm:text-base">
                  {step.subtitle}
                </h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
