import React from 'react';
import shipping from '../../images/shipping1.png'
import partnership from '../../images/partnership1.png'
import discount from '../../images/discount sale.jpg'

const Business = () => {
      return (
        <div>
          <h1 className="text-5xl text-center text-primary font-bold">
            Business Summary
          </h1>
          <div className="grid grid-cols-3 gap-5  mt-5">
            <div className="flex bg-yellow-500">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={shipping} />
                </div>
              </div>
              <div className="mx-5 text-white">
                <h1 className="tex-3xl text-primary font-bold">
                  SHIPPING WORLDWIDE
                </h1>
                <p>
                  At vero eos accusam justo duo dolores rebum stet clita kasd
                  gubergren.
                </p>
              </div>
            </div>
            <div className="flex bg-indigo-500">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={partnership} />
                </div>
              </div>
              <div className="mx-5 text-white ">
                <h1 className="tex-3xl font-bold text-secondary">
                  PARTNERSHIP PROGRAM
                </h1>
                <p>
                  At vero eos accusam justo duo dolores rebum stet clita kasd
                  gubergren.
                </p>
              </div>
            </div>
            <div className="flex bg-green-500">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={discount} />
                </div>
              </div>
              <div className="mx-5 text-white ">
                <h1 className="tex-3xl text-red-600 font-bold">DISCOUNTS & SALE</h1>
                <p>
                  At vero eos accusam justo duo dolores rebum stet clita kasd
                  gubergren.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Business;