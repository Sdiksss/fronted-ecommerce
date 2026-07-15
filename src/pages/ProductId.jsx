import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import SliderImgs from '../components/ProductId/SliderImgs'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import './styles/ProductId.css'
import Specs from '../components/ProductId/Specs'

const ProductId = () => {

  const { id } = useParams()

  //https://backend-ecommerce-6e8l.onrender.com/products/2
  //http://localhost:8080/products/

  const url = `http://localhost:8080/products/${id}`

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
        <section className='specs'>
          <Specs
            product={product}
          />

        </section>
        <SimilarProducts
          product={product} />
      
    </div>
  )
}

export default ProductId