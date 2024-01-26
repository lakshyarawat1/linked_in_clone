import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import Topbar from "./Topbar";
import { MdArticle, MdCollectionsBookmark } from "react-icons/md";
import Search from "antd/es/input/Search";
import { TiMediaFastForward } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Topbar />
      <div className="bg-slate-100 flex py-10">
        <div className="w-1/4">
          <div className="w-[60%] ml-[40%] border-2 rounded-lg bg-white">
            <img
              src="https://media.istockphoto.com/id/1226864145/photo/server-room-with-server-racks-in-datacenter-banner-3d-illustration.jpg?s=612x612&w=0&k=20&c=J0I5ByWvebvd8gBoNQt5YEJgFXp4cwY4hRyVWl8_-Vw="
              className="h-16 w-full rounded-lg"
            />
            <img
              src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg"
              className="h-20 w-20 rounded-full mx-auto -mt-10"
            />
            <br />
            <a>
              <p className="text-center tracking-wide hover:underline">
                Username
              </p>
            </a>
            <p className="text-center text-xs mt-1 text-slate-500 tracking-wide">
              Primary Role
            </p>
            <br />
            <hr />
            <p className="text-xs p-3 text-slate-600 hover:bg-slate-200">
              Profile views
              <span className="ml-[50%]">4</span>
            </p>
            <p className="text-xs px-3 pb-3 text-slate-600 hover:bg-slate-200">
              Post Impressions
              <span className="ml-[35%]">104</span>
            </p>
            <hr />
            <p className="text-xs p-3 text-slate-600 hover:bg-slate-200 flex gap-2 ">
              <MdCollectionsBookmark className="text-lg" />
              My Items
            </p>
          </div>
          <div className="w-[60%] ml-[40%] border-2 rounded-lg mt-4 bg-white">
            <p className="text-sm text-slate-400 m-4">Recent</p>
            <p className="text-sm mx-4 mb-4">All Recent Activities</p>
          </div>
        </div>
        <div className="w-1/2 mx-12 ">
          <div className="bg-white p-3 rounded-lg border-2 ">
            <div className="flex gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg"
                className="h-14 w-14 mx-6 rounded-full"
              />
              <Search className="w-2/3 mt-3" placeholder="Start a post ..." />
            </div>
            <div className="flex gap-24 my-3 mx-[22%]">
              <div className="flex gap-4 cursor-pointer">
                <TiMediaFastForward className="text-lg mt-1 " />
                Media
              </div>
              <div className="flex gap-4 cursor-pointer">
                <SlCalender className="text-lg mt-1 " />
                Event
              </div>
              <div className="flex gap-4 cursor-pointer">
                <MdArticle className="text-lg mt-1 " />
                Article
              </div>
            </div>
          </div>
          <div>
            <Post />
            <Post />
          </div>
        </div>
        <div className="w-1/4  h-full flex  ">
          <div className="w-2/3 p-5 bg-white rounded-lg border-2">
            <h2 className="font-bold tracking-wider">LinkedIn News</h2>
            <ul
              style={{ listStyle: "circle" }}
              className="flex flex-col gap-4 p-8"
            >
              <li>News 1</li>
              <li>News 2</li>
              <li>News 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
