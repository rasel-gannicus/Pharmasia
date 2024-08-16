import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./features/user/userApi";
import userReducer from "./features/user/userSlice";
import modalReducer from "./features/modal/modalSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: userApi.reducer,
    userSlice: userReducer,
    modalSlice : modalReducer
  },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
