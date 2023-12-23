import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Link as ScrollLink } from "react-scroll";

import './Discover.css'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import cloud1 from '../../../assets/images/discover/discover-cloud-1.png'
import cloud2 from '../../../assets/images/discover/discover-cloud-2.png'
import cloud3 from '../../../assets/images/discover/discover-cloud-3.png'
import slide1 from '../../../assets/images/discover/discover-slide-1.jpg'

const Discover = () => {
    return (
        <div className="discover" id="discover">
            <div className="discover-content">
                <div className="discover-heading">
                    <h2>Discover</h2>
                    <h1>Indonesia</h1>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quae impedit ullam esse dolor necessitatibus minima atque. Itaque, deleniti ducimus?</p> */}
                    <p>Indonesia, dengan lebih dari 17.000 pulau, adalah rumah bagi keanekaragaman alam yang luar biasa. Mulai dari hutan hujan tropis yang lebat hingga gunung berapi yang megah, serta terumbu karang yang memikat di bawah lautnya, negara ini menawarkan keindahan alam yang tak terlupakan.</p>
                    <ScrollLink to="explore" spy={true} smooth={true} offset={-40} duration={500}>Explore More</ScrollLink>
                </div>
                <div className="discover-carousel">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        // centeredSlides={true}
                        loop={true}
                        slidesPerView={5}
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
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            // 1024: {
                            //     slidesPerView: 4,
                            //     spaceBetween: 50,
                            // },
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="swiper_container"
                    >
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <img src={slide1} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="discover-clouds">
                <img src={cloud1} alt="awan1" />
                <img src={cloud2} alt="awan2" />
                <img src={cloud3} alt="awan3" />
            </div>
        </div>
    )
}

export default Discover
