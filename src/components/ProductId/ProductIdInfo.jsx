import React, { useState } from 'react'
import { postCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const ProductIdInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)

    const handleQuantityAdd = () => {
        setQuantity(quantity+1)
    }

    const handleQuantityMinus = () => {
       if (quantity > 1) {
        setQuantity(quantity - 1)
       } 
    }

    const dispatch = useDispatch()

    const handleAddCart = () => {
        dispatch(postCartThunk(product, quantity))
    }

    return (
        <section>
            <h3>{product?.title}</h3>
            <p>{product?.description}</p>
            <footer>
                <div>
                    <span>Price </span>
                    <span>{product?.price}</span>
                </div>
                <div>
                    <span>stock</span>
                    <span>{product?.stock}</span>
                </div>
                <div>
                    <button onClick={handleQuantityMinus} >-</button>
                    <div>{quantity}</div>
                    <button onClick={handleQuantityAdd}>+</button>
                </div>
                <button onClick={handleAddCart}>Añadir al carrito <i className='bx bx-cart'></i></button>
            </footer>
        </section>
    )
}

export default ProductIdInfo