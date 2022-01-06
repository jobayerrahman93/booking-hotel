import React from 'react';
import BannerSection from '../Banner/BannerSection';
import HappyTravel from '../HappyTravel/HappyTravel';
import NotificationSection from '../NotificationSection/NotificationSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import ToursSection from '../ToursSection/ToursSection';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <ToursSection></ToursSection>
            <ServicesSection></ServicesSection>
            <HappyTravel></HappyTravel>
            <NotificationSection></NotificationSection>
            
        </div>
    );
};

export default Home;