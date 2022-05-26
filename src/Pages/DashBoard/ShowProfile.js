import React from 'react';

const ShowProfile = ({ profile }) => {
      const {name, Works, qualification, address, linkden ,img} = profile
      return (
        <div className='bg-gray-300'>
          <h1 className='text-2xl text-blue-700'>Name: {name}</h1>
          <h1>Works: {Works}</h1>
          <h1>qualification: {qualification}</h1>
          <h1>address: {address}</h1>
          <h1>linkden: {linkden}</h1>
                  <div>
                      <img src={img} alt="" />  
          </div>
        </div>
      );
};

export default ShowProfile;