import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import './FunFactCard.css'

import funfactbunga from '../../../../assets/images/funfact/funfact-bunga.png'
import funfactwayang from '../../../../assets/images/funfact/funfact-wayang.png'

const FunFactCard = (props) => {
    return (
        <div className="funfact-card">
            <div className="funfact-quote">
                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "#f0df99", }} />
            </div>
            <h5>{props.fact}</h5>
            <div className="funfact-image">
                <img src={funfactbunga} alt="" className='funfact-bunga' />
                <img src={funfactwayang} alt="" className='funfact-wayang' />
            </div>
        </div>
    )
}

export default FunFactCard
