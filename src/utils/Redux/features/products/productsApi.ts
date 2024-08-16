import { apiSlice } from "../../api/apiSlice"



export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder : any) => ({


        addToCart: builder.mutation({
            query: (data : any) => (console.log(data),{
                url: '/addToCart',
                method: 'POST',
                body: data
            }),

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

        // // --- get how much bookings each user have in their cart
        // getServiceCart: builder.query({
        //     query: (email) => ({
        //         url : `/cart/services/${email}`,
        //         headers : {
        //             authorization : `Bearer ${localStorage.getItem('token')}`
        //         },
        //     })
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
    })
})

export const { useAddToCartMutation } = productApi