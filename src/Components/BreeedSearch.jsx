import { useSelector } from "react-redux";
import Select from "react-select";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

import { convertForSelect } from "../utils/genral";

const BreeedSearch = ({ handlebreedsChange, handleReset }) => {
  const { breeds } = useSelector((state) => state.cat);
  const breedsValues = convertForSelect(breeds);

  return (
    <div className='flex justify-center items-center p-5 bg-orange-700 mb-5  m-auto rounded-2xl'>
      <Select
        className='p-3 rounded-2xl w-full max-w-sm focus:outline-8'
        options={breedsValues}
        onChange={handlebreedsChange}
      />

      <ArrowPathIcon
        className='w-10 h-10 ml-3 text-white'
        onClick={handleReset}
      />
    </div>
  );
};

export default BreeedSearch;
