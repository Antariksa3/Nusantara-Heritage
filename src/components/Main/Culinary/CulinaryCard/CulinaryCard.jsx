import React from 'react'
import './CulinaryCard.css'

import culinary1 from '../../../../assets/images/culinary/culinary-1.jpg'


const CulinaryCard = () => {
    return (
        <div className='culinary-card'>
            <img src={culinary1} alt="" />
            <div className="culinary-name">
                <h4>Rendang Jawir</h4>
            </div>
        </div>
    )
}

export default CulinaryCard
