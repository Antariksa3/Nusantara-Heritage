import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import ScrollUp from '../components/ScrollUp/ScrollUp'

const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            <ScrollUp to='discover' />
        </div>
    )
}

export default Home
