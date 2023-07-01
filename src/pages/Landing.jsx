import { useRef } from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HeroImages from "../Components/HeroImages";
import CatImg from "../assets/hero.jpg";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const Landing = () => {
  const sectionRef = useRef(null);
  const handleExplore = () => {
    sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='  flex flex-col     '>
      <div className='relative min-h-screen rounded-b-3xl border-orange-300   overflow-hidden flex lg:justify-around  justify-evenly flex-col  border-b-4 '>
        <div className=' w-full grid place-content-center px-5 z-10  '>
          <h1 className='text-5xl font-extrabold text-orange-700'>PurrPix</h1>
          <p className='text-xl py-4'>Discover the World of Feline Wonders.</p>
        </div>
        <img
          src={CatImg}
          alt='cat'
          className='  absolute object-cover     object-center h-full    w-full  '
        />
        <div className='       px-5  flex z-10'>
          <div className='max-w-prose m-auto flex flex-col  '>
            <Hero />
            <button
              className='mt-8 hidden   md:flex bottom-0 m-auto p-3 font-semibold animate-bounce bg-orange-700 rounded-2xl hover:text-white  transition duration-300 ease-in-out hover:bg-orange-900 '
              onClick={handleExplore}>
              Explore
              <ArrowDownIcon className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>

      <div
        className=' flex-wrap h-full md:w-4/5 pt-32  flex  justify-center container m-auto     '
        ref={sectionRef}>
        <HeroImages />
      </div>

      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
