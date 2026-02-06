import BentoGrid from "./components/BentoGrid";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import Lorems from "./components/lorems";

const Home = () => {
  return (
    <>
      <Section className="flex flex-col items-start justify-center gap-12 md:flex-row md:items-center h-screen">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <span className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
              <h1>Davis Do</h1>
            </span>
          </div>
        </Container>
      </Section>

      <Section>
        <BentoGrid />
      </Section>

      <Section>
        <Lorems />
      </Section>
    </>
  );
};

export default Home;
