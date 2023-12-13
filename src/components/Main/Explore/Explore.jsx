import React from "react";
import './Explore.css'

import map from '../../../assets/images/explore/explore-map.svg'
import ExploreInfo from "./ExploreInfo/ExploreInfo";

const Explore = () => {
    return (
        <div className="explore">
            <div className="explore-content">
                <div className="explore-heading">
                    <h3>Eksplorasi 38 Provinsi di Nusantara</h3>
                </div>
                <div className="explore-map">
                    <div className="explore-map-frame">
                        <img src={map} alt="" className="indonesian-map" />
                        <ExploreInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
