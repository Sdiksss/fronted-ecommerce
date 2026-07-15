import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth"; // Asegúrate de que esta ruta sea la correcta

const cartSlice = createSlice({
    name: 'cart',
    initialState: [], // 👈 Array vacío para evitar errores de métodos (.map, .find) al iniciar
    reducers: {
        setCartGlobal: (state, action) => action.payload,
        addProductCartG: (state, action) => [...state, action.payload],
        updateProductCartG: (state, action) => {
            return state.map(prod =>
                prod.id === action.payload.id ? action.payload : prod
            )
        },
        deleteProductCartG: (state, action) => {
            return state.filter(prod => prod.id !== action.payload)
        }
    }
})

export const { setCartGlobal, addProductCartG, deleteProductCartG, updateProductCartG } = cartSlice.actions;

export default cartSlice.reducer;

// --- Thunks ---
const baseUrl = `https://backend-ecommerce-6e8l.onrender.com/`

export const getCartThunk = () => dispatch => {
    const url = baseUrl
    axios.get(url, getConfigAuth()) // 👈 Es recomendable pasar el token aquí también
        .then(res => dispatch(setCartGlobal(res.data)))
        .catch(err => console.log(err))
}

export const postCartThunk = (product, quantityRes = 1) => (dispatch, getState) => {
    const { cart } = getState() // 👈 Ahora que en el store se llama 'cart', esto funcionará perfecto
    const existingProduct = cart?.find(item => item.productId === product.id)

    if (existingProduct) {
        const url = `${baseUrl}/${existingProduct.id}`
        const newQuantity = existingProduct.quantity + quantityRes

        const data = {
            quantity: newQuantity,
            productId: product.id
        }
        
        axios.put(url, data, getConfigAuth())
            .then(res => {
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err))
    } else {
        const url = baseUrl
        const data = {
            quantity: quantityRes,
            productId: product.id
        }

        axios.post(url, data, getConfigAuth())
            .then(res => {
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err))
    }
}

export const deleteCartThunk = (id) => dispatch => {
    const url = `${baseUrl}/${id}`

    axios.delete(url, getConfigAuth())
        .then(res => {
            dispatch(deleteProductCartG(id))
        })
        .catch(err => console.log(err))
}