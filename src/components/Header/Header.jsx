import React, { useRef, useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <header>
            <p className='web-name'>NUSANTARA HERITAGE</p>
            <div className={`menu ${showNavbar && 'active'}`} onClick={handleShowNavbar}>=</div>
            <nav className={`nav-a ${showNavbar && 'active'}`}>
                <div className={`close-btn ${showNavbar && 'active'}`} onClick={handleShowNavbar}>x</div>
                <NavLink to={""}>Provinsi</NavLink>
                <NavLink to={""}>Wisata</NavLink>
                <NavLink to={""}>Kuliner</NavLink>
                <NavLink to={""}>Kebudayaan</NavLink>
                <NavLink to={""}>Bahasa</NavLink>
            </nav>
        </header>
    )
}

export default Header
