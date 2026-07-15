import { createSlice } from "@reduxjs/toolkit";

const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: false, // false = cerrado, true = abierto
    reducers: {

        // 🔥 abrir/cerrar directamente
        setShowLogin: (state, action) => action.payload,

        // 🔥 abrir modal
        openLogin: () => true,

        // 🔥 cerrar modal
        closeLogin: () => false,

        // 🔥 alternar (opcional)
        toggleLogin: (state) => !state
    }
})

export const {
    setShowLogin,
    openLogin,
    closeLogin,
    toggleLogin
} = loginModalSlice.actions

export default loginModalSlice.reducer