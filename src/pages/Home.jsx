import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import './styles/Home.css'
import FilterPrice from '../components/Home/FilterPrice'
import FilterCategory from '../components/Home/FilterCategory'
import MainSlider from '../components/Home/MainSlider'
const Home = ({ inputValue }) => {

    const productsGlobal = useSelector(states => states.productsGlobal)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }, [isMenuOpen]);


    //filter price
    const [PriceMinMax, setPriceMinMax] = useState({
        min: 0,
        max: Infinity
    })

    const handleMenuFilter = () => {
        setIsMenuOpen(prev => !prev)
    }



    const cbFilterPrice = prod => {
        const condMin = PriceMinMax.min <= prod.price
        const condMax = prod.price <= PriceMinMax.max
        return condMin && condMax
    }

    //filter name


    const callBackFilter = prod => prod.title.toLowerCase().includes(inputValue)



    return (
        <>
            <div className='homePage'>
                <div className='filters-menu'>
                    <button className='main-filters'
                        onClick={handleMenuFilter}>
                        <i className='bx bx-category-alt'></i> Filtros
                    </button>
                </div>

                <MainSlider />



                <div className='Home-products'>
                    <aside className={`filters ${isMenuOpen ? 'show' : ''}`}>
                        <h3>Filters</h3>
                        <button className='close-filters' onClick={handleMenuFilter}>
                            <i className='bx bxs-x-circle'></i>
                        </button>
                        <FilterPrice
                            handleMenuFilter={handleMenuFilter}
                            setPrice={setPriceMinMax}
                            PriceMinMax={PriceMinMax}
                        />
                        <FilterCategory />
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



            </div>
        </>

    )
}

export default Home