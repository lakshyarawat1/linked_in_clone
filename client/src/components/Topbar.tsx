import Search from "antd/es/input/Search";
import { FaBell, FaBriefcase, FaHome } from "react-icons/fa";
import { MdMenu, MdPeople } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoBag } from "react-icons/io5";
import { Image } from "antd";
import { SetStateAction } from "react";

const Topbar = ({ setPopupOpen }: React.Dispatch<SetStateAction<boolean>>) => {
  return (
    <div className="flex gap-6 m-3">
      <Image src="logo.png" width={40} className="h-10 w-10 mr-10" />
      <Search
        placeholder="Search here ...."
        size="large"
        className="w-1/4 mr-56 hidden md:block"
      />
      <div className="md:flex hidden gap-6">
        <FaHome className="h-11 w-12 text-slate-700 bg-slate-100 px-1 py-3 rounded-xl hover:bg-blue-500 cursor-pointer hover:text-slate-100" />
        <MdPeople className="h-11 w-12 text-slate-700 bg-slate-100 px-1 py-3 rounded-xl hover:bg-blue-500 cursor-pointer hover:text-slate-100" />
        <FaBriefcase className="h-11 w-12 text-slate-700 bg-slate-100 px-1 py-3 rounded-xl hover:bg-blue-50 cursor-pointer hover:text-slate-100" />
        <AiFillMessage className="h-11 w-12 text-slate-700 bg-slate-100 px-1 py-3 rounded-xl hover:bg-blue-500 cursor-pointer hover:text-slate-100" />
        <FaBell className="h-11 w-12 text-slate-700 bg-slate-100 px-1 py-3 rounded-xl hover:bg-blue-500 cursor-pointer hover:text-slate-100" />
      </div>
      <CgProfile
        onClick={() => setPopupOpen(true)}
        className="md:mx-0 ml-[55%] h-11 w-12 text-slate-700 bg-slate-100 px-1 py-3 rounded-xl hover:bg-blue-500 cursor-pointer hover:text-slate-100"
      />
      <br />
      <div className="md:flex hidden gap-6 border-l-2 pl-10">
        <MdMenu className="h-11 w-12 text-slate-700 bg-slate-100 px-1 py-3 rounded-xl hover:bg-blue-500 cursor-pointer hover:text-slate-100" />
        <IoBag className="h-11 w-12 text-slate-700 bg-slate-100 px-1 py-3 rounded-xl hover:bg-blue-500 cursor-pointer hover:text-slate-100" />
      </div>
    </div>
  );
};

export default Topbar;
