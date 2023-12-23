import React from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css';
import footerlogo from '../../assets/images/footer/footerlogo.png';

const FooterDetail = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <NavLink to='/' preventScrollReset={true} className='footer-logo'>
            <img src={footerlogo} alt="" />
            <h4>NUSANTARA HERITAGE</h4>
          </NavLink>
          <div className="footer-menu">
            <h5 className="footer-title">
              Eksplorasi
            </h5>
            <ul className="footer-links">
              <li>
                <NavLink to='/' preventScrollReset={true} className='footer-link'>Provinsi</NavLink>
              </li>
              <li>
                <NavLink to='/' preventScrollReset={true} className='footer-link'>Wisata</NavLink>
              </li>
              <li>
                <NavLink to='/' preventScrollReset={true} className='footer-link'>Kuliner</NavLink>
              </li>
              <li>
                <NavLink to='/' preventScrollReset={true} className='footer-link'>Kebudayaan</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h5 className="footer-title">
              Hubungi Kami
            </h5>
            <ul className="footer-links">
              <li>
                <a href="mailto:menggundud@gmail.com" className='footer-link'>menggundud@gmail.com</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=62895426174000" className='footer-link'>0895-4261-74000</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h5 className="footer-title">
              Rekomendasi
            </h5>
            <ul className="footer-links">
              <li>
                <NavLink to='/' preventScrollReset={true} className='footer-link'>Rekomendasi Wisata</NavLink>
              </li>
              <li>
                <NavLink to='/' preventScrollReset={true} className='footer-link'>Rekomendasi Kuliner</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copy">
          &#169; 2023 Indonesia | Meng Gundud Team
        </div>
      </div>
    </footer>
  );
};

export default FooterDetail;
