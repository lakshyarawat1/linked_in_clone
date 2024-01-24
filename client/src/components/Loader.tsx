import { Space, Spin } from "antd";

const Loader = () => {
  return (
    <Space size="middle" className="px-[50%] py-[20%]">
      <Spin size="large" className="scale-150" />
    </Space>
  );
};

export default Loader;
