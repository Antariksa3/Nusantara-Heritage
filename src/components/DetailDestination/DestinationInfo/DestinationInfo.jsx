import React from 'react'
import './DestinationInfo.css'

import detaildesimg from '../../../assets/images/detail-destination/detail-destination-1.jpg'

const DestinationInfo = () => {
    return (
        <div className="detail-destination">
            <div className="detail-destination-heading">
                <img src={detaildesimg} alt="" />
                <h1>Candi Borobudur</h1>
            </div>
            <div className="detail-destination-content">
                <div className="detail-desc">
                    <h2>Deskripsi</h2>
                    <p>
                        Candi Borobudur terletak di Jawa Tengah, Indonesia, sekitar 40 kilometer sebelah barat daya Yogyakarta. Berdiri megah di antara lereng Gunung Merapi, Merbabu, dan Menoreh, candi ini menjadi salah satu situs sejarah terpenting di Indonesia. Lokasinya yang berada di tengah-tengah pegunungan memberikan pemandangan spektakuler saat matahari terbit, menciptakan suasana magis yang menakjubkan bagi pengunjungnya.
                    </p>
                </div>
                <div className="detail-history">
                    <h2>Sejarah</h2>
                    <p>
                        Candi Borobudur, dibangun pada abad ke-8 dan ke-9 oleh dinasti Syailendra, merupakan keajaiban arsitektur dan kepercayaan Buddha di Indonesia. Ditinggalkan dan terlupakan selama berabad-abad, situs ini ditemukan kembali oleh Sir Thomas Stamford Raffles pada tahun 1814. Candi ini memiliki struktur piramida bertingkat dengan ribuan panel relief dan arca Buddha, yang menggambarkan ajaran Buddha dan kisah-kisah yang terkait. Setelah menjalani proses pemugaran, Borobudur diakui sebagai Situs Warisan Dunia oleh UNESCO pada tahun 1991, dan kini menjadi salah satu destinasi wisata budaya dan spiritual paling terkenal di Indonesia.
                    </p>
                </div>
                <div className="detail-attraction">
                    <h2>Daya Tarik dari Candi Borobudur</h2>
                    <p>
                        Candi Borobudur, terletak di Jawa Tengah, Indonesia, adalah masterpiece arsitektur dan seni Buddha. Dibangun pada abad ke-9 oleh dinasti Sailendra, candi ini mencapai tingkat keindahan tak tertandingi dengan desain berlapis dan relief batu yang memukau. Struktur monumental ini, yang terdiri dari sembilan teras berbentuk stupa terbalik, mencerminkan perjalanan spiritual menuju pencerahan dalam ajaran Buddha. Relief batu yang rumit mengisahkan kehidupan Buddha dan nilai-nilai Dharma, menciptakan galeri seni budaya yang luar biasa.
                        <br /><br />
                        Keunikan Candi Borobudur tak hanya terletak pada kecanggihan arsitekturnya, tetapi juga pada konteksnya sebagai pusat keagamaan Buddha yang penting di masa lampau. Dikelilingi oleh hamparan sawah hijau dan pegunungan yang megah, candi ini menjadi destinasi spiritual dan wisata yang menarik, menawarkan pengalaman mendalam tentang sejarah, seni, dan keagamaan Indonesia.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DestinationInfo
