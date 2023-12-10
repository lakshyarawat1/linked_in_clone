import { Button, Checkbox, Form, Input } from "antd";
// import { useState, useEffect } from "react";
import { FaLock, FaRegUser } from "react-icons/fa";

interface loginProps{
  userName: string,
  password: string
}

const Login = () => {
  // const [form] = Form.useForm();
  // const [clientReady, setClientReady] = useState(false);

  // disabling submit button on beginning
  // useEffect(() => {
  //   setClientReady(true);
  // }, []);

  const onFinish = (values : loginProps) => {
    console.log("Finish", values);
  };

  return (
    <>
      <div className="flex text-3xl m-10 text-[#017BB5] gap-1 font-bold">
        Linked <img src="/logo.png" className="w-10 h-10" alt="logo" />
      </div>
      <div className="w-[30%] m-auto shadow-lg p-10 rounded-lg">
        <h4 className="text-center opacity-40 text-sm mt-2 text-[#017BB5] font-semibold tracking-wide">
          Login to LinkedIn to get Job Posts
        </h4>

        <Form
          name="login_form"
          className="my-10"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your user name !",
              },
            ]}
          >
            <Input prefix={<FaRegUser />} placeholder="User name" />
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
            <Form.Item name="remember" valuePropName="checked" >
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
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
