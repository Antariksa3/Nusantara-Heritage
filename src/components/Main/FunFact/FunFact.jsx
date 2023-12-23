import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import './FunFact.css';
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import FunFactCard from "./FunFactCard/FunFactCard";
import { getFunfact } from "../../../api/api";

const FunFact = () => {
    const [funfacts, setFunfact] = useState([])

    useEffect(() => {
        getFunfact().then((funfact) => {
            // console.log(funfact)
            setFunfact(funfact)
        })
    }, [])

    const FunFactList = () => {
        return (
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
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="swiper_container"
            >
                {funfacts.map((funfact, i) => (
                    <SwiperSlide key={i}>
                        <FunFactCard
                            fact={funfact.quote}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    }

    return (
        <div className="funfact">
            <div className="funfact-content">
                <div className="funfact-heading">
                    <h3>Fakta tentang Indonesia</h3>
                </div>
                <div className="funfact-carousel">
                    <FunFactList />
                </div>
            </div>
        </div >
    );
}

export default FunFact