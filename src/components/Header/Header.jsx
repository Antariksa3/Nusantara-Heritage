import React, { useRef, useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [showSidebar, setShowSidebar] = useState(false)
    const [addBackground, setAddBackground] = useState(false)

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setAddBackground(true);
        } else {
            setAddBackground(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <header className={`header ${addBackground && 'active'}`}>
            <p className='web-name'>NUSANTARA HERITAGE</p>
            <div className={`menu ${showSidebar && 'active'}`} onClick={handleShowSidebar}>=</div>
            <nav className={`nav-a ${showSidebar && 'active'}`}>
                <div className={`close-btn ${showSidebar && 'active'}`} onClick={handleShowSidebar}>x</div>
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
