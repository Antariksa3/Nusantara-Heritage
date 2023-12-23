import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import headerlogo from '../../assets/images/footer/footerlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const HeaderDetail = () => {

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
            <NavLink to='/' className='web-name'>
                <img src={headerlogo} alt="" />
                <h4>NUSANTARA HERITAGE</h4>
            </NavLink>
            <div className={`menu ${showSidebar && 'active'}`} onClick={handleShowSidebar}>
                {showSidebar ? (
                    <FontAwesomeIcon icon={faXmark} />
                ) : (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </div>
            {/* <div className={`close-btn ${showSidebar && 'active'}`} onClick={handleShowSidebar}>x</div> */}
            <nav className={`nav-a ${showSidebar && 'active'}`}>
                <NavLink to='/' onClick={handleShowSidebar}>Provinsi</NavLink>
                <NavLink to='/' onClick={handleShowSidebar}>Wisata</NavLink>
                <NavLink to='/' onClick={handleShowSidebar}>Kuliner</NavLink>
                <NavLink to='/' onClick={handleShowSidebar}>Kebudayaan</NavLink>
            </nav>
        </header>
    )
}

export default HeaderDetail
