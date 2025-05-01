import React, { useEffect, useState } from 'react'
import { Link, useLocation, } from 'react-router-dom'
import './styles/Header.css'
import FilterCategory from '../FilterCategory'
import useAuthentication from '../../../hooks/useAuthentication'

const Header = ({ inputValue, handleSearchName }) => {

    const location = useLocation()
    const isHome = location.pathname === '/'

    const { isLoggedIn, logout } = useAuthentication()

    const logged = isLoggedIn()

    //login hamburger menu
    const [menuOpen, setMenuOpen] = useState(false)

    console.log(menuOpen)

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
                    <ul className={`header-nav__ul ${menuOpen ? 'active' : ''}`}

                    >
                        {
                            logged ? <li className='logout' onClick={logout}>logut</li> :
                                <>
                                    <li>
                                        <Link to='/login'>Login</Link>
                                    </li>
                                    <li>
                                        <Link to='/register'>Register</Link>
                                    </li>
                                    
                                    
                                </>
                        }
                        {
                            logged && (
                                <>
                                   <li>
                                        <Link to='/cart'>Carrito

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/purchases'>Compras</Link>
                                    </li>
                                </>
                            )
                        }
                        
                        
                    </ul>

                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)} >
                        <i className='bx bx-menu'></i>
                    </div>
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