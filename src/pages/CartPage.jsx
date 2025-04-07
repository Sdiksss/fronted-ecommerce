import React from 'react'
import {  useSelector } from 'react-redux'

import CartElement from '../components/cart/CartElement'
import usePurchase from '../hooks/usePurchase'

const CartPage = () => {

  const cart = useSelector(states => states.cartGlobal)

  const totalPrice = cart?.reduce((acc, cv) => {
    const subTotal = cv.quantity * cv.product.price
    return acc + subTotal
  }, 0)

const {purchases, getAllPurchases, makePurchases} = usePurchase();


  const handlePurchase = () => {
    makePurchases()  
    //     dispatch(setCartGlobal([]) ) en usePurchase

  }
  return (
    <section>

      <div>
        {cart?.map(productCart => (
          <CartElement
            key={productCart.id}
            productCart={productCart}
          />
        ))}
      </div>
      <footer>
        <div>
          <span>total</span>
          <span> {totalPrice} </span>
        </div>
        <button onClick={handlePurchase}>Purchase this cart</button>
      </footer>
    </section>
  )
}

export default CartPage