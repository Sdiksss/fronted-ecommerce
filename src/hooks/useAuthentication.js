import axios from "axios";
import { useState } from "react"

const useAuthentication = () => {


    const createNewUser = data => {
        const url = 'https://backend-ecommerce-ukji.onrender.com/users'
        //'http://localhost:8080/users'
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    const loginUser = data => {
        const url = 'https://backend-ecommerce-ukji.onrender.com/users/login'
        //`http://localhost:8080/users/login`
    axios.post(url, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
        }
        )
        .catch(err => console.log(err))
    }
    

    return {loginUser ,createNewUser} 
}

export default useAuthentication;