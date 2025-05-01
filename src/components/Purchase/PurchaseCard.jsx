import React from 'react'
import './styles/PurchaseCard.css'

const PurchaseCard = ({prod}) => {
    console.log(prod)

  return (
    <article className='Purchase-product'>
        <img className='Purchase-product__img' src={prod.product.images[0].url} alt="" />
        <h3>{prod.product.title}</h3>
        <div>
            <span>{prod.quantity}</span> x <span>{prod.product.price}</span>
            <span>{prod.totalPrice}</span>
        </div>
    </article>
)
}

export default PurchaseCard