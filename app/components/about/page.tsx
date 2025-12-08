import { User } from "lucide-react";

const About = () => {
  return (
    <>
      <div>
        <div
          id="about"
          className="flex items-center justify-center w-full py-10"
        >
          <p className="text-4xl text-center">About</p>
          <User size={40} className="ml-4"/>
        </div>
        <p className="text-center text-balance">
          I started my software journey from photography. Through that, I
          learned to love the process of creating from scratch. Since then, this
          has led me to software development as it fulfills my love for learning
          and building things
        </p>
      </div>
    </>
  );
};
export default About;
