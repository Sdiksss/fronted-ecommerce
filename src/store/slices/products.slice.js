import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const productsSlice = createSlice({
    name: 'products',
    initialState: { results: [] },
    reducers: {
        setProductsGlobal: (state, actions) => actions.payload 
    }
})

export const {setProductsGlobal} = productsSlice.actions;

export default productsSlice.reducer;

//Peticion   https://backend-ecommerce-6e8l.onrender.com

const defaultUrl = `https://backend-ecommerce-6e8l.onrender.com/` 

export const getAllProductsThunk = (url = defaultUrl) => dispatch => {
    axios.get(url)
    .then(res => dispatch(setProductsGlobal(res.data) ) )
    .catch(err => console.log(err))
}