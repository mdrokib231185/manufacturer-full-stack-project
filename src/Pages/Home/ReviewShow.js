import React from 'react';

const ReviewShow = ({ review }) => {
  console.log(review);
  const { name, comment } = review;
  console.log(name);
  return (
    <div className='grid gap-5'>
      <h1 className='text-3xl text-primary'>Customer Name:{name} </h1>
      <h1>Comment: {comment} </h1>
    </div>
  );
};

export default ReviewShow;