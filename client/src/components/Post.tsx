import { CgOptions } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";

const Post = (data) => {
  console.log(data);

  return (
    <div className="bg-white p-4 rounded-lg my-5 border-2">
      <div className="flex md:gap-10 gap-2 items-center">
        <img src={data.data.profileImage} className="h-12 w-12 rounded-full" />
        <b className="tracking-wider">Username</b>
        <CgOptions className="ml-[40%] cursor-pointer hover:bg-slate-100 p-3 w-12 h-12" />
        <MdClose className=" cursor-pointer hover:bg-slate-100 p-3 w-12 h-12" />
      </div>
      <div className="text-slate-500 text-xs  mx-20">
        {" "}
        {data.data.timestamp}
      </div>
      <div className="text-sm text-slate-600 mx-8 my-6">
        <p>{data.data.status}</p>
        <div className="flex justify-center my-6">
          <span className="flex gap-5 w-1/2  items-center hover:bg-slate-100 md:px-20 px-10 hover:scale-110 py-2 cursor-pointer">
            <BiSolidLike />
            Like
          </span>
          <span className="flex gap-5 w-1/2  items-center hover:bg-slate-100 md:px-20 px-10 hover:scale-110 py-2 cursor-pointer">
            <FaComment />
            Comment
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
