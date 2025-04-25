import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {

    const navigate = useNavigate()


    const createNewUser = data => {
        const url = 'https://backend-ecommerce-ukji.onrender.com/users'
        //'http://localhost:8080/users'
        axios.post(url, data)
            .then(res => {
                const loginData = {
                    email: data.email,
                    password: data.password
                  };
                  loginUser(loginData);
                console.log(res.data)
            } )
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
            navigate('/')
        }
        )
        .catch(err => console.log(err))
    }

    const isLoggedIn = () => {
        return !!localStorage.getItem('token')
    }

    const getUserFromStorage = () => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    }
    
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }



    return {loginUser ,createNewUser ,
            isLoggedIn, getUserFromStorage, logout
    } 
}

export default useAuthentication;