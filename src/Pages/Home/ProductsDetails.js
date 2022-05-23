import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { productId } = useParams();
  const [items, setItems] = useState({});
  const { img, name, price, description, quantity } = items;
  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div class="card w-96 mx-auto bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h1 className="text-2xl text-red-500">NAME: {name}</h1>
        <p className="text-primary">Description: {description}</p>
        <h1 className="text-xl">Price: ${price}</h1>
        <h1 className="text-xl">Quantity: {quantity}</h1>
        <div className="flex mt-5 mb-5 ">
          <p className="mt-3 text-2xl"> Quantity:</p>
          <button className="text-5xl btn btn-squire btn-secondary">-</button>
          <input
            className=" bg-gray-300  shadow-xl"
            type="number"
            name="phone"
            placeholder="Quantity"
            required
          />{" "}
          <button className="text-4xl btn btn-squire btn-secondary">+</button>
        </div>

        <div class="card-actions">
          <Link to={`/checkout/${productId}`}>
            <button className="btn btn-primary">Procced Checout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
