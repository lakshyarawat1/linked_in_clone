
const Home = () => {
  return (
    <>
      <nav className="flex items-center m-5 gap-2">
        <h1 className="text-3xl font-bold text-[#017bb5]">Linked </h1>
        <img src="logo.png" alt="logo" className="h-12 w-12" />
        <button className="right-0 border border-black p-2 px-6 ml-[70%] hover:bg-black hover:text-white rounded-full">
          <a href='/register'>Sign up</a>
        </button>
      </nav>
    </>
  );
}

export default Home