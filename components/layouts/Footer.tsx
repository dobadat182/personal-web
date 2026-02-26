import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Section className="bg-background/80 border-t border-slate-200 backdrop-blur-sm dark:border-slate-800">
      <Container className="text-muted-foreground flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <div className="space-y-1">
          <p className="text-foreground font-medium">
            Davis Do — Frontend Developer
          </p>
          <p className="text-muted-foreground max-w-md text-xs sm:text-sm">
            Crafting modern, performant interfaces with React, Next.js,
            TypeScript and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {year} Davis Do. All rights reserved.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
