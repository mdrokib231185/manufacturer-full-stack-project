import React from 'react';
import Seller from '../Seller';
import Banner from './Banner';
import Business from './Business';
import Tools from './Tools';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Tools></Tools>
                  <Business></Business>
                  <Seller></Seller>
            </div>
      );
};

export default Home;