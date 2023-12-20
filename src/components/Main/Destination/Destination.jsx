import React from 'react'
import './Destination.css'
import DestinationCard from './DestinationCard/DestinationCard'

const Destination = () => {
    return (
        <div className="destination" id='destination'>
            <div className="destination-content">
                <div className="destination-heading">
                    <h3>Destinasi Wisata</h3>
                </div>
                <div className="destination-cards">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
            </div>
        </div>
    )
}

export default Destination
