import { useEffect, useState } from "react";
import { useGetImagesMutation } from "../slice/catApiSlice";
import Random from "./Random";
import Loading from "./Layout/Loading";
import Modal from "./Layout/Modal";
const HeroImages = () => {
  const [getCat, { isLoading, error }] = useGetImagesMutation();
  const [cats, setCat] = useState([]);
  const [showModal, CloseModal] = useState(false);
  const getCats = async () => {
    try {
      const res = await getCat(20).unwrap();
      console.log(res);
      setCat(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div className=' flex flex-wrap   justify-center items-center relative  p-5'>
      {showModal && <Modal>modal</Modal>}
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p>Somthing went wrong</p>
      ) : (
        cats.map((cat, i) => (
          <div
            key={cat.id}
            className='h-72 grow relative hover:border hover:scale-110 focus:border-blue-400 hover:border-blue-400 hover:z-10'>
            <img
              src={cat?.url}
              alt='neko'
              className='w-full h-full z-4   hover:scale-110'
            />
            <button
              tabIndex={i + 6}
              className='w-full h-full text-white bg-orange-50 bg-opacity-50 absolute bottom-0 right-0  opacity-0 hover:opacity-100 '>
              view
            </button>
          </div>
        ))
      )}
      {!isLoading && (
        <div className='flex items-end p-5' style={{ flexGrow: 10 }}></div>
      )}
    </div>
  );
};

export default HeroImages;
