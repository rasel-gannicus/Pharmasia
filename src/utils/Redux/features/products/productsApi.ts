import { apiSlice } from "../../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    // --- get all the products
    getAllProducts: builder.query({
      query: () => `/allProducts`,
      providesTags: ["products"],
    }),

    // --- get single product
    getSingleProduct: builder.query({
      query: (id: string | number) => `/product/${id}`,
      providesTags: ["products"],
    }),

    // --- add product to cart
    addProduct: builder.mutation({
      query: (data: any) => ({
        url: "/addProduct",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    // --- edit a product
    editProduct: builder.mutation({
      query: (data: any) => ({
        url: `/editProduct/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    // --- edit a product
    deleteProduct: builder.mutation({
      query: (productId: string) => ({
        url: `/deleteProduct/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),

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
      invalidatesTags: ["cart", "userInfo", "orders", "notifications"],
    }),

    // --- modifying cart, 'adding, deleting, increase , decrease '
    modifyOrders: builder.mutation({
      query: (data: any) => ({
        url: "/modifyOrders",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["cart", "userInfo", "orders", "allUsers"],
    }),

    // --- add product to order list
    addRatings: builder.mutation({
      query: (data: any) => ({
        url: "/addRatings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart", "userInfo", "orders", "ratings"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetProductCartQuery,
  useModifyCartMutation,
  useAddOrdersMutation,
  useModifyOrdersMutation,
  useAddRatingsMutation,
  useGetAllProductsQuery,
  useAddProductMutation,
  useGetSingleProductQuery,
  useEditProductMutation,
  useDeleteProductMutation
} = productApi;
