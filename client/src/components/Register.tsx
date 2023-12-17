import { Button, Form, Input } from "antd";
// import { useState, useEffect } from "react";
import { FaLock, FaRegUser } from "react-icons/fa";
import { User } from "../types/User";
import { auth } from "../../firebase";
import "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const handleSubmit = async (values: User) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => alert(err.message));
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
              className="mx-auto w-full mb-6"
            >
              Register
            </Button>
            Or{" "}
            <a href="/register" className="text-blue-500 underline">
              Already Registered ?
            </a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
