import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/FilterPrice.css'

const FilterPrice = ({ setPrice, PriceMinMax }) => {

    const { register, reset, handleSubmit } = useForm()

    const submit = (data) => {
        const min = data.from.trim() === "" ? 0 : +data.from
        const max = data.to.trim() === "" ? Infinity : +data.to

        setPrice({
            min, max
        })
    }

    const handleClearFilterPrice = () => {
        setPrice({
            min: 0,
            max: Infinity
        })
        reset()
    }

    return (
        <section className="filter-price">
            <form onSubmit={handleSubmit(submit)} className="filter-price__form">
                <div className="filter-price__input">
                    <label htmlFor="from">From</label>
                    <input {...register('from')} type="number" id='from' />
                </div>
                <div className="filter-price__input">
                    <label htmlFor="to">To</label>
                    <input {...register('to')} type="number" id='to' />
                </div>
                <button className="filter-price__button">Filter Price</button>
            </form>

            {(PriceMinMax.min !== 0 || PriceMinMax.max !== Infinity) &&
                <p className="filter-price__summary">
                    From {PriceMinMax.min} to {PriceMinMax.max}
                    <b onClick={handleClearFilterPrice} className="filter-price__clear">
                    <i className='bx bxs-x-circle'></i>
                    </b>
                </p>
            }
        </section>
    )
}

export default FilterPrice
