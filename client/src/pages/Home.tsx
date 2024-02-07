import { Button, Image, Typography } from "antd";
import Navbar from "../components/Navbar";

const { Text, Title } = Typography;

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="md:flex mt-24 gap-10">
        <div className="md:w-1/2">
          <Title className=" w-2/3 font-semibold text-[#017bb5] md:ml-20 mx-auto mt-10">
            Welcome to your professional community
          </Title>
          <br />
          <Text className="text-2xl text-[#017bb5] md:ml-24 mx-4 mt-2">
            Here's the best place to be
          </Text>
          <div>
            <Button
              type="default"
              className="w-3/4 m-10"
              size="large"
              href="/register"
              target="/register"
            >
              <a href="/register">Join now</a>
            </Button>
          </div>
        </div>
        <Image
          alt="linkedin-logo"
          preview={false}
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          className="w-1/2"
        />
      </div>
    </>
  );
};

export default Home;
