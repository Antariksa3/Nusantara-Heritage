import React from 'react'
import Discover from './Discover/Discover';
import Explore from './Explore/Explore';
import Destination from './Destination/Destination';
import FunFact from './FunFact/FunFact';
import CultureHeritage from './CultureHeritage/CultureHeritage';

const Main = () => {
    return (
        <main>
            <Discover />
            <Explore />
            <Destination />
            <FunFact />
            <CultureHeritage />
        </main>
    )
}

export default Main
