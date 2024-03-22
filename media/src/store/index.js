import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";
import {setupListeners} from "@reduxjs/toolkit/query"
import { albumApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

const store = configureStore({
  reducer:{
    users: usersReducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumApi.middleware).concat(photosApi.middleware);
  }
});

setupListeners(store.dispatch);

export {store}
export * from "./thunks/fetchUsers"
export * from "./thunks/addUser"
export * from "./thunks/deleteUser"
export * from "./apis/photosApi"
export * from "./apis/albumsApi"