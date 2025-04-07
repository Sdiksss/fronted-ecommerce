import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCartGlobal } from "../store/slices/cart.slice"


const usePurchase = () => {

    const dispatch = useDispatch()

    const [purchases, setPurchases] = useState()

    const url = 'http://localhost:8080/purchaseItems'

    const getAllPurchases = () => {
        axios.get(url, getConfigAuth())
            .then(res =>  setPurchases(res.data))
            .catch(err => console.log(err))
    }

    const makePurchases = () => {
        axios.post(url, null, getConfigAuth())
            .then(res => {
                    console.log(res.data)
                    dispatch(setCartGlobal([]) )
                    
                })
            .catch(err => console.log(err))
    }


    return { purchases, getAllPurchases, makePurchases}

}

export default usePurchase