import React from 'react';

import revinew from '../../images/annual revinew.jpg'
import coustomer from '../../images/pexels-photo-3184291.jpg'
import review from '../../images/reviews.png'
import tools from '../../images/DIY-Tools.jpg'
import shipping from '../../images/shipping1.png'
import dicount from '../../images/discount sale.jpg'

const Business = () => {
      return (
        <div>
          <h1 className="text-5xl text-center text-primary font-bold">
            Business Summary
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-5">
            <div className="flex bg-indigo-500">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={coustomer} />
                </div>
              </div>
              <div className="mx-5 text-white">
                <h1 className="tex-3xl text-primary font-bold">
                  SERVED 100+ COUSTOMERS,
                </h1>
                <p>
                  At vero eos accusam justo duo dolores rebum stet clita kasd
                  gubergren.
                </p>
              </div>
            </div>
            <div className="flex bg-blue-500">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={revinew} />
                </div>
              </div>
              <div className="mx-5 text-white ">
                <h1 className="tex-3xl font-bold text-secondary">
                  100M+ ANNUL REVINEW,
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
                  <img src={review} />
                </div>
              </div>
              <div className="mx-5 text-white ">
                <h1 className="tex-3xl text-red-600 font-bold">50K+ Reviews</h1>
                <p>
                  At vero eos accusam justo duo dolores rebum stet clita kasd
                  gubergren.
                </p>
              </div>
            </div>
            <div className="flex bg-green-500">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={shipping} />
                </div>
              </div>
              <div className="mx-5 text-white ">
                <h1 className="tex-3xl text-blue-600 font-bold">
                  50+ COUNTRY SHIPPING
                </h1>
                <p>
                  At vero eos accusam justo duo dolores rebum stet clita kasd
                  gubergren.
                </p>
              </div>
            </div>
            <div className="flex bg-teal-400">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={tools} />
                </div>
              </div>
              <div className="mx-5 text-white ">
                <h1 className="tex-3xl text-red-600 font-bold">100+ TOOLS</h1>
                <p>
                  At vero eos accusam justo duo dolores rebum stet clita kasd
                  gubergren.
                </p>
              </div>
            </div>
            <div className="flex bg-cyan-400">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={dicount} />
                </div>
              </div>
              <div className="mx-5 text-white ">
                <h1 className="tex-3xl text-red-600 font-bold">
                  DISCOUNT SHALE
                </h1>
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