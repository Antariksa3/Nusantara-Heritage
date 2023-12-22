import React from 'react'
import Discover from './Discover/Discover';
import Explore from './Explore/Explore';
import Destination from './Destination/Destination';
import FunFact from './FunFact/FunFact';
import CultureHeritage from './CultureHeritage/CultureHeritage';
import Culinary from './Culinary/Culinary';

const Main = () => {
    return (
        <main>
            <Discover />
            <Explore />
            <Destination />
            <FunFact />
            <Culinary />
            <CultureHeritage />
        </main>
    )
}

export default Main
