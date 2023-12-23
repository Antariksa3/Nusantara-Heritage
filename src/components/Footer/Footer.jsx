import React from 'react';
import { Link as ScrollLink } from 'react-scroll'
import './Footer.css';
import footerlogo from '../../assets/images/footer/footerlogo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <ScrollLink to="discover" spy={true} smooth={true} duration={500} className='footer-logo'>
            <img src={footerlogo} alt="" />
            <h4>NUSANTARA HERITAGE</h4>
          </ScrollLink>
          <div className="footer-menu">
            <h5 className="footer-title">
              Eksplorasi
            </h5>
            <ul className="footer-links">
              <li>
                <ScrollLink to="explore" spy={true} smooth={true} offset={20} duration={500} className='footer-link'>Provinsi</ScrollLink>
              </li>
              <li>
                <ScrollLink to="destination" spy={true} smooth={true} offset={-60} duration={500} className='footer-link'>Wisata</ScrollLink>
              </li>
              <li>
                <ScrollLink to="culinary" spy={true} smooth={true} offset={-120} duration={500} className='footer-link'>Kuliner</ScrollLink>
              </li>
              <li>
                <ScrollLink to="culinary" spy={true} smooth={true} offset={-40} duration={500} className='footer-link'>Kebudayaan</ScrollLink>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h5 className="footer-title">
              Hubungi Kami
            </h5>
            <ul className="footer-links">
              <li>
                <a href="mailto:justdixxyy@gmail.com" className='footer-link'>menggundud@gmail.com</a>
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
                <ScrollLink to="destination" spy={true} smooth={true} offset={-60} duration={500} className='footer-link'>Rekomendasi Wisata</ScrollLink>
              </li>
              <li>
                <ScrollLink to="culinary" spy={true} smooth={true} offset={-120} duration={500} className='footer-link'>Rekomendasi Kuliner</ScrollLink>
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

export default Footer;
