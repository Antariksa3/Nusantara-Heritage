import React, { useEffect, useState } from 'react'
import './Destination.css'
import DestinationCard from './DestinationCard/DestinationCard'
import { getDestination } from '../../../api/api'

const Destination = () => {
    const [destinations, setDestination] = useState([])

    useEffect(() => {
        getDestination().then((destination) => {
            // console.log(destination)
            setDestination(destination)
        })
    }, [])

    const DestinationList = () => {
        return destinations.map((destination, i) => (
            <DestinationCard
                key={i}
                name={destination.name}
                image={destination.image}
            />
        ))
    }
    return (
        <div className="destination" id='destination'>
            <div className="destination-content">
                <div className="destination-heading">
                    <h3>Destinasi Wisata</h3>
                </div>
                <div className="destination-cards">
                    <DestinationList />
                </div>
            </div>
        </div>
    )
}

export default Destination
