import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from './slices/products.slice'
import cart from './slices/cart.slice'
import loginModal from './slices/loginModal.slice'

const store =  configureStore ({
    reducer: {
        productsGlobal,
        cart,
        loginModal


    }
})

export default store;