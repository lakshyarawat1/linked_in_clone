import { useContext, useState } from "react";
import Topbar from "../components/Topbar";
import { Button, Modal } from "antd";
import { userContext } from "../context/userContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [popupOpen, setPopupOpen] = useState(false);

  const { currentUser } = useContext(userContext);

  console.log(currentUser);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
        <a href="/profile">
          <Button type="default" className="w-full my-4">
            View Profile
          </Button>
        </a>
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
    </>
  );
};

export default Profile;
