import React from 'react';
import './Footer.css';
import footer1 from '../../assets/images/footer/footer1.png';
import footer3 from '../../assets/images/footer/footer3.png';
import footer4 from '../../assets/images/footer/footer4.png';
import footerlogo from '../../assets/images/footer/footerlogo.png';

const Footer = () => {
  return (
      <div className="background">
        <img className="footertengah" src={footer1} alt="footer1" />
        <img className="footerkiri" src={footer3} alt="footer3" />
        <img className="footerkanan" src={footer4} alt="Footer4" />
      <div className="Footer2023IndonesiaPrivacyAndPolicy">
        <span>@ 2023 Indonesia | </span>
        <span>Privacy and policy</span>
      </div>
      <div className="FooterLogo">
        <div className="FooterLogoText">Logo</div>
        <img className="footerlogo" src={footerlogo} alt="footerlogo" />
      </div>
      <div className="footerlist">
        <div className="FooterWisata">Wisata</div>
        <div className="FooterKebudayaan">Kebudayaan</div>
        <div className="FooterKuliner">Kuliner</div>
        <div className="FooterEkplorasi">Ekplorasi</div>
      </div>
      <div className="FooterVector6"></div>
      <div className="FooterHubungiKami">
        <div className="FooterHubungiKamiText">Hubungi kami</div>
          <div className="FooterIndonesiaGmailCom">Indonesia@gmail.com</div>
          <div>01209102010</div>
      </div>
    </div>
  );
};

export default Footer;
