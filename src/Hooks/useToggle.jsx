import { useState } from "react";

const useToggle = () => {
  const [state, setState] = useState(false);

  const handleChange = () => {
    setState(!state);
  };
  return [state, handleChange];
};

export default useToggle;
