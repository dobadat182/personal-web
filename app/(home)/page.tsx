import BentoGrid from "./_components/Profile";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import Projects from "./_components/Projects";
import Services from "./_components/Services";
import Contact from "./_components/Contact";

const Home = () => {
  return (
    <main className="font-sans">
      <Section className="flex min-h-screen flex-col items-center justify-center">
        <Container>
          <h1 className="from-foreground to-foreground/70 pointer-events-none bg-linear-to-b bg-clip-text text-center font-semibold text-transparent">
            Draco
          </h1>
        </Container>
      </Section>

      <BentoGrid />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
