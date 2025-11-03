import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="absolute flex-1 z-40 w-full">
        <div className="flex items-center justify-between mt-10 mx-25">
          <div className="flex gap-x-4 items-center">
            <p className="font-semibold">wut.nattawut3218@gmail.com</p>
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
            <p className="cursor-pointer font-semibold bg-white rounded-xl overflow-hidden w-[100px] h-9 flex items-center justify-center">
              Resume
            </p>
          </div>

          <div className="flex gap-x-4 items-center">
            <p className="text-xl">About</p>/<p className="text-xl">Skill</p>/
            <p className="text-xl">Portfolio</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
