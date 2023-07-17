import { configureStore } from "@reduxjs/toolkit";
import cartReducers from './features/cart/cardSlice';

export const store = configureStore({
    reducer: cartReducers
})