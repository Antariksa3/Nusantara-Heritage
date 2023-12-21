import React, { useState } from 'react'
import './Header.css'
import { Link as ScrollLink } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import headerlogo from '../../assets/images/footer/footerlogo.png';


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
            <ScrollLink to="discover" spy={true} smooth={true} duration={500} className='web-name'>
                <img src={headerlogo} alt="" />
                <h4>NUSANTARA HERITAGE</h4>
            </ScrollLink>
            <div className={`menu ${showSidebar && 'active'}`} onClick={handleShowSidebar}>=</div>
            <div className={`close-btn ${showSidebar && 'active'}`} onClick={handleShowSidebar}>x</div>
            <nav className={`nav-a ${showSidebar && 'active'}`}>
                <ScrollLink to="explore" spy={true} smooth={true} offset={-20} duration={500}>Provinsi</ScrollLink>
                <ScrollLink to="destination" spy={true} smooth={true} offset={-40} duration={500}>Wisata</ScrollLink>
                <NavLink to={""}>Kuliner</NavLink>
                <NavLink to={""}>Kebudayaan</NavLink>
                <NavLink to={""}>Bahasa</NavLink>
            </nav>
        </header>
    )
}

export default Header
