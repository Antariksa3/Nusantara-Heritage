import React from 'react'
import Discover from './Discover/Discover';
import Explore from './Explore/Explore';
import Destination from './Destination/Destination';
import FunFact from '../FunFact/FunFact';

const Main = () => {
    return (
        <main>
            <Discover />
            <Explore />
            <Destination />
            <FunFact />
        </main>
    )
}

export default Main
