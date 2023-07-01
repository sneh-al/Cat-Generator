import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./slice/catSlice";
import { apiSlice } from "./slice/apiSlice";
const store = configureStore({
  reducer: {
    cat: catReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
