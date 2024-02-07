import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../../firebase";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import { MdArticle, MdCollectionsBookmark } from "react-icons/md";
import Search from "antd/es/input/Search";
import { TiMediaFastForward } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import Post from "../components/Post";
import { Button, Image, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaRegSmile, FaRegStar } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { getCurrentUser, getPosts, postStatus } from "../api/FirebaseAPI";
import { userContext } from "../context/userContext";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  const { setCurrentUser, currentUser } = useContext(userContext);

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

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStatus = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStatus(e.target.value);
  };

  useMemo(() => {
    getPosts(setAllStatus);
    getCurrentUser(setCurrentUser);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Topbar setPopupOpen={setPopupOpen} />
      <Modal
        className="absolute right-10 top-10 bg-white rounded-lg border-2"
        title="Profile"
        footer={[
          <Button
            key="submit"
            type="default"
            onClick={() => {
              setPopupOpen(false);
            }}
          >
            Close
          </Button>,
        ]}
        width={350}
        open={popupOpen}
      >
        <div className="flex gap-4 items-center">
          <img src={currentUser.imageLink} className="h-14 w-14 rounded-full" />
          <p className="text-lg capitalize flex flex-col">
            {currentUser.username}{" "}
            <span className="text-sm text-slate-400">Primary Role</span>
          </p>
        </div>
        <Button type="default" className="w-full my-4">
          View Profile
        </Button>
        <hr />
        <br />
        <div>
          <p className="my-2 font-semibold tracking-wider">Account</p>
          <ul className="text-xs flex flex-col text-slate-600">
            <li className="hover:bg-slate-100 py-1 px-3 rounded-md">
              Settings & Privacy
            </li>
            <li className="hover:bg-slate-100 py-1 px-3 rounded-md">Help</li>
            <li className="hover:bg-slate-100 py-1 px-3 rounded-md">
              Language
            </li>
          </ul>
        </div>
        <br />
        <hr />
        <br />
        <Button
          type="default"
          className="w-full my-4"
          danger
          onClick={() => handleSignOut()}
        >
          Sign Out
        </Button>
      </Modal>
      <Modal
        title="Create a post"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        width={800}
        footer={[
          <Button
            key="submit"
            type="default"
            disabled={status.length > 0 ? false : true}
            onClick={() => {
              postStatus(status);
              setIsModalOpen(false);
            }}
          >
            Post
          </Button>,
        ]}
      >
        <div className="my-10 mx-4 flex gap-5 items-center">
          <Image
            src={currentUser.imageLink}
            className="h-20 w-20 rounded-full"
            width={80}
          />
          <p className="text-xl"></p>
        </div>
        <TextArea
          className="w-[80%]"
          autoSize
          autoFocus
          placeholder="Write your post ... "
          onChange={(e) => handleStatus(e)}
        />
        <FaRegSmile className="p-2 m-3 text-4xl hover:bg-slate-100" />
        <div className="flex gap-5 mx-3 text-4xl">
          <GrGallery className="p-2 hover:bg-slate-100" />
          <MdArticle className="p-2 hover:bg-slate-100" />
          <FaRegStar className="p-2 hover:bg-slate-100" />
        </div>
      </Modal>
      <div className="bg-slate-100 flex py-10">
        <div className="w-[30%] hidden md:block">
          <div className="w-[60%] ml-[40%] border-2 rounded-lg bg-white">
            <img
              src="https://media.istockphoto.com/id/1226864145/photo/server-room-with-server-racks-in-datacenter-banner-3d-illustration.jpg?s=612x612&w=0&k=20&c=J0I5ByWvebvd8gBoNQt5YEJgFXp4cwY4hRyVWl8_-Vw="
              className="h-16 w-full rounded-lg"
            />
            <img
              src={currentUser.imageLink}
              className="h-20 w-20 rounded-full mx-auto -mt-10"
            />
            <br />
            <a>
              <p className="text-center tracking-wide hover:underline">
                {currentUser.username}
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
        <div className="md:w-[40%] md:mx-12 w-full">
          <div className="bg-white p-3 md:rounded-lg border-2 ">
            <div className="flex gap-4">
              <img
                src={currentUser.imageLink}
                className="h-14 w-14 mx-6 rounded-full"
              />
              <Search
                className="w-2/3 mt-3"
                placeholder="Start a post ..."
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            <div className="flex my-3 md:mx-[10%]">
              <div className="flex p-4 px-12 rounded-lg hover:scale-110 cursor-pointer hover:bg-slate-100">
                <TiMediaFastForward className="text-lg mt-1 " />
                Media
              </div>
              <div className="flex p-4 px-12 rounded-lg hover:scale-110 cursor-pointer hover:bg-slate-100">
                <SlCalender className="text-lg mt-1 " />
                Event
              </div>
              <div className="flex p-4 px-12 rounded-lg hover:scale-110 cursor-pointer hover:bg-slate-100">
                <MdArticle className="text-lg mt-1 " />
                Article
              </div>
            </div>
          </div>
          <div>
            {allStatus.map((status, key) => {
              return <Post key={key} data={status} />;
            })}
          </div>
        </div>
        <div className="w-1/4 hidden md:flex h-full  ">
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
