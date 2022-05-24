import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../Firebaseinit";
import useProducts from "../Hooks/useProducts";

const PurchesModal = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  const { productId } = useParams();
  const [product] = useProducts(productId);
  // const { name, price } = items
  const [user] = useAuthState(auth);
  const handelBooking = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">PURCHES CONFIRM</h2>
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

            <input
              className="btn w-full btn-primary text-white"
              type="submit"
              value="Purches Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchesModal;
