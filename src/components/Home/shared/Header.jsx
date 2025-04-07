import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles/Header.css'
import FilterCategory from '../FilterCategory'

const Header = ({ inputValue, handleSearchName }) => {

    const location = useLocation()
    const isHome = location.pathname === '/'


    return (
        <header className='header-container'>
            <div className='header-principal'>
                <h1 className='header__h1'><Link to='/'>store</Link></h1>
                <form className='header-search' action="">
                    <input className='header-search__input' type="text" placeholder='buscar'
                        value={inputValue}
                        onChange={handleSearchName}
                    />
                    <button className='header-search__btn'><i className='bx bx-search-alt-2' ></i></button>
                </form>


                <nav className='header-nav'>
                    <ul className='header-nav__ul'>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>

                        <li>
                            <Link to='/purchases'>Compras</Link>
                        </li>
                        <li>
                            <Link to='/cart'><i className='bx bxs-cart'></i></Link>
                        </li>
                        <li>
                            <Link to='/purchases'>Purchases</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {
                isHome && (
                    <div className='header-secondary'>
                        <FilterCategory />
                    </div>
                )
            }
            
        </header>
    )
}

export default Header