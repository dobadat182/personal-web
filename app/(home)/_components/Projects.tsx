import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Safety Path",
    description:
      "A comprehensive safety management system with real-time monitoring and alert features for construction sites.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    name: "Safety Path",
    description:
      "A comprehensive safety management system with real-time monitoring and alert features for construction sites.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    name: "Safety Path",
    description:
      "A comprehensive safety management system with real-time monitoring and alert features for construction sites.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    name: "Safety Path",
    description:
      "A comprehensive safety management system with real-time monitoring and alert features for construction sites.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    name: "Safety Path",
    description:
      "A comprehensive safety management system with real-time monitoring and alert features for construction sites.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    name: "Safety Path",
    description:
      "A comprehensive safety management system with real-time monitoring and alert features for construction sites.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
];

const Projects = () => {
  return (
    <Section>
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <h2>Projects</h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-sm sm:text-base md:text-lg">
            A selection of projects I&apos;ve worked on recently.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <article
              key={`${project.name}-${index}`}
              className="bg-card flex flex-col rounded-2xl border border-slate-200 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)] dark:border-slate-700 dark:bg-slate-900/40"
            >
              <header className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-foreground text-sm font-semibold sm:text-base">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                    {project.description}
                  </p>
                </div>
                {project.href && (
                  <Button variant="link" asChild size="icon">
                    <Link href={project.href}>
                      <IconExternalLink className="h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                )}
              </header>

              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex h-32 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-xs text-slate-500 sm:text-sm dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
                No image available
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="default" size="lg">
            View More
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
