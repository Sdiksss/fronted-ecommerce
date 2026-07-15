import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartThunk } from '../../store/slices/cart.slice'
import './styles/CartElement.css'

const CartElement = ({ productCart }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCartThunk(productCart.id))
    }

    console.log(productCart)

    return (
        <article className='cartPage-product'>
            <header className="cartPage-product__header">
                <img src={productCart?.product.images[0]?.url} alt={productCart?.product.title} />
            </header>

            <section className="cartPage-product__body">
                <h3>{productCart?.product.title}</h3>
                <p>
                    <span>{productCart?.quantity}</span> x <span>S/ {productCart?.product.price}</span>
                </p>
            </section>

            <footer className="cartPage-product__footer">
                <span>Subtotal</span>
                <span>S/ {productCart?.quantity * productCart?.product.price}</span>
                <button onClick={handleDelete}>
                    <i style={{ fontSize: '1.5rem' }} className='bx bx-trash'></i>
                </button>
            </footer>
        </article>

    )
}

export default CartElement