import React from 'react'
import DestinationPlace from '../components/DetailDestination/DestinationPlace'
import HeaderDetail from '../components/Header/HeaderDetail'
import FooterDetail from '../components/Footer/FooterDetail'
import ScrollUp from '../components/ScrollUp/ScrollUp'

const DetailDestination = () => {
    return (
        <div>
            <HeaderDetail />
            <DestinationPlace />
            <FooterDetail />
            <ScrollUp to='detail-destination' />
        </div>
    )
}

export default DetailDestination
