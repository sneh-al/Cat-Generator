import { useSelector } from "react-redux";
import Select from "react-select";
import { capitalize, convertForSelect } from "../utils/genral";
import { useEffect, useState } from "react";
import { useSearchImagesMutation } from "../slice/catApiSlice";
import Loading from "../Components/Layout/Loading";
import {
  GifIcon,
  MagnifyingGlassCircleIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

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
    console.log(e);
    setBreed(e.value);
  };

  const handleGetImages = async () => {
    const data = {
      breed_id: breed,
      category_id: cat,
      mime_types: type,
    };
    try {
      const res = await getIamges(data).unwrap();
      setCats(res);
      console.log(res);
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
    <div className='container md:w-4/5 m-auto p-5 flex flex-col h-screen overflow-hidden'>
      <div className='flex flex-wrap items-center lg:justify-evenly justify-center gap-3'>
        <div className='bg-orange-500 rounded-xl flex'>
          <Select
            className='text-orange-600 border w-full max-w-sm '
            options={breedsValues}
            onChange={handlebreedsChange}
            placeholder={<div>Select Breed</div>}
          />
        </div>
        <div className='flex gap-3 p-3 flex-wrap justify-center bg-orange-400 rounded-xl'>
          <button
            onClick={(e) => handleCategoriesChange("")}
            className='bg-red-600 p-2 rounded-xl'>
            Reset
          </button>
          {catagoriesValues.map((catagory) => (
            <button
              className={
                cat === catagory.value
                  ? "underline  text-white text-md"
                  : " text-sm "
              }
              key={catagory.value}
              onClick={(e) => handleCategoriesChange(catagory.value)}>
              {catagory.label}
            </button>
          ))}
        </div>

        <div className='flex gap-3 p-3 flex-wrap justify-center bg-orange-400 rounded-xl'>
          {mediaTypes.map((media) => (
            <button key={media.value} onClick={() => setType(media.value)}>
              {media.Icon !== "All" ? (
                <media.Icon className='w-6 h-6 text-white' />
              ) : (
                "All"
              )}
            </button>
          ))}
        </div>
        <button onClick={handleResetAll}>Reaset All</button>
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
  return (
    <div>
      {isLoading ? (
        <div className='grid place-content-center w-full p-5 '>
          <Loading />
        </div>
      ) : (
        <div className='flex flex-wrap p-5'>
          {cats?.length > 0 ? (
            cats?.map((cat) => (
              <img
                src={cat.url}
                key={cat.id}
                alt='neko'
                className='object-cover   h-24 w-1/3 md:h-64'
              />
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
