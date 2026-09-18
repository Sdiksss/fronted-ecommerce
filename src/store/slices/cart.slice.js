import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth";
import { baseUrl } from "../../services/constants";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCartGlobal: (state, action) => action.payload,
        addProductCartG: (state, action) => [...state, action.payload],
        updateProductCartG: (state, action) => {
            return state.map(prod =>
                prod.id === action.payload.id ? action.payload : prod
            );
        },
        deleteProductCartG: (state, action) => {
            return state.filter(prod => prod.id !== action.payload);
        }
    }
});

export const { setCartGlobal, addProductCartG, deleteProductCartG, updateProductCartG } = cartSlice.actions;

export default cartSlice.reducer;

// --- Thunks ---

export const getCartThunk = () => dispatch => {
    const url = `${baseUrl}/cartItems`; // 👈 Agregado /cart
    axios.get(url, getConfigAuth())
        .then(res => dispatch(setCartGlobal(res.data)))
        .catch(err => console.log(err));
};

export const postCartThunk = (product, quantityRes = 1) => (dispatch, getState) => {
    const { cart } = getState();
    const existingProduct = cart?.find(item => item.productId === product.id);

    if (existingProduct) {
        const url = `${baseUrl}/cartItems/${existingProduct.id}`; // 👈 Agregado /cart/
        const newQuantity = existingProduct.quantity + quantityRes;

        const data = {
            quantity: newQuantity,
            productId: product.id
        };
        
        axios.put(url, data, getConfigAuth())
            .then(() => {
                dispatch(getCartThunk());
            })
            .catch(err => console.log(err));
    } else {
        const url = `${baseUrl}/cartItems`; // 👈 Agregado /cart
        const data = {
            quantity: quantityRes,
            productId: product.id
        };

        axios.post(url, data, getConfigAuth())
            .then(() => {
                dispatch(getCartThunk());
            })
            .catch(err => console.log(err));
    }
};

export const deleteCartThunk = (id) => dispatch => {
    const url = `${baseUrl}/cartItems/${id}`; // 👈 Agregado /cart/

    axios.delete(url, getConfigAuth())
        .then(() => {
            dispatch(deleteProductCartG(id));
        })
        .catch(err => console.log(err));
};