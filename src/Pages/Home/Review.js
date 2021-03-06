import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import ReviewShow from "./ReviewShow";

const Review = ({ isLoading }) => {
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);

  useEffect(() => {
    fetch(`https://secure-mesa-61567.herokuapp.com/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-5xl text-secondary text-center">Our Review</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        {reviews.slice(0, 3).map((review) => (
          <ReviewShow key={review._id} review={review}></ReviewShow>
        ))}
      </div>
    </div>
  );
};

export default Review;
