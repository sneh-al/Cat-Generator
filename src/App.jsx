import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Root from "./Components/Layout/Root";
import Breeds from "./pages/Breeds";
import Search from "./pages/Search";
import Random from "./pages/Random";
import {
  useGetBreedsMutation,
  useGetCategoriesMutation,
} from "./slice/catApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setBreedsList, setCatagories } from "./slice/catSlice";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Landing />} />
      <Route path='breeds' element={<Breeds />} />
      <Route path='random' element={<Random />} />
      <Route path='search' element={<Search />} />
    </Route>
  )
);

function App() {
  const { breeds } = useSelector((state) => state.cat);
  const [getBreeds, { isLoading }] = useGetBreedsMutation();
  const [getCat] = useGetCategoriesMutation();
  const dispatch = useDispatch();
  const getBreedsApi = async () => {
    try {
      const res = await getBreeds().unwrap();
      console.log(res);
      dispatch(setBreedsList(res));
    } catch (error) {
      console.log(error);
    }
  };
  const getCategory = async () => {
    try {
      const res = await getCat().unwrap();
      dispatch(setCatagories(res));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (breeds.length === 0) {
      getBreedsApi();
      getCategory();
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
