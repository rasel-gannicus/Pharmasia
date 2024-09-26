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

    // --- update a user role in mongodb
    updateUserRole: builder.mutation({
      query: (data) => ({
        url: "/updateUser",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["userInfo", "allUsers"],
    }),

    // --- get all the information for single user (including orders, cart, wishlist)
    getUserInfo: builder.query({
      query: (email) => ({
        url: `/userInfo/${email}`,
      }),
      providesTags: ["userInfo"],
    }),

    // --- get all the information for single user (including orders, cart, wishlist)
    getAllUserInfo: builder.query({
      query: () => ({
        url: `/allUsers`,
      }),
      providesTags: ["userInfo", "allUsers"],
    }),

    // --- get notifications for single user
    getUserNotifications: builder.query({
      query: (email) => ({
        url: `/notifications/${email}`,
      }),
      providesTags: ["notifications"],
    }),

    // --- making all the notifications 'read'
    modifyNotifications: builder.mutation({
      query: (data: any) => ({
        url: "/modifyNotifications",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["notifications"],
    }),
  }),
});

export const {
  useAddUserDataMutation,
  useGetUserInfoQuery,
  useGetUserNotificationsQuery,
  useModifyNotificationsMutation,
  useGetAllUserInfoQuery,
  useUpdateUserRoleMutation
} = userApi;
