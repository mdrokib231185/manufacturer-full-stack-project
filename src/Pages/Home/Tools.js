import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

import ShowProducts from "./ShowProducts";

const Tools = ({ isLoading }) => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch(`https://secure-mesa-61567.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="grid justify-center mt-5">
        <h1 className="text-center">FEATURED</h1>
        <h1 className="text-5xl text-black-700">CATEGORIES</h1>
      </div>
      <div className="grid grid-cols-1 mt-5 mb-5 shadow-lg shadow-indigo-500/40 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.slice(0, 6).map((tool) => (
          <ShowProducts tool={tool} key={tool._id}></ShowProducts>
        ))}
      </div>
    </div>
  );
};

export default Tools;
