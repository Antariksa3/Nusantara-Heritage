import React from "react"
import './NewsFlash.css'
import DetailImage from '../../../assets/images/discover/discover-background-ori.png'

const NewsFlash = (props) => {
    return (
        <div className="news-flash">
            <div className="news-flash-image">
                <img src={DetailImage} alt="" />
            </div>
            <div className="news-flash-content">
                <h3>
                    Sekilas Info
                </h3>
                <p>
                    {/* Jawa Barat adalah sebuah provinsi di Indonesia yang terletak di bagian barat pulau Jawa, dengan ibu kota provinsi di Kota Bandung. Jawa Barat berbatasan dengan provinsi Banten dan wilayah ibu kota Jakarta di sebelah barat, Laut Jawa di utara, Provinsi Jawa Tengah di timur, dan Samudera Hindia di sebelah selatan. Bersama dengan Provinsi Banten, Jawa Barat disebut sebagai Tatar Sunda atau Pasundan karena merupakan kampung asli masyarakat Sunda, suku terbesar kedua di Indonesia. */}
                    {props.flash_info}
                </p>
            </div>
        </div>
    )
}

export default NewsFlash