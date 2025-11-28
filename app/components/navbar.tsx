import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="absolute flex-1 z-40 w-full">
        <div className="flex items-center justify-between mt-10 mx-25">
          <div className="flex gap-x-4 items-center">
            <p className="font-semibold">wut.nattawut3218@gmail.com</p>
            <div className="hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
              <Link
                href={"https://github.com/whatup1359"}
                className="cursor-pointer bg-black rounded-xl overflow-hidden w-[100px] h-9 flex items-center justify-center"
              >
                <Image
                  src={"/icons/github/githubicon1.png"}
                  alt="githubicon1"
                  width={70}
                  height={100}
                  className="w-max h-max"
                />
              </Link>
            </div>
            <div className="hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
              <p className="cursor-pointer font-semibold bg-white rounded-xl overflow-hidden w-[100px] h-9 flex items-center justify-center">
                Resume
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 items-center">
            <p className="cursor-pointer text-xl hover:scale-105 transition-all ease-in-out duration-300">About</p>/
            <p className="cursor-pointer text-xl hover:scale-105 transition-all ease-in-out duration-300">Skill</p>/
            <p className="cursor-pointer text-xl hover:scale-105 transition-all ease-in-out duration-300">Portfolio</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
