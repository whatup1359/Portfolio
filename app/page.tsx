import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Education from "./components/education";
import About from "./components/about";
import Skill from "./components/skill";


const HomePage = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="w-full h-[800px]">
          <div className="relative w-full h-full rounded-b-[130px] overflow-hidden">
            <Image
              src={"/backgrounds/concretebg2.jpg"}
              alt="concretebg"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 -mt-[550px] space-y-10 flex flex-col items-center justify-center">
            <div className="w-50 h-50 rounded-full">
              <Image
                src={"/profile.jpg"}
                alt="profile"
                width={150}
                height={150}
                className="rounded-full flex items-center justify-center w-full h-full border-6"
              />
            </div>
            <div>
              <h1 className="text-5xl font-semibold">Nattawut Chanput</h1>
            </div>
            <button className="cursor-pointer bg-black text-white px-15 py-3 rounded-full flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-400">
              <ArrowDown className="animate-bounce" />
            </button>
          </div>
        </div>

        {/* -----------Education----------- */}
        <div className="relative">
          <div className="absolute inset-0 z-10">
            <About />
          </div>
          <div className="bg-neutral-50 w-full h-60 rounded-b-[130px]" />
        </div>

        <div className="relative w-full h-[750px]">
          <div className="absolute inset-0">
            <Education />
          </div>
          <div className="relative -z-10 bottom-35 h-full w-full overflow-hidden">
            <Image src={"/backgrounds/concretebg2.jpg"} alt="concretebg" fill />
          </div>
        </div>

        <div className="relative -z-10 bottom-65">
          <div className="absolute z-10 inset-0">
            <Skill />
          </div>
          <div className="bg-neutral-50 w-full h-60 rounded-t-[130px]" />
        </div>

          <div className="relative bottom-65 w-full h-[800px] rounded-t-[130px] rounded-b-[130px] overflow-hidden">
            <Image src={"/backgrounds/concretebg2.jpg"} alt="concretebg" fill />
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>

        {/* -----------Footer----------- */}
        <div className="px-20 mt-10 z-40 w-full h-[150px]">
          <div>
            <div className="border" />
          </div>
          <div className="pt-10 flex items-center justify-between">
            <p>© 2025 WutDEV All rights reserved.</p>
            <div className="flex gap-x-8">
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
