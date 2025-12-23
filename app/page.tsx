import Image from "next/image";
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
    <>
      <div className="relative w-full h-screen">
        <div className="w-full h-[800px]">
          <div
            id="home"
            className="relative w-full h-full rounded-b-[130px] overflow-hidden"
          >
            <Image
              src={"/backgrounds/concretebg2.jpg"}
              alt="concretebg"
              fill
              className="object-cover"
            />
          </div>

          {/* -----------Home----------- */}
          <Home />
        </div>

        {/* -----------About----------- */}
        <div className="relative">
          <div className="absolute inset-0 z-10">
            <About />
          </div>
          <div className="bg-neutral-100 w-full h-90 xl:h-60 lg:h-60 md:h-70 sm:h-80 rounded-b-[130px]" />
        </div>

        {/* -----------Education----------- */}
        <div className="relative w-full h-[750px]">
          <div className="absolute inset-0">
            <Education />
          </div>
          <div className="relative -z-10 bottom-35 h-[950px] xl:h-[800px] lg:h-[800px] md:h-[800px] w-full overflow-hidden">
            <Image src={"/backgrounds/concretebg2.jpg"} alt="concretebg" fill />
          </div>
        </div>

        {/* -----------Skill----------- */}
        <div className="relative -z-10 bottom-25 xl:bottom-65 lg:bottom-65 md:bottom-65">
          <div className="absolute z-10 inset-0">
            <Skill />
          </div>
          <div className="bg-neutral-100 w-full h-60 rounded-t-[130px]" />
        </div>

        {/* -----------Project----------- */}
        <div className="relative bottom-25 xl:bottom-65 lg:bottom-65 md:bottom-65 w-full h-[800px] rounded-t-[130px] rounded-b-[130px] overflow-hidden">
          <Image src={"/backgrounds/concretebg2.jpg"} alt="concretebg" fill />
          <div className="absolute inset-0 flex items-center justify-center">
            <Project />
          </div>
        </div>

        {/* -----------Footer----------- */}
        <div>
          <Footer />
        </div>

        {/* -----------HomeButton----------- */}
        <div>
          <HomeButton />
        </div>

        <ScrollProgression />
      </div>
    </>
  );
};
export default HomePage;
