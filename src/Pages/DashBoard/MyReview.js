import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyReview = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "https://secure-mesa-61567.herokuapp.com/review";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Review Add Successfuly");
          reset();
        }
        console.log(result);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="Enter You name"
          required
          {...register("name", { required: true, maxLength: 20 })}
        />{" "}
        <br />
        <textarea
          className="mb-3 bg-gray-300"
          placeholder="comment"
          required
          {...register("comment")}
          rows={6}
        />{" "}
        <br />
        <input className="btn btn-primary" type="submit" value="Add Review" />
      </form>
    </div>
  );
};

export default MyReview;
