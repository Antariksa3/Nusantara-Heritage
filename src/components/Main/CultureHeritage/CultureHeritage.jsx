import React from "react";

import './CultureHeritage.css';

import HeaderImage from '../../../assets/images/culture/heading-bg.svg';
import GridLeft from './LeftContent/LeftContent'
import GridRight from './RightContent/RightContent'
import ProvinceList from "./ProvinceList/ProvinceList";

const CultureHeritage = () => {
    return (
        <div className="culture" id="culture">
            <div className="heading">
                <img src={HeaderImage}></img>
                <h3>Kebudayaan di Indonesia</h3>
            </div>
            <div className="grid">
                <GridLeft />
                <GridRight />
                <GridLeft />
                <GridRight />
                <GridLeft />
            </div>
            <ProvinceList />
        </div>
    )
}

export default CultureHeritage