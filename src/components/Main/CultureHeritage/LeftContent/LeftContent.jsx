import React from "react";

import './LeftContent.css';

import Wayang from '../../../../assets/images/culture/wayang.svg';

const LeftContent = () => {
    return (
        <div className="content">
            <div className="circle" />
            <div className="top-info">
                <img className="wayang" src={Wayang}></img>
                <div className="title">
                    <h4 className="year">2003</h4>
                    <h3 className="cult-name">Wayang</h3>
                </div>
            </div>
            <p className="main-info">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.
            </p>
        </div>
    )
}

export default LeftContent