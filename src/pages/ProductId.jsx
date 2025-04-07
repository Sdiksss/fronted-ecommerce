import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import SliderImgs from '../components/ProductId/SliderImgs'
import SimilarProducts from '../components/ProductId/SimilarProducts'

const ProductId = () => {

   const {id}  = useParams()

   const url = `https://backend-ecommerce-ukji.onrender.com/products/${id}`
   
  // `http://localhost:8080/products/${id}`

  const [product, getProductById] = useFetch(url)

  useEffect(() => {
    getProductById()
  }, [])

  

  return (
    <div>
      <section>
        <SliderImgs 
        product = {product}
        />
        <ProductIdInfo 
        product = {product}
        />
        <SimilarProducts 
        product = {product}/>
      </section>
    </div>
  )
}

export default ProductId