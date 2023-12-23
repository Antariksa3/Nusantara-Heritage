import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import './Culinary.css'
import 'swiper/css'
import 'swiper/swiper-bundle.css'

import CulinaryCard from './CulinaryCard/CulinaryCard'

import culinary1 from '../../../assets/images/culinary/culinary-1.jpg'
import { getCulinary } from '../../../api/api'

const Culinary = () => {
    const [culinaries, setCulinary] = useState([]);
    const [selectedCulinary, setSelectedCulinary] = useState(null);

    useEffect(() => {
        getCulinary().then((culinary) => {
            setCulinary(culinary)
        });
    }, []);

    const handleCulinaryClick = (culinary) => {
        setSelectedCulinary(culinary);
    };

    const CulinaryList = () => {
        return (
            <Swiper
                grabCursor={true}
                loop={true}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    432: {
                        slidesPerView: 1.5,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2.75,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 4.5,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay]}
            >
                {culinaries.map((culinary, i) => (
                    <SwiperSlide key={i}>
                        <CulinaryCard
                            image={culinary.image}
                            nama_makanan={culinary.culinary_name}
                            onClick={() => handleCulinaryClick(culinary)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    }

    return (
        <div className='culinary' id='culinary'>
            <div className="culinary-content">
                <div className="culinary-heading">
                    <h3>Kuliner di Indonesia</h3>
                </div>
                <div className="culinary-display">
                    <img src={selectedCulinary?.image || culinary1} alt="" />
                    <div className="culinary-display-text">
                        {selectedCulinary ? (
                            <>
                                <h4>{selectedCulinary.culinary_name}</h4>
                                <p>{selectedCulinary.description}</p>
                            </>
                        ) : (
                            <>
                                <h4>Rendang</h4>
                                <p>
                                    Rendang adalah salah satu hidangan khas Minangkabau yang telah dikenal secara internasional. Daging sapi yang dipotong kecil dimasak dalam campuran santan dan rempah-rempah yang meliputi serai, lengkuas, daun jeruk, cabai, dan bumbu lainnya. Proses memasaknya yang memakan waktu lama, kadang hingga berjam-jam, membuat dagingnya menjadi sangat empuk dan bumbu meresap secara menyeluruh. Rendang memiliki cita rasa yang kaya dengan kombinasi gurih, manis, pedas, dan rempah yang menggugah selera.
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <div className="culinary-carousel">
                    <CulinaryList />
                </div>
            </div>
        </div>
    )
}

export default Culinary
