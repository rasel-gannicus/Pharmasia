import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_BACKENED_URL,
    baseUrl: "http://localhost:2500/api/v1",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({

    // --- adding new user to db after registration or login with firebase 
    addUserData: builder.mutation({
      query: (data) => ({
        url: "/addUserData",
        method: "POST",
        body: data,
      }),
    }),
    // getUserInfo : builder.query({
    //     query : (email) => ({
    //         url : `/userInfo/${email}`
    //     })
    // })
  }),
});

export const {
  useAddUserDataMutation,
  // useGetUserInfoQuery
} = userApi;
