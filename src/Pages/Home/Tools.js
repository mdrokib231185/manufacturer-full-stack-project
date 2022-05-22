import React, { useEffect, useState } from "react";
import ShowProducts from "./ShowProducts";

const Tools = () => {
      const [tools, setTools] = useState([]);
      console.log(tools);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <div className="grid justify-center mt-5">
        <h1 className="text-center">FEATURED</h1>
        <h1 className="text-5xl text-black-700">CATEGORIES</h1>
      </div>
      <div className="grid grid-cols-1 mt-5 mb-5 shadow-lg shadow-indigo-500/40 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tools.map((tool) => (
          <ShowProducts tool={tool} key={tool.id}></ShowProducts>
        ))}
      </div>
    </div>
  );
};

export default Tools;
