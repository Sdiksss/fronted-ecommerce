import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import './styles/Home.css'
import FilterPrice from '../components/Home/FilterPrice'
const Home = ({inputValue}) => {

    const productsGlobal = useSelector(states => states.productsGlobal)

    
    //filter price
    const [PriceMinMax, setPriceMinMax] = useState({
        min: 0,
        max: Infinity
    })



    const cbFilterPrice = prod => {
        const condMin = PriceMinMax.min <= prod.price
        const condMax = prod.price <= PriceMinMax.max 
        return condMin && condMax
    } 

    //filter name


    const callBackFilter = prod => prod.title.toLowerCase().includes(inputValue)

    return (
        <div className='homePage'>

            <aside>
                <FilterPrice 
                setPrice={setPriceMinMax}
                PriceMinMax= {PriceMinMax}/>
            </aside>

            <div className='products__container'>
                {
                    productsGlobal?.results.filter(callBackFilter).filter(cbFilterPrice).map(product => (
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Home