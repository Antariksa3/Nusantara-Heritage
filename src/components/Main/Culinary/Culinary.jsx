import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import './Culinary.css'
import 'swiper/css'
import 'swiper/swiper-bundle.css'

import CulinaryCard from './CulinaryCard/CulinaryCard'

import culinary1 from '../../../assets/images/culinary/culinary-1.jpg'

const Culinary = () => {
    return (
        <div className='culinary' id='culinary'>
            <div className="culinary-content">
                <div className="culinary-heading">
                    <h3>Kuliner di Indonesia</h3>
                </div>
                <div className="culinary-display">
                    <img src={culinary1} alt="" />
                    <div className="culinary-display-text">
                        <h4>Rendang Jawir</h4>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus corrupti distinctio odit similique? Corporis veritatis, modi voluptates cumque dolores numquam reprehenderit odio molestiae nisi aperiam consequatur dolorum saepe id.</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita. Et deserunt vitae eius quisquam qui ipsa ea eaque aspernatur.</p>
                    </div>
                </div>
                <div className="culinary-carousel">
                    {/* <CulinaryCard /> */}
                    <Swiper
                        grabCursor={true}
                        // centeredSlides={true}
                        loop={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            430: {
                                slidesPerView: 1.5,
                                // spaceBetween: 60,
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
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CulinaryCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Culinary
