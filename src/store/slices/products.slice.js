import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { baseUrl } from "../../services/constants";

const productsSlice = createSlice({
    name: 'products',
    initialState: { results: [] },
    reducers: {
        setProductsGlobal: (state, actions) => actions.payload 
    }
})

export const {setProductsGlobal} = productsSlice.actions;

export default productsSlice.reducer;


const defaultUrl = `${baseUrl}/products` 

export const getAllProductsThunk = (url = defaultUrl) => dispatch => {
    axios.get(url)
    .then(res => dispatch(setProductsGlobal(res.data) ) )
    .catch(err => console.log(err))
}