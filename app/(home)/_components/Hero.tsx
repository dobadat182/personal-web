import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";
import { Ripple } from "@/components/ui/ripple";

const Hero = () => {
  return (
    <Section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Container>
        <h1 className="from-foreground to-foreground/70 pointer-events-none bg-linear-to-b bg-clip-text text-center font-bold text-balance text-transparent">
          Draco Do
        </h1>
      </Container>
      <Ripple />
    </Section>
  );
};

export default Hero;
