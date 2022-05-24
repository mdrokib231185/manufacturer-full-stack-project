import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebaseinit";
import useProducts from "../Hooks/useProducts";
const BookingProducts = () => {
  const { productId } = useParams();
  const [user] = useAuthState(auth);
  const [product] = useProducts(productId);
  const [items, setItems] = useState([]);
  const { _id, img, name, price, description } = items;
  const [quantity, setQuantity] = useState(10);

  const handelDecrement = () => {
    if (quantity > 9) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handelIncrement = () => {
    if (quantity < product.quantity + 1) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };
  if (quantity == 9) {
    toast.error("Minimum added 10");
  }

  if (quantity == product.quantity + 1) {
    toast.error("No More Add ");
  }

  const handelBooking = (event) => {
    event.preventDefault();
    const booking = {
      productId: _id,
      product: name,
      price,
      order: quantity,
      customer: user.email,
      customerName: user.displayName,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
            toast("Order added");
            event.target.reset()
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div
      onSubmit={handelBooking}
      class=" d-flex card w-96 mx-auto bg-base-100 shadow-xl"
    >
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h1 className="text-2xl text-red-500">NAME: {name}</h1>
        <p className="text-primary">Description: {description}</p>
        <p className="text-secondary text-3xl">Available: {product.quantity}</p>
        <p className="text-secondary text-2xl">Mimum Order: 10</p>
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
      </div>
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
                  type="text"
                  name="address"
                  placeholder="address"
                  required
                  autoComplete="off"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="phone"
                  required
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <input
                disabled={quantity < 10 || quantity > product.quantity}
                type="submit"
                value="Submit"
                className="btn mt-5 btn-secondary input-bordered w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProducts;
