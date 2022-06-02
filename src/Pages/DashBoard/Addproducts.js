import { async } from "@firebase/util";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Addproducts = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "https://secure-mesa-61567.herokuapp.com/products";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Product added successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Product name"
            className="input input-bordered w-full max-w-xs"
            required
            {...register("name", {
              required: {
                value: true,
                message: "name is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
            required
            {...register("Description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            required
            className="input input-bordered w-full max-w-xs"
            {...register("Price", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Quantity"
            className="input input-bordered w-full max-w-xs"
            required
            {...register("Quantity", {
              required: {
                value: true,
                message: "Quantity is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url"
            className="input input-bordered w-full max-w-xs"
            {...register("Image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
        </div>

        <input
          className="btn w-96 btn-primary text-white"
          type="submit"
          value="ADDED PRODUCT"
        />
      </form>
    </div>
  );
};

export default Addproducts;
