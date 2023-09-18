import { useSelector } from "react-redux";
import Select from "react-select";
import {  convertForSelect } from "../utils/genral";
import { useEffect, useRef, useState } from "react";
import { useSearchImagesMutation } from "../slice/catApiSlice";
import Loading from "../Components/Layout/Loading";
import {
  GifIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import Modal from "react-modal-e2z/build";




//react select style

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "200px",
    border: state.isFocused ? "2px solid #4A90E2" : "1px solid inherit", 
    borderRadius: "10px",
    boxShadow: "none", 
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#4A90E2" : "white", // Change background color for selected option
    color: state.isSelected ? "white" : "black", // Change text color for selected option
  }),
};
const Search = () => {
  const { catagories, breeds } = useSelector((state) => state.cat);
  const [getIamges, { isLoading }] = useSearchImagesMutation();
  const [cat, setCat] = useState("");
  const [type, setType] = useState("");
  const [cats, setCats] = useState(undefined);
  const [breed, setBreed] = useState("");
  const catagoriesValues = convertForSelect(catagories);
  const breedsValues = convertForSelect(breeds);
  const handleCategoriesChange = (value) => {
    setCat(value);
  };
  const handlebreedsChange = (e) => {
    setBreed(e);
  };

    const handleResetClick = () => {
         setBreed(null);
    };
  const handleGetImages = async () => {
    const data = {
      breed_id: breed?.value || "",
      category_id: cat,
      mime_types: type,
    };
    try {
      const res = await getIamges(data).unwrap();
      setCats(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetAll = () => {
    setType("");
    setBreed("");
    setCat("");
  };
  useEffect(() => {
    handleGetImages();
  }, [cat, breed, type]);

  return (
    <div className='container md:w-4/5 m-auto p-5 flex flex-col  overflow-hidden'>
      <div className='flex flex-wrap items-center lg:justify-evenly justify-center gap-3'>
        <div className='flex gap-3 p-3  justify-center bg-orange-400 rounded-xl'>
          <button
            onClick={handleResetClick}
            className='bg-red-600 p-2 rounded-xl'>
            Reset
          </button>
          <Select
            value={breed}
            className='text-orange-600 h-full  w-full max-w-sm '
            options={breedsValues}
            styles={customStyles}
            onChange={handlebreedsChange}
            placeholder={<div>Select Breed</div>}
          />
        </div>
        <div className='flex gap-3 p-3 flex-wrap justify-center bg-orange-400 rounded-xl'>
          <button
            onClick={() => handleCategoriesChange("")}
            className='bg-red-600 p-2 rounded-xl'>
            Reset
          </button>
          {catagoriesValues.map((catagory) => (
            <button
              className={
                cat === catagory.value
                  ? "bg-orange-500  text-white text-md p-2 rounded-xl"
                  : " text-md   p-2 rounded-xl "
              }
              key={catagory.value}
              onClick={() => handleCategoriesChange(catagory.value)}>
              {catagory.label}
            </button>
          ))}
        </div>

        <div className='flex gap-3 p-3 flex-wrap justify-center bg-orange-400 rounded-xl'>
          {mediaTypes.map((media) => (
            <button
              className={`p-2 rounded-xl  ${
                type === media.value ? "underline  bg-orange-500" : ""
              }`}
              key={media.value}
              onClick={() => setType(media.value)}>
              {media.Icon !== "All" ? (
                <media.Icon className='w-6 h-6 text-white' />
              ) : (
                "All"
              )}
            </button>
          ))}
        </div>
        <button
          className=' bg-red-600 hover:text-white hover:bg-red-800 p-4 rounded-xl'
          onClick={handleResetAll}>
          Reaset All
        </button>
      </div>
      <Gallery isLoading={isLoading} cats={cats} cat={cat} />
    </div>
  );
};

export default Search;

const mediaTypes = [
  {
    value: "",
    Icon: "All",
  },
  {
    value: "jpg,png",
    Icon: PhotoIcon,
  },
  {
    value: "gif",
    Icon: GifIcon,
  },
];

function Gallery({ isLoading, cats, cat }) {
  
  const [catUrl, setCatUrl] = useState([]);
  const [showModal, setModal] = useState(false);
    const openModal = (url) => {
      setCatUrl(url);
      setModal(!showModal);
    };
  return (
    <div>
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
            <img src={catUrl} alt='neko' className='   ' />
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
      {isLoading ? (
        <div className='grid place-content-center w-full p-5 h-screen'>
          <Loading />
        </div>
      ) : (
        <div className='flex flex-col md:flex-row items-center flex-wrap p-5'>
          {cats?.length > 0 ? (
            cats?.map((cat, i) => (
              <div
                key={i}
                className=' md:w-1/3 md:h-64 overflow-hidden relative hover:border hover:scale-110 focus:border-blue-400 hover:border-blue-400 hover:z-10'>
                <img src={cat.url} alt='neko' className='object-cover w-full h-full object-center ' />
                <button
                  onClick={() => openModal(cat?.url)}
                  className='w-full h-full text-white bg-orange-50 bg-opacity-50 absolute bottom-0 right-0  opacity-0 hover:opacity-100 '>
                  View
                </button>
              </div>
            ))
          ) : (
            <p className='grid place-content-center w-full p-5 text-lg text-red-800 bg-orange-400'>
              Not found, please try diffrent search
            </p>
          )}
        </div>
      )}
    </div>
  );
}
