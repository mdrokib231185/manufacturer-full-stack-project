import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowProducts = ({ tool }) => {
      const {_id ,name, img, description, price, quantity } = tool
      const navigate = useNavigate()

      const navigateToProductsDetails = (id) => {
        navigate(`/product/${id}`);
      };
      return (
        <div className="shadow-lg shadow-indigo-500/40 mx-2">
          <div className="mx-2">
            <img src={img} alt="" />
            <h1 className="text-2xl text-red-500">NAME: {name}</h1>
            <p className="text-primary">Description: {description}</p>
            <h1 className="text-xl">Price: ${price}</h1>
            <h1 className="text-xl">Available: {quantity}</h1>
            <button
              onClick={() => navigateToProductsDetails(_id)}
              className="btn btn-primary w-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      );
};

export default ShowProducts;