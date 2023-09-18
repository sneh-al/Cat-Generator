import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";
import { Toaster } from "react-hot-toast";
import "react-modal-e2z/build/styles.css";



const Root = () => {
  return (
    <div className='min-h-screen bg-orange-600 md:pb-0  pb-10 '>
      <Toaster/>
      <div className='md:hidden fixed bg-orange-800 w-full h-12  z-50 bottom-0 grid place-content-center '>
        <Navbar />
      </div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
