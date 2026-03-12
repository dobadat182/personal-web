import BentoGrid from "./_components/Profile";
import Projects from "./_components/Projects";
import Services from "./_components/Services";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <BentoGrid />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
