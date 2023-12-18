import { Button, Form, Input } from "antd";
import { FaGoogle, FaLock, FaRegUser } from "react-icons/fa";
import { User } from "../types/User";
import { auth, provider } from "../../firebase";
import "firebase/auth";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
  const handleSubmit = async (values: User) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((user) => {
        Swal.fire({
          title: "User Created !",
          text: "New user has been created ! ",
          icon: "success",
        });
        console.log(user);
      })
      .catch((err) =>
        Swal.fire({
          title: "Error !",
          text: err.message,
          icon: "error",
        })
      );
  };

  const handleGoogleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        Swal.fire({
          title: "User Created !",
          text: "New user has been created ! ",
          icon: "success",
        });
        console.log(user);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error !",
          text: err.message,
          icon: "error",
        });
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="flex text-3xl m-10 text-[#017BB5] gap-1 font-bold">
        Linked <img src="/logo.png" className="w-10 h-10" alt="logo" />
      </div>
      <div className="w-[30%] m-auto shadow-lg p-10 rounded-lg">
        <h4 className="text-center text-sm mt-2 text-[#017BB5] font-semibold tracking-wide">
          Create an account in LinkedIn to get Job Posts
        </h4>

        <Form
          name="register_form"
          className="my-10"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your username !",
              },
            ]}
          >
            <Input prefix={<FaRegUser />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email Id !",
              },
            ]}
          >
            <Input prefix={<FaRegUser />} placeholder="Email Id" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password !",
              },
            ]}
          >
            <Input prefix={<FaLock />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              htmlType="submit"
              className="mx-auto w-full mb-2"
            >
              Register
            </Button>
            <div className="text-sm text-center flex flex-col gap-2">
              OR
              <Button
                className="flex py-4 items-center gap-3 bg-blue-500 text-white hover:bg-white mb-5"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="w-5 h-5 ml-[23%]" />
                Continue With Google
              </Button>
            </div>
            Or{" "}
            <a href="/login" className="text-blue-500 underline">
              Already Registered ?
            </a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
