import React from 'react'
import './DestinationCard.css'
import destinationImage from '../../../../assets/images/destination/destination-image-1.png'

const DestinationCard = () => {
    return (
        <div className="destination-card">
            <img src={destinationImage} alt="Destination" />
            <div className="destination-text">
                <p>
                    Candi Borobudur
                </p>
            </div>
        </div>
    );
}

export default DestinationCard;
