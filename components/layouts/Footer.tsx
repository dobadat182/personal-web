import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Section className="border-t border-slate-200 bg-background/80 backdrop-blur-sm dark:border-slate-800">
      <Container className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <div className="space-y-1">
          <p className="font-medium text-foreground">
            Draco Do — Frontend Developer
          </p>
          <p className="max-w-md text-xs text-muted-foreground sm:text-sm">
            Crafting modern, performant interfaces with React, Next.js,
            TypeScript and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          <p className="text-xs text-muted-foreground sm:text-sm">
            © {year} Draco Do. All rights reserved.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;

