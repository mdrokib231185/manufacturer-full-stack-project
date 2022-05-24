import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebaseinit";
import useProducts from "../Hooks/useProducts";

const ProductsDetails = () => {
   const {
     register,
     formState: { errors },
     handleSubmit,
  } = useForm();
  const { productId } = useParams();
   const [user] = useAuthState(auth);
  const [product] = useProducts(productId);
  const [items, setItems] = useState({});
  const { img,  name, price, description } = items;
  const [quantity, setQuantity] = useState(10)
  const handelDecrement = () => {
    if (quantity > 9) {
      setQuantity((prevCount) => prevCount - 1 );
      
    }
  }
  const handelIncrement = () => {
    if (quantity < 21) {
      setQuantity((prevCount) => prevCount + 1);
      
      
    }
  }
  if (quantity == 9) {
    toast.error('Minimum added 10')
  }
  
  if ( quantity ==21) {
  toast.error("Maximum added ");
}
  

  const handelSubmit = (event) => {
    event.preventDefault()
    
}


  
  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
const navigate = useNavigate()


  const navigateToProductsDetails = () => {
    navigate(`/checkout/${productId}`);
  };
  return (
    <div class="card w-96 mx-auto bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h1 className="text-2xl text-red-500">NAME: {name}</h1>
        <p className="text-primary">Description: {description}</p>
        <h1 className="text-xl">Price: ${price}</h1>

        <div className="input-group justify-center">
          <button
            type="button"
            onClick={handelDecrement}
            className="input-group-text"
          >
            <span className="text-2xl">-</span>
          </button>

          <div className="from-control text-center">{quantity}</div>
          <button
            type="button"
            onClick={handelIncrement}
            className="input-group-text"
          >
            <span className="text-2xl">+</span>
          </button>
        </div>

        <div class="card-actions">
          {/* {
            <button
              disabled={quantity < 10 || quantity > 20}
              onClick={() => navigateToProductsDetails(productId)}
              className="btn btn-primary mt-5"
            >
              PURCHES
            </button>
          } */}
        </div>
        <div className="flex h-screen justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">
                PURCHES CONFIRM
              </h2>
              <form>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={user?.displayName}
                    className="input input-bordered w-full max-w-xs"
                    disabled
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={user?.email}
                    className="input input-bordered w-full max-w-xs"
                    readOnly
                    disabled
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Product</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    value={product.name}
                    className="input input-bordered w-full max-w-xs"
                    readOnly
                    disabled
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Address"
                    // value={product.name}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="number"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                {
            <button
              disabled={quantity < 10 || quantity > 20}
              onClick={() => navigateToProductsDetails(productId)}
              className="btn btn-primary mt-5"
            >
              PURCHES
            </button>
          }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
