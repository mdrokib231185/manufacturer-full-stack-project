import React from 'react';
import Seller from '../Seller';
import Banner from './Banner';
import Business from './Business';
import OthesSection from './OthesSection';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Tools></Tools>
                  <Business></Business>
                  <Seller></Seller>
                  <Review></Review>
                  <OthesSection></OthesSection>
            </div>
      );
};

export default Home;