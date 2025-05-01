import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import SliderImgs from '../components/ProductId/SliderImgs'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import './styles/ProductId.css'

const ProductId = () => {

  const { id } = useParams()

  const url = `https://backend-ecommerce-ukji.onrender.com/products/${id}`

  // `http://localhost:8080/products/${id}`

  const [product, getProductById] = useFetch(url)

  useEffect(() => {
    getProductById()
  }, [])



  return (
    <div className='productId'>
      
        <section className='productId__section'>
          <SliderImgs
            product={product}
          />
          <ProductIdInfo
            product={product}
          />
        </section>
        <SimilarProducts
          product={product} />
      
    </div>
  )
}

export default ProductId