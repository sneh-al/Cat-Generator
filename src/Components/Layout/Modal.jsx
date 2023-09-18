import { useEffect } from "react";

const Modal = ({ children }) => {
  useEffect(() => {
       document.body.style.overflow = "hidden";
       return () => (document.body.style.overflow = "unset");
  },[])
  return (
  <div className='absolute left-0 z-50 bg-red-200 w-full h-screen grid place-content-center '>
      <div className='bg-green-100'>{children}</div>
    </div>
  );
};

export default Modal;
