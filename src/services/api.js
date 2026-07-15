import axios from 'axios'
import store from '../store'
import { setShowLogin } from '../store/slices/loginModal.slice'

// 🔥 Crear instancia
const api = axios.create({
    baseURL: 'https://backend-ecommerce-ukji.onrender.com/',
    timeout: 10000 // opcional (evita requests colgados)
})


// =========================
// 🔐 REQUEST INTERCEPTOR
// =========================
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    error => Promise.reject(error)
)


// =========================
// 🚨 RESPONSE INTERCEPTOR
// =========================
api.interceptors.response.use(
    res => res,
    err => {

        // 🔴 ERROR DE AUTORIZACIÓN
        if (err.response?.status === 401 || err.response?.status === 403) {
            localStorage.removeItem('token')

            // 🔥 abre modal login
            store.dispatch(setShowLogin(true))
        }

        // 🌐 ERROR DE RED (sin respuesta del server)
        if (!err.response) {
            console.error('Error de red o servidor no disponible')
        }

        return Promise.reject(err)
    }
)

export default api