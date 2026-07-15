import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/SliderImgs.css'

const SliderImgs = ({ product }) => {

  const [indexImg, setIndexImg] = useState()

  const styleMovible = {
    transform: `translateX(calc( (-${indexImg} /  ${product?.images.length}) * 100% ))`,
    width: `${product?.images.length*100}%`
  }
  const imageMovible = {
  
  }

  console.log(indexImg)

  const handlePrevious = () => {
    if (indexImg > 0) {
      setIndexImg(indexImg - 1)
    }
    else {
      setIndexImg(1)
    }
  }

  const handleNext = () => {
    if (indexImg <  product?.images.length - 1) {
      setIndexImg(indexImg + 1);
    } else {
      setIndexImg(0); // vuelve al inicio
    }
  };

  console.log(indexImg)

  console.log(product)

  return (
    <div className='slider-container'>
      <div className='slider-body' >
        <button
          onClick={handlePrevious}
          className='slider__btn slider__left'>&lt;
        </button>
        <div style={styleMovible} className='slider__movible'>
          {
            product?.images.map(imgInfo => (
              <div  style={imageMovible} className='slider__img-container' key={imgInfo.id}>
                <img className='slider__img' src={imgInfo.url} alt="" />
              </div>
            ))
          }
        </div>
        <button
          onClick={handleNext}
          className='slider__btn slider__right'>&gt;
        </button>
      </div>
      <div className='slider__footer' >
          {
            product?.images.map((imgInfo, i) => (
              <div  className={`slider__img-container slider__footer__img-container ${i === indexImg && 'slider__img-active'}`} 
               key={imgInfo.id}
                  onClick={() => setIndexImg(i)}
                  >

                <img className='slider__img-footer' src={imgInfo.url} alt="" />
              </div>
            ))
          }
      </div>
    </div>

  )
}

export default SliderImgs