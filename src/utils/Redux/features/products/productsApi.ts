import { apiSlice } from "../../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // --- get how much bookings each user have in their cart
    getProductCart: builder.query({
      query: (email: any) => ({
        url: `/getCart?email=${email}`,
        method: "GET",
        // No need for a body in a GET request
      }),
      providesTags: ["cart"],
    }),

    // --- add product to cart
    addToCart: builder.mutation({
      query: (data: any) => ({
        url: "/addToCart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart", "userInfo"],
    }),

    // --- modifying cart, 'adding, deleting, increase , decrease '
    modifyCart: builder.mutation({
      query: (data: any) => ({
        url: "/modifyCart",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["cart", "userInfo"],
    }),

    // --- add product to order list
    addOrders: builder.mutation({
      query: (data: any) => ({
        url: "/addOrders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart", "userInfo", "orders"],
    }),

    // // --- update a users cart when he/she confirms the bookings
    // updateService: builder.mutation({
    //     query: (data) => ({
    //         url: '/services/update',
    //         method: 'PATCH',
    //         headers : {
    //             authorization : `Bearer ${localStorage.getItem('token')}`
    //         },
    //         body: data
    //     }),
    //     async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //         // --- pessimistic update
    //         try {
    //             const res = await queryFulfilled;
    //             if (res?.data?.modifiedCount > 0) {
    //                 const pathResult = await dispatch(apiSlice.util.updateQueryData('getServiceCart', arg.email, (draft) => {
    //                     let modifiedItem = draft.find(index => index.serviceId == arg.serviceId);
    //                     modifiedItem.status = arg.status;
    //                     modifiedItem.time = arg.time;
    //                     modifiedItem.date = arg.date;
    //                 }))
    //             }
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    // }),

    // // --- get all confirmed bookings to avoid multiple booking from different user
    // getAllConfirmedBookings: builder.query({
    //     query: () => `/cart/confirmedOnly`
    // }),

    // deletingAService: builder.mutation({
    //     query: (data) => ({
    //         url: `/cart/service/delete`,
    //         method: 'DELETE',
    //         headers : {
    //             authorization : `Bearer ${localStorage.getItem('token')}`
    //         },
    //         body: data
    //     }),
    //     async onQueryStarted(arg, { queryFulfilled, dispatch }) {

    //         //--- pessimistic update
    //         try {
    //             const response = await queryFulfilled;

    //             if (response.data.deletedCount > 0) {
    //                 const pathResult = dispatch(apiSlice.util.updateQueryData('getServiceCart', arg.email, (draft) => {

    //                     const deletedService = draft.find(index => index._id == arg.id);
    //                     const deletedIndex = draft.indexOf(deletedService);

    //                     draft.splice(deletedIndex, 1);
    //                 }))
    //             }
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    // })
  }),
});

export const {
  useAddToCartMutation,
  useGetProductCartQuery,
  useModifyCartMutation,
  useAddOrdersMutation
} = productApi;
