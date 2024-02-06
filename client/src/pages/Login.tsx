import { Button, Checkbox, Form, Input } from "antd";
import { FaGoogle, FaLock, FaRegUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { googleLogin, loginWithCredentials } from "../api/AuthAPi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Loader from "../components/Loader";

interface loginProps {
  email: string;
  password: string;
}

const Login = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/feed");
      } else {
        setLoading(false);
      }
    });
  });

  const handleGoogleLogin = async () => {
    googleLogin()
      .then((user) => {
        Swal.fire({
          title: "Signed In !",
          text: "Signed In with Google ! ",
          icon: "success",
        });
        console.log(user);
        if (user.user.email) {
          sessionStorage.setItem("userEmail", user.user.email);
        }
        navigate("/feed");
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

  const handleLogin = async (values: loginProps) => {
    loginWithCredentials(values)
      .then((user) => {
        Swal.fire({
          title: "Logged In Successfully",
          icon: "success",
          timer: 2000,
        });
        console.log(user);
        if (values.email) {
          sessionStorage.setItem("userEmail", values.email);
        }
        navigate("/feed");
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          timer: 2000,
        });
      });
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="flex text-3xl m-10 text-[#017bb5] gap-1 font-bold">
        Linked <img src="/logo.png" className="w-10 h-10" alt="logo" />
      </div>
      <div className="w-[30%] m-auto shadow-lg p-10 rounded-lg">
        <h4 className="text-center text-sm mt-2 text-[#017BB5] font-semibold tracking-wide">
          Login to LinkedIn to get Job Posts
        </h4>

        <Form
          name="login_form"
          className="my-10"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
        >
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
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="text-xs text-blue-600 hover:underline" href="">
              Forgot password ?
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="default"
              htmlType="submit"
              className="mx-auto w-full mb-6"
            >
              Log in
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
            Or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
