import { apiSlice } from "../../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // --- adding new user to db after registration or login with firebase
    addUserData: builder.mutation({
      query: (data) => ({
        url: "/addUserData",
        method: "POST",
        body: data,
      }),
    }),
    getUserInfo: builder.query({
      query: (email) => ({
        url: `/userInfo/${email}`,
      }),
      providesTags: ["userInfo"],
    }),

    getUserNotifications: builder.query({
      query: (email) => ({
        url: `/notifications/${email}`,
      }),
      providesTags: ["notifications"],
    }),
  }),
});

export const {
  useAddUserDataMutation,
  useGetUserInfoQuery,
  useGetUserNotificationsQuery,
} = userApi;
