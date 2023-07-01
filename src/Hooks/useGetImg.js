import { useCallback, useEffect, useState } from "react";
import { useGetRandomMutation } from "../slice/catApiSlice";

const useGetImg = () => {
  const [img, setImg] = useState();
  const [error, setError] = useState();
  const [genrateCat, { isLoading }] = useGetRandomMutation();
  const getcat = useCallback(async () => {
    setImg(null);
    try {
      const res = await genrateCat().unwrap();
      setImg(res[0]);
    } catch (error) {
      setError(error);
    }
  }, [genrateCat]);

  useEffect(() => {
    getcat();
  }, [getcat]);
  return { img, isLoading, getcat, error };
};

export default useGetImg;
