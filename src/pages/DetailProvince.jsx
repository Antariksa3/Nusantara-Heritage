import React from 'react'
import Header from '../components/Header/Header'
import DetailExplore from '../components/DetailExplore/DetailExplore'
import Footer from '../components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

const DetailProvince = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
            <DetailExplore />
            <Footer />
        </div>
    )
}

export default DetailProvince   
