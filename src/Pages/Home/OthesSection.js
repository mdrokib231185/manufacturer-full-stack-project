import React from "react";
import images from '../../images/rokib.jpg'

const OthesSection = () => {
  return (
    <div>
      <h1 className="text-5xl text-primary text-center mt-5">Our Dealer</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <h1 className="text-3xl text-orange-500">Happy Deals</h1>

          <p className="text-3xl grid items-center  text-success">
            Helping You to Connect to Right Tools
            <span className="dealers"> Dealers </span> 
          </p>
        </div>
        <div>
          <img className="test-img" src={images} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OthesSection;
