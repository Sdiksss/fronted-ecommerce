import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import './styles/FilterCategory.css'
import {baseUrl} from "../../services/constants"

const FilterCategory = () => {

    const Url = `${baseUrl}/categories`
    //`http://localhost:8080/categories`
    const [categories, getAllcategories] = useFetch(Url)

    useEffect(() => {
        getAllcategories()
    }, [])

    const dispatch = useDispatch()

    const handleFilterCategory = (id) => {
        if (id) {
            const url = `${baseUrl}/products?categoryId=${id}`
            //`http://localhost:8080/products?categoryId=${id}`
            dispatch(getAllProductsThunk(url))
        } else {
            dispatch(getAllProductsThunk())
        }
    }

    return (
        <article className='filterCategory__container'>
            <h4>Categories</h4>
            <ul className='filterCategory__ul'>
                <li className='filterCategory__ul__li'
                    onClick={() => handleFilterCategory()}>
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