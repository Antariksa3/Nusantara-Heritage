import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import './FunFact.css';
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import FunFactCard from "./FunFactCard/FunFactCard";

const FunFact = () => {
    return (
        <div className="funfact">
            <div className="funfact-content">
                <div className="funfact-heading">
                    <h3>Fakta tentang Indonesia</h3>
                </div>
                <div className="funfact-carousel">
                    {/* <FunFactCard fact="Negara pulau terbesar di dunia, lebih dari 17.000 pulau." /> */}
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={3.5}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        // breakpoints={{
                        //     640: {
                        //         slidesPerView: 2,
                        //         spaceBetween: 20,
                        //     },
                        //     768: {
                        //         slidesPerView: 4,
                        //         spaceBetween: 40,
                        //     },
                        //     1024: {
                        //         slidesPerView: 10,
                        //         spaceBetween: 50,
                        //     },
                        // }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="swiper_container"
                    >
                        <SwiperSlide>
                            <FunFactCard fact="Negara pulau terbesar di dunia, lebih dari 17.000 pulau." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Keanekaragaman budaya: 300 etnis, 700 bahasa dan dialek." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Lebih dari 130 gunung berapi aktif." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Hutan hujan tropis dengan keanekaragaman hayati tinggi." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Raja Ampat: destinasi penyelaman terbaik di dunia." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Candi Borobudur, terbesar di dunia, abad ke-9." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Kopi Luwak: kopi termahal, diproses melalui musang luwak." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Jakarta, ibu kota dan kota terpadat di Indonesia." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Orangutan hanya ditemukan di Sumatera dan Kalimantan." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FunFactCard fact="Tradisi unik: upacara, tarian, dan festival budaya." />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div >
    );
}

export default FunFact