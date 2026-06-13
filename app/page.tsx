import Education from "./components/education/page";
import About from "./components/about/page";
import Skill from "./components/skill/page";
import HomeButton from "./components/HomeButton";
import Footer from "./components/footer";
import Home from "./components/home/page";
import ScrollProgression from "./components/scrollProgression";
import Project from "./components/project/page";

const HomePage = () => {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero (full-bleed concrete) */}
      <Home />

      {/* Calm, centered sections */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <About />
        <Education />
        <Skill />
      </div>

      {/* Projects (full-bleed concrete band) */}
      <Project />

      <Footer />

      <HomeButton />
      <ScrollProgression />
    </main>
  );
};
export default HomePage;
