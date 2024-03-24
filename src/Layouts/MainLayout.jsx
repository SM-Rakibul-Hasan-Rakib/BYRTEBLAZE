import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Blogs from "../Pages/Blogs";
import Bookmark from "../Pages/Bookmark";
import Footer from "../Components/Footer";
// import Home from "../Pages/Home";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        {/* packet */}
        <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
        </div>
       
        {/* footer */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
