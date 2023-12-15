import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
            <Main />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
