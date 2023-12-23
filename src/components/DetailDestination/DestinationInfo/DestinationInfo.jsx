import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './DestinationInfo.css'
import detaildesimg from '../../../assets/images/detail-destination/detail-destination-1.jpg'
import { getDestination } from '../../../api/api';

const DestinationInfo = () => {

    const { id } = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        getDestination().then((destinationData) => {
            const foundDestination = destinationData.find((item) => item.id === parseInt(id));
            setDestination(foundDestination);
        });
    }, [id]);

    console.log(destination)
    return (
        <div className="detail-destination" id='detail-destination'>
            {destination ? (
                <>
                    <div className="detail-destination-heading">
                        <img src={destination.banner} alt="" />
                        <h1>{destination.name}</h1>
                    </div>
                    <div className="detail-destination-content">
                        <div className="detail-desc">
                            <h2>Deskripsi</h2>
                            <p>
                                {destination.location}
                            </p>
                        </div>
                        <div className="detail-history">
                            <h2>Sejarah</h2>
                            <p>
                                {destination.history}
                            </p>
                        </div>
                        <div className="detail-interest">
                            <h2>Daya Tarik dari {destination.name}</h2>
                            <p>
                                {destination.interesting_point}
                            </p>
                        </div>
                        <div className="detail-attraction">
                            <h2>Wisata di sekitar {destination.name}</h2>
                            <p>
                                {destination.attraction}
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <p>tidak ditemukan</p>
            )}
        </div>
    )
}

export default DestinationInfo
