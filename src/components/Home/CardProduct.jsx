import React from 'react'
import './styles/CardProduct.css'
import { useNavigate } from 'react-router-dom'
import { addProductCartG, postCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CardProduct = ({ product }) => {

    const navigate = useNavigate()

    const handleSelectProduct = () => {
            navigate(`/product/${product.id}`)
    }

    const dispatch = useDispatch()

    const handleBtnClick = e => {
        e.stopPropagation()
        dispatch(postCartThunk(product))
    }



    return (
        <article className='product' onClick={handleSelectProduct}>
            <header className='product__header'>
                <img className='product__img product__img1' src={product.images[0].url} alt="" />
                <img className='product__img product__img2' src={product.images[1].url} alt="" />
        
            </header>

            <section className='product__section'>
                
                <h3 className='product__title'>{product.title}</h3>
                <div>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star-half' ></i> <span>4.5</span> 
        
                </div>
            </section>

            <div className='product__price'>
                <span className='product__price-value'>S/ {product.price}</span>
            </div>
            
            <button onClick={handleBtnClick} className='product__btn'>
                <i className='bx bx-cart'></i>
            </button>
        </article>
    )
}

export default CardProduct

