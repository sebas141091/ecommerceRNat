
import { configureStore } from "@reduxjs/toolkit";
import  AuthSlice  from "../features/auth/authSlice";
import {authApi} from '../features/auth/authApi'


export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        auth:AuthSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})