import React from 'react'
import './DestinationCard.css'
import destinationImage from '../../../../assets/images/destination/destination-image-1.png'

const DestinationCard = (props) => {
    return (
        <div className="destination-card">
            <img src={props.image} alt="Destination" />
            <div className="destination-text">
                <p>
                    {props.name}
                </p>
            </div>
        </div>
    );
}

export default DestinationCard;
