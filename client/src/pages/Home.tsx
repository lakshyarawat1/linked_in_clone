import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-24 gap-10">
        <div className="w-1/2">
          <h1 className="text-4xl w-2/3 font-bold text-[#017bb5] ml-10 mt-10">
            Welcome to your professional community
          </h1>
          <br />
          <h2 className="text-2xl font-bold text-[#017bb5] ml-10 mt-2">
            Here's the best place to be
          </h2>
        </div>
        <img
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          className="w-1/3"
        />
      </div>
    </>
  );
};

export default Home;
