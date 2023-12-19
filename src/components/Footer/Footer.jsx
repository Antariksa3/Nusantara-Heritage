import React from 'react';
import './Footer.css';
import footerlogo from '../../assets/images/footer/footerlogo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <a href="#" className="footer-logo" >
            <img src={footerlogo} alt="" />
            <h4>NUSANTARA HERITAGE</h4>
          </a>
          <div className="footer-menu">
            <h5 className="footer-title">
              Eksplorasi
            </h5>
            <ul className="footer-links">
              <li>
                <a href="#" className='footer-link'>Wisata</a>
              </li>
              <li>
                <a href="#" className='footer-link'>Kuliner</a>
              </li>
              <li>
                <a href="#" className='footer-link'>Kebudayaan</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h5 className="footer-title">
              Hubungi Kami
            </h5>
            <ul className="footer-links">
              <li>
                <a href="#" className='footer-link'>Indonesia@gmail.com</a>
              </li>
              <li>
                <a href="#" className='footer-link'>081235406985</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h5 className="footer-title">
              Rekomendasi
            </h5>
            <ul className="footer-links">
              <li>
                <a href="#" className='footer-link'>Rekomendasi Wisata</a>
              </li>
              <li>
                <a href="#" className='footer-link'>Rekomendasi Kuliner</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-copy">
          &#169; 2023 Indonesia | Meng Gundud Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
