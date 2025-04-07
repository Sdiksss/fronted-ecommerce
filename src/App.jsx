import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Home/shared/Header'
import ProductId from './pages/ProductId'
import Login from './pages/Login'
import Register from './pages/Register'
import CartPage from './pages/CartPage'
import { getCartThunk } from './store/slices/cart.slice'
import Purchase from './pages/Purchase'
import ProtectedRoutes from './pages/ProtectedRoutes'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  //filter title 


  const [inputValue, setInputValue] = useState('')

  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase())
  }


  return (
    <div className='container'>
      <Header
        inputValue={inputValue}
        handleSearchName={handleSearchName}
      />
      <div className='body'>

        <Routes>
          <Route path='/' element={
            <Home
              inputValue={inputValue}
            />
          } />
          <Route path='/product/:id' element={<ProductId />} />
          <Route path='/login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/purchases' element={<Purchase />} />
          </Route>

        </Routes>
      </div>
    </div>
  )
}

export default App
