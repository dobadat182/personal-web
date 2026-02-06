import BentoGrid from "./components/BentoGrid";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import Lorems from "./components/lorems";

const Home = () => {
  return (
    <main className="font-sans">
      <Section className="flex flex-col items-center justify-center min-h-screen">
        <Container>
          <h1 className="pointer-events-none bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-center font-semibold text-transparent">
            Draco
          </h1>
        </Container>
      </Section>

      <Section>
        <BentoGrid />
      </Section>

      <Section>
        <Lorems />
      </Section>
    </main>
  );
};

export default Home;
