import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartThunk } from '../../store/slices/cart.slice'

const CartElement = ({ productCart }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCartThunk(productCart.id) )
    }

    console.log(productCart)

    return (
        <article>
            <header>
                <img src={productCart?.product.images[0].url} alt="" />
            </header>
            <section>
                <h3>{productCart?.product.title}</h3>
                <p>
                    <span>{productCart?.quantity} </span>
                    x
                    <span>{productCart?.product.price}</span>
                </p>
                <button onClick={handleDelete}>
                    <i style={{fontSize: '2rem', cursor: 'pointer'}} className='bx bx-trash'></i>
                </button>
            </section>
            <footer>
                <span> subtotal </span><span>{productCart?.quantity * productCart?.product.price }</span>
                <span>  </span>
            </footer>
        </article>
    )
}

export default CartElement