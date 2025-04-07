import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import './styles/FilterCategory.css'

const FilterCategory = () => {

    const baseUrl = 'https://backend-ecommerce-ukji.onrender.com/categories'
    //`http://localhost:8080/categories`
    const [categories, getAllcategories] = useFetch(baseUrl)

    useEffect(() => {
        getAllcategories()
    }, [])

    const dispatch = useDispatch()

    const handleFilterCategory = (id) => {
        if (id) {
            const url = `https://backend-ecommerce-ukji.onrender.com/products?categoryId=${id}`
            //`http://localhost:8080/products?categoryId=${id}`
            dispatch(getAllProductsThunk(url))
        } else {
            dispatch(getAllProductsThunk())
        }
    }

    return (
        <article className='filterCategory__container'>
            {/* <h3>
                Categories
            </h3> */}
            <ul className='filterCategory__ul'>
                <li className='filterCategory__ul__li'
                    onClick={() => handleFilterCategory()}>
                    <i className='bx bx-list-ul' style={{fontSize: '1.3em'}} ></i>
                    All categories
                </li>
                {categories?.map(category => (
                    <li className='filterCategory__ul__li'
                        onClick={() => handleFilterCategory(category.id)}
                        key={category.id}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default FilterCategory