import React from "react";
import './Discover.css'

import cloud1 from '../../../assets/images/discover/discover-cloud-1.png'
import cloud2 from '../../../assets/images/discover/discover-cloud-2.png'
import cloud3 from '../../../assets/images/discover/discover-cloud-3.png'

const Discover = () => {
    return (
        <div className="discover">
            <div className="discover-content">
                <div className="discover-heading">
                    <h2>Discover</h2>
                    <h1>Indonesia</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quae impedit ullam esse dolor necessitatibus minima atque. Itaque, deleniti ducimus?</p>
                    <button>Explore More</button>
                </div>
                <div className="discover-carousel"></div>
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
