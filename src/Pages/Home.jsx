import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Wave from "../assets/wave.svg"
const Home = () => {
  return (
    <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
      <Hero></Hero>
      <img className="absolute bottom-0 w-full" src={Wave} alt="" />
      {/* <div className="h-16">
        {" "}
        <Navbar></Navbar>
      </div> */}
      {/* <h1>Home Page</h1> */}
    </div>
  );
};

export default Home;
