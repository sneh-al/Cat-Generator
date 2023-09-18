import { useEffect } from "react";
import useGetImg from "../Hooks/useGetImg";
import Loading from "./Layout/Loading";
import SomthingWentWrong from "./Layout/SomthingWentWrong";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const Random = () => {
  const { img, isLoading, getcat, error } = useGetImg();
  useEffect(() => {
    
  if (error) {
    toast.error("Somthing went wrong try again");
  }
  }, [error]);
  
  
  return (
    <div className=' relative  p-5  h-screen grid place-content-center   m-auto overflow-hidden '>
      <div
        className={`absolute top-0 left-0  w-full justify-evenly  flex gap-5 transition ease-linear duration-500 `}>
        <button
          disabled={isLoading}
          className='flex gap-2  text-xs md:text-base transition-colors duration-300 ease-in-out rounded-b-2xl px-5    py-2 bg-red-50 hover:bg-orange-800 capitalize hover:text-white hover:shadow-md'
          onClick={getcat}>
          Genrate new
          <ArrowPathIcon
            className={`w-4 h-4 md:w-6 md:h-6 ${
              isLoading && "animate-spin "
            }  `}
          />
        </button>
        {!isLoading && (
          <a
            href={img?.url}
            target='_blank'
            rel='noreferrer'
            className='flex gap-2 text-xs md:text-base transition-colors duration-300 ease-in-out rounded-b-2xl px-5    py-2 bg-red-50 hover:bg-orange-800 capitalize hover:text-white hover:shadow-md'
            download>
            Download
          </a>
        )}
      </div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <SomthingWentWrong />
      ) : (
        <div className='w-full h-full'>
          <img src={img?.url} alt='neko' className=' object-contain' />
        </div>
      )}
    </div>
  );
};

export default Random;
