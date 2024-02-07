import { PiArticleMediumFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { LinkedinFilled } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="md:flex items-center justify-between m-5 gap-2">
      <LinkedinFilled
        twoToneColor="#017bb5"
        className="text-5xl text-[#017bb5] cursor-pointer hover:scale-110"
      />
      <div className="flex gap-1">
        <div className="flex gap-6">
          <button>
            <PiArticleMediumFill className="w-8 h-8 hidden md:block text-[#017bb5] hover:scale-125" />
          </button>
          <button>
            <IoPeopleSharp className="w-8 h-8 hidden md:block text-[#017bb5] hover:scale-125" />
          </button>
          <button>
            <MdOutlineWorkHistory className="w-8 h-8 hidden md:block text-[#017bb5] mr-10 hover:scale-125" />
          </button>
        </div>
        <button className="md:block hidden border  text-[#017bb5] border-[#017bb5] p-2 px-6 hover:bg-black hover:text-white rounded-full">
          <a href="/register">Sign up</a>
        </button>{" "}
        <button className="md:right-0 border text-[#017bb5] border-[#017bb5] p-2 px-6 hover:bg-black hover:text-white rounded-full">
          <a href="/login">Already signed up ?</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
