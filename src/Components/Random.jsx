import { useState } from "react";
import useGetImg from "../Hooks/useGetImg";
import Loading from "./Layout/Loading";
import SomthingWentWrong from "./Layout/SomthingWentWrong";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const Random = () => {
  const { img, isLoading, getcat, error } = useGetImg();
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className=' relative  w-7/12  h-screen grid place-content-center   m-auto overflow-hidden '
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      <div
        className={`absolute top-0 m-auto  w-full justify-between flex ${
          isShown ? "transition ease-linear duration-500" : "hidden"
        } `}>
        <button
          disabled={isLoading}
          className='flex gap-2 transition-colors duration-300 ease-in-out rounded-b-2xl px-5    py-2 bg-red-50 hover:bg-orange-800 capitalize hover:text-white hover:shadow-md'
          onClick={getcat}>
          Genrate new
          <ArrowPathIcon
            className={`w-6 h-6 ${isLoading && "animate-spin "}  `}
          />
        </button>
        {!isLoading && (
          <a
            href={img?.url}
            target='_blank'
            rel='noreferrer'
            className='flex gap-2 transition-colors duration-300 ease-in-out rounded-b-2xl px-5    py-2 bg-red-50 hover:bg-orange-800 capitalize hover:text-white hover:shadow-md'
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
        <img
          src={img?.url}
          alt='neko'
          className='w-full h-full object-contain'
        />
      )}
    </div>
  );
};

export default Random;
