import React from 'react';
import Earth from '../Globe/Globe';
import Header from '../Header/Header';
import Searchbar from '../Search/Search';
import "../landingPage/landing.css";
import Features from '../features/Features';
import Footer from '../footer/Footer';
import Working from '../working/Working';
import Contact from '../contact/Contact'

import 'animate.css'


const Landing = () => {
    return (
        <div>
        <Header />
        <div className='search-main'>
        <h2 className='headText animate__animated animate__slideInDown'>Begin your journey with a first search</h2>
        <div className='search-input'>
        <Searchbar />
        <div className='animate__animated animate__slideInUp chiplet-main'>
            <p className='ptxt'>Suggested for you</p>
            <div className='chips'>
            <div>Bangalore</div>
            <div>Ramnagara</div>
            <div>Mumbai</div>
            <div>Chennai</div>
            </div>
        </div>
        </div>
        </div>
        <Earth />
        <Features />
        <Working />
        <Contact />
        <Footer />
        </div>
    );
}

export default Landing;
