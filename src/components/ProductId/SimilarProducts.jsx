import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'

import './styles/SimilarProducts.css'


const SimilarProducts = ({ product }) => {

    const url = `https://backend-ecommerce-ukji.onrender.com/products?categoryId=${product?.categoryId}`
    //`http://localhost:8080/products?categoryId=${product?.categoryId}`

    const [FilterProducts, getProductsByCategory] = useFetch(url)

    useEffect(() => {
        if (product) {
        getProductsByCategory()
        }
    }, [product])

    return (
        <section>
            <h2>Similar products</h2>
            <div className='similar--products'>
                {
                    FilterProducts?.results.map(prod => {
                        if (prod.id !== product.id)
                            return (
                                <CardProduct 
                                    key={prod.id}
                                    product={prod}
                                />
                            )
                    })
                }
            </div>
        </section>
    )
}

export default SimilarProducts