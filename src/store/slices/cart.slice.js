import { createSlice } from "@reduxjs/toolkit";
import getConfigAuth from "../../utils/getConfigAuth";
import axios from "axios";

const cartSlice =  createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload,
        addProductCartG: (state, action) => [...state, action.payload],
        deleteProductCartG: (state, action) => {
            return state.filter(prod => prod.id !== action.payload)
        }
    }
})

export const {setCartGlobal, addProductCartG, deleteProductCartG} = cartSlice.actions;

export default cartSlice.reducer;


//thunks 

const baseUrl = `http://localhost:8080/cartItems`

export const getCartThunk = () =>  dispatch => {
    const url = baseUrl
    axios.get(url)
        .then(res => dispatch(setCartGlobal(res.data)))
        .catch(err => console.log(err))
}

export const postCartThunk = (product, quantityRes = 1) => dispatch => {
    const url = baseUrl

    const data = {
        quantity: quantityRes,
        productId: product.id
    }


    axios.post(url, data, getConfigAuth())
        .then(res => {
            const obj = {
                ...res.data,
                product: product,
            }
            console.log(obj)
            dispatch(addProductCartG(obj))
        })
        .catch(err => console.log(err))
}

export const deleteCartThunk = (id) => dispatch => {
    const url = `${baseUrl}/${id}`

    axios.delete(url, getConfigAuth())
        .then(res => {
            dispatch(deleteProductCartG(id))
            console.log(res.data)
        } )
        .catch(err => console.log(err))

}