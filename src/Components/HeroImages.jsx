import { useEffect, useRef, useState } from "react";
import { useGetImagesMutation } from "../slice/catApiSlice";
import Loading from "./Layout/Loading";
import Modal from "react-modal-e2z";
import toast from "react-hot-toast";
import useIsEndOfScreen from "../Hooks/useIsEndOfScreen";

const HeroImages = () => {
  const [getCat, { isLoading, error }] = useGetImagesMutation();
  const [cats, setCats] = useState([]);

  const ref = useRef(null);
  const isVisible = useIsEndOfScreen();

  const [cat, setCat] = useState([]);
  const [showModal, setModal] = useState(false);
  const getCats = async () => {
    try {
      const res = await getCat(20).unwrap();
      console.log(res);
      setCats((prevState) => [...prevState, ...res]);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const openModal = (id) => {
    setCat(id);
    setModal(!showModal);
  };

  useEffect(() => {
    if (isVisible) {
      getCats();
    } else {
      console.log("not end");
    }
  }, [isVisible]);

  return (
    <div className=' flex flex-wrap relative  justify-center items-center   p-5'>
      {showModal && (
        <Modal
          backdropDark
          center={true}
          escapeClose={true}
          outSideClose={true}
          showHeader={false}
          showFooter={false}
          className='grid place-content-center  overflow-hidden'
          isOpen={showModal}
          handleOpen={openModal}>
          <div className=' overflow-hidden flex  justify-center   '>
            <img src={cat} alt='neko' className='   ' />
          </div>
          <a
            href={cat}
            target='_blank'
            rel='noreferrer'
            className='w-fit float-right gap-2 transition-colors duration-300 ease-in-out rounded-2xl px-5    py-2 bg-red-50 hover:bg-orange-800 capitalize hover:text-white hover:shadow-md'
            download>
            Download
          </a>
        </Modal>
      )}
      {cats &&
        cats.map((cat, i) => (
          <div
            key={i}
            className='h-72 grow relative hover:border hover:scale-110 focus:border-blue-400 hover:border-blue-400 hover:z-10'>
            <img
              src={cat?.url}
              alt='neko'
              className='w-full h-full z-4  object-cover  hover:scale-110'
            />
            <button
              onClick={() => openModal(cat?.url)}
              tabIndex={i + 6}
              className='w-full h-full text-white bg-orange-50 bg-opacity-50 absolute bottom-0 right-0  opacity-0 hover:opacity-100 '>
              View
            </button>
          </div>
        ))}
      <div className='w-full grid place-content-center p-10'>
        {isLoading ? <Loading /> : error ? <p>Somthing went wrong</p> : null}
      </div>

      <div
        ref={ref}
        className='flex items-end p-5'
        style={{ flexGrow: 10 }}></div>
    </div>
  );
};

export default HeroImages;
