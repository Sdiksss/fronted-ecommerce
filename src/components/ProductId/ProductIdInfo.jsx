import React, { useState } from 'react'
import { postCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import './styles/ProductIdInfo.css'
import { useNavigate } from 'react-router-dom'

const ProductIdInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)

    const handleQuantityAdd = () => {
        setQuantity(quantity + 1)
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
        <section className='productId-I'>
            <h3 className='productId-I__title' >{product?.title}</h3>
            <p className='productId-I__description'>{product?.description}</p>
            <footer>
                <div className='productId-I__ftr-price'>
                    <span>S/ </span>
                    <span>{product?.price}</span>
                </div>
                <div className='productId-I__ftr-stock'>
                    <span> • En stock</span>
                    <span> &mdash; {product?.stock}  unidades</span>
                </div>
                <div className='productId-rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half' ></i> <span>4.5</span>

                </div>
                <div className='productId-buyItem'>

                <div className='productId-quantity'>
                    <button className='productId-quantity__minus' onClick={handleQuantityMinus} >-</button>
                    <div>{quantity}</div>
                    <button className='productId-quantity__add' onClick={handleQuantityAdd}>+</button>
                </div>
                <button className='productId-addCart' onClick={handleAddCart}>Añadir al carrito <i className='bx bx-cart'></i></button>

                </div>
            </footer>
        </section>
    )
}

export default ProductIdInfo