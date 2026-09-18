import axios from 'axios';
import store from '../store';
import { setShowLogin } from '../store/slices/loginModal.slice';
import { baseUrl } from './constants';

const api = axios.create({
    baseURL: baseUrl,
    timeout: 10000
});

// ... resto de tus interceptores iguales ...

export default api;