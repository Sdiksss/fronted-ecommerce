import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartElement from '../components/cart/CartElement'
import usePurchase from '../hooks/usePurchase'
import './styles/CartPage.css'
import CartPayment from '../components/cart/CartPayment'

const CartPage = () => {
  
  const dispatch = useDispatch()

  const cart = useSelector(states => states.cartGlobal)

  const totalPrice = cart?.reduce((acc, cv) => {
    const subTotal = cv.quantity * cv.product.price
    return acc + subTotal
  }, 0)

  const { purchases, getAllPurchases, makePurchases } = usePurchase();


  const handlePurchase = () => {
    dispatch(makePurchases())
    //     dispatch(setCartGlobal([]) ) en usePurchase

  }
  return (
    <>
    
    <section className='carPage-body'>

      {cart?.length === 0 ? (
        <p className="cartPage-empty">No tienes nada en el carrito.</p>
      ) : (
        <>
          <div className='cartPage-products'>
            {cart?.map(productCart => (
              <CartElement
                key={productCart.id}
                productCart={productCart}
              />
            ))}
          </div>
          <footer className='cartPage-footer'>
            <div className='cartPage-info'>
              <h2 className='cartPage-summary'>Resumen</h2>
              <div className='cartPage-purchase_cost'>
                <span>Estimación total</span>
                <span> S/ {totalPrice} </span>

              </div>
              <button className='cartPage_btn-purchase' onClick={handlePurchase}>Purchase this cart</button>
            </div>
            <div className="cartPage__buyer-protection">
              <h3 className="cartPage__buy-protect-title">Protección del comprador</h3>
              <p className="cartPage__buy-protect-description">
                Recibe un reembolso de tu dinero si el artículo no llega o es diferente al de la descripción.
              </p>
            </div>

          </footer>

        </>
      )}
    </section>
    <section>
      <CartPayment/>
    </section>

     </>
  )
}

export default CartPage