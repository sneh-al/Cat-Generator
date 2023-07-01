import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  cat: {},
  catList: [],
  breeds: [],
  catagories: [],
};

const catSlice = createSlice({
  name: "neko",
  initialState: intialState,
  reducers: {
    setRandomCat: (state, action) => {
      state.cat = action.payload;
    },
    setCatList: (state, action) => {
      state.catList = [...state.catList, action.payload];
    },
    setBreedsList: (state, action) => {
      state.breeds = action.payload;
    },
    setCatagories: (state, action) => {
      state.catagories = action.payload;
    },
  },
});

const { actions, reducer } = catSlice;

///exporting
export const { setRandomCat, setCatList, setBreedsList, setCatagories } =
  actions;
export default reducer;
