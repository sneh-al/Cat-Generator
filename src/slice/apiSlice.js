import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.thecatapi.com/v1/",
  prepareHeaders: (headers) => {
    headers.set("x-api-key", import.meta.env.VITE_THE_CAT_API_KEY);
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
