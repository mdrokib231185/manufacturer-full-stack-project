import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import ShowProfile from './ShowProfile';

const MyProfile = ({isLoading}) => {
    const [profiles, setProfiles] = useState([]);
    // console.log(reviews);

    useEffect(() => {
      fetch(`http://localhost:5000/profile`)
        .then((res) => res.json())
        .then((data) => setProfiles(data));
    }, []);

    if (isLoading) {
      return <Loading></Loading>;
    }

      return (
        <div>
                  {
                        profiles.map(profile => (<ShowProfile
                              key={profile._id}
                              profile={profile}
                        ></ShowProfile>))
          }
        </div>
      );
};

export default MyProfile;