import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Breed from "../Components/Breed";
import BreeedSearch from "../Components/BreeedSearch";
import Loading from "../Components/Layout/Loading";

const Breeds = () => {
  const { breeds } = useSelector((state) => state.cat);
  const [cats, setCats] = useState(breeds);
  const [isLoding, setIsloading] = useState(false);

  const handlebreedsChange = (e) => {
    console.log(e.value);
    const filtredbreeds = breeds.filter((breed) => breed.id === e.value);
    setCats(filtredbreeds);
  };

  const handleReset = () => {
    setCats(breeds);
  };

  useEffect(() => {
    setCats(breeds);
  }, [breeds]);

  return (
    <div className=' m-auto mt-10  md:w-4/5 p-5  '>
      <BreeedSearch
        handlebreedsChange={handlebreedsChange}
        handleReset={handleReset}
      />
      {isLoding ? (
        <ul className={`grid place-content-center gap-10 relative `}>
          <Loading />
        </ul>
      ) : (
        <ul className={`grid place-content-center gap-10 relative `}>
          {cats?.map((breed) => (
            <Breed breed={breed} key={breed.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Breeds;
