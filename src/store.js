import { configureStore } from "@reduxjs/toolkit";
import cartReducers from './features/cart/cardSlice';
import modalReducers from './features/modal/modalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducers,
        modal: modalReducers,
    }
})