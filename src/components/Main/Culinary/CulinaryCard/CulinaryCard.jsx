import React from 'react'
import './CulinaryCard.css'

import culinary1 from '../../../../assets/images/culinary/culinary-1.jpg'


const CulinaryCard = (props) => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };
    return (
        <div className='culinary-card' onClick={handleClick}>
            <img src={props.image} alt="" />
            <div className="culinary-name">
                <h4>{props.nama_makanan}</h4>
            </div>
        </div>
    )
}

export default CulinaryCard
