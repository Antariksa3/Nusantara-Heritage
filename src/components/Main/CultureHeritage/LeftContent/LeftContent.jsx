import React from "react";

import './LeftContent.css';

function LeftContent(props) {
    return (
        <div className="content">
            <div className="circle" />
            <div className="top-info">
                <img className="image" src={props.image}></img>
                <div className="title">
                    <h4 className="year">{props.category}</h4>
                    <h3 className="cult-name">{props.name}</h3>
                </div>
            </div>
            <p className="main-info">
                {props.text}
            </p>
        </div>
    )
}

export default LeftContent