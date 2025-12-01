import { ChevronUp } from "lucide-react";
import Link from "next/link";

const BackButton = () => {
  return (
    <>
      <div className="fixed bottom-20 right-15 z-50">
        <Link href="#home" className="cursor-pointer shadow-xl hover:shadow-xl flex items-center justify-center bg-black text-white px-4 py-4 rounded-full hover:scale-105 transition-all ease-in-out duration-300">
          <ChevronUp className="animate-bounce" />
        </Link>
      </div>
    </>
  );
};
export default BackButton;
