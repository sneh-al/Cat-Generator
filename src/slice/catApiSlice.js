import { apiSlice } from "./apiSlice";
const images = "/images/search";
export const catApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRandom: builder.mutation({
      query: () => ({
        url: `${images}`,
        method: "GET",
      }),
    }),
    getImages: builder.mutation({
      query: (limit) => ({
        url: `${images}?limit=${limit}&size=small`,
        method: "GET",
      }),
    }),
    getBreeds: builder.mutation({
      query: () => ({
        url: `/breeds`,
        method: "GET",
      }),
    }),

    getCategories: builder.mutation({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
    }),
    searchImages: builder.mutation({
      query: (data) => ({
        url: `${images}?limit=9&breed_ids=${data?.breed_id}&category_ids=${data?.category_id}&mime_types=${data?.mime_types}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetRandomMutation,
  useGetImagesMutation,
  useGetBreedsMutation,
  useGetCategoriesMutation,
  useSearchImagesMutation,
} = catApiSlice;
