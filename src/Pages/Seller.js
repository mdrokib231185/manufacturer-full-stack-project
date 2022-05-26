import React from "react";
import './Seller.css'
import img1 from '../images/02 (1).jpg'
import img2 from '../images/03 (1).jpg'

const Seller = () => {
  return (
    <div className=" m-5">
      <div className="text-center">
        <p className="client">Client</p>
        <h1 className="h1-tag">
          Our Happy <span className="seller">SELLERS</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-5" id="box-shadow">
        <div className="mx-5">
          <p>
            Biker’s Warehouse is one of Johannesburg’s top bike and accessory
            brand suppliers. Our brands are carefully selected to offer the
            widest product range to cater for the needs of any road, dual-sport
            or off-road enthusiast. Added to our emphasis on rigorous parts
            support,
          </p>
          <div className="d-flex">
            <div>
              <img style={{ width: 80, height: 80 }} src={img1} alt="" />
            </div>
            <div className="mx-3">
              <h5>Ceo</h5>
              <h3>Rokib Hasan</h3>
            </div>
          </div>
        </div>
        <div className="mx-5 ">
          <p>
            our service department is fully equipped to ensure that all
            servicing, repair and modification requirements are taken care of
            quickly and professionally. Biker’s Warehouse is proud dealers for
            Honda motorcycles, Husqvarna motorcycles and Suzuki Motorcycles. We
            also offer various quality imported motorcycles
          </p>
          <div className="d-flex">
            <div>
              <img style={{ width: 80, height: 80 }} src={img2} alt="" />
            </div>
            <div className="mx-3">
              <h5>Manager</h5>
              <h3>Roshid khan</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
