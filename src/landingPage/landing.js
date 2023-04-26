import React from 'react';
import Earth from '../Globe/Globe';
import Header from '../Header/Header';
import Searchbar from '../Search/Search';
import "../landingPage/landing.css";


const Landing = () => {
    return (
        <div>
        <Header />
        <div className='search-main'>
        <Searchbar />
        <div className='chiplet-main'>
            <p>Suggested for you</p>
            <div className='chips'>
            <div>Banglore</div>
            <div>Ramnagara</div>
            <div>Mumbai</div>
            <div>Chennai</div>
            </div>
        </div>
        </div>
        <Earth />
        </div>
    );
}

export default Landing;
