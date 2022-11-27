import React from 'react';
import AdvertiseItems from './AdvertiseItems/AdvertiseItems';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Success from './Success/Success';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <Categories></Categories>
            <Success></Success>
        </div>
    );
};

export default Home;