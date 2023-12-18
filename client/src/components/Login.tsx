import { Button, Checkbox, Form, Input } from "antd";
import { FaLock, FaRegUser } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Swal from "sweetalert2";

interface loginProps {
  email: string;
  password: string;
}

const Login = () => {
  const handleLogin = async (values: loginProps) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((user) => {
        Swal.fire({
          title: "Logged In Successfully",
          icon: "success",
          timer: 2000,
        });
        console.log(user);
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

  return (
    <>
      <div className="flex text-3xl m-10 text-[#017BB5] gap-1 font-bold">
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
            Or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
