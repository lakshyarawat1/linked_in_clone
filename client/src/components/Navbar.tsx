import { PiArticleMediumFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex items-center m-5 gap-2">
      <h1 className="text-3xl font-bold text-[#017bb5]">Linked </h1>
      <img src="logo.png" alt="logo" className="h-12 w-12" />
      <div className="flex gap-6 ml-[54%]">
        <button>
          <PiArticleMediumFill className="w-8 h-8 text-[#017bb5] hover:bg-slate-200" />
        </button>
        <button>
          <IoPeopleSharp className="w-8 h-8 text-[#017bb5] hover:bg-slate-200" />
        </button>
        <button>
          <MdOutlineWorkHistory className="w-8 h-8 text-[#017bb5] mr-10 hover:bg-slate-200" />
        </button>
      </div>
      <button className="right-0 border border-black p-2 px-6 hover:bg-black hover:text-white rounded-full">
        <a href="/register">Sign up</a>
      </button>{" "}
      <button className="right-0 border border-black p-2 px-6 hover:bg-black hover:text-white rounded-full">
        <a href="/login">Already signed up ?</a>
      </button>
    </nav>
  );
};

export default Navbar;
