import { createStore } from "redux";
import {configureStore, } from "@reduxjs/toolkit";
import ArticlesSlice from "../slices/ArticlesSlice";

export const store = configureStore({
    reducer:{
        ArticlesSlice: ArticlesSlice
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>