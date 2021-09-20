import React from 'react';
import AllEvent from '../AllEvent/AllEvent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TobBar from '../TopBar/TobBar';
import './Home.css';

const Home = () => {
    return (
        <div>
            
            <TobBar/>
            <Header/>
            <AllEvent/>
            <Footer />

        </div>
    );
};

export default Home;