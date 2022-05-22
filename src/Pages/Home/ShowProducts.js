import React from 'react';

const ShowProducts = ({ tool }) => {
      const {name, img, description, price, quantity} = tool
      return (
        <div className="shadow-lg shadow-indigo-500/40 mx-3">
          <div className='mx-5'>
            <img src={img} alt="" />
            <h1 className="text-2xl text-red-500">NAME: {name}</h1>
            <p className="text-primary">Description: {description}</p>
            <h1 className='text-xl'>Price: ${price}</h1>
            <h1 className='text-xl'>Available: {quantity}</h1>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      );
};

export default ShowProducts;