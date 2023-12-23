import React from "react";

import './RightContent.css';
import RumahGadang from '../../../../assets/images/culture/rumah-gadang.svg'

function RightContent(props) {
    return (
        <div className="container">
            <div className="top-info">
                <img className="image" src={props.image}></img>
                <div className="title">
                    <h4 className="year">{props.category}</h4>
                    <h3 className="cult-name">{props.name}</h3>
                </div>
            </div>
            <div className="circle" />
            <p className="main-info">
                {props.text}
            </p>
        </div>
    )
}

export default RightContent