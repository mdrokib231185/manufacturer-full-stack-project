import React, {  useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";

import ShowProducts from "./ShowProducts";

const Tools = () => {
  // const [tools, setTools] = useState([]);
  const [ products, setProducts ] = useState(null);
  
const {
  data: tools,
  isLoading,
  refetch
  
} = useQuery("products", () =>
  fetch(`http://localhost:5000/products`).then((res) =>
    res.json()
  )
    );
  if(isLoading){
    return <Loading></Loading>
  }
console.log(tools);
  return (
    <div>
      <div className="grid justify-center mt-5">
        <h1 className="text-center">FEATURED</h1>
        <h1 className="text-5xl text-black-700">CATEGORIES</h1>
      </div>
      <div className="grid grid-cols-1 mt-5 mb-5 shadow-lg shadow-indigo-500/40 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tools.map((tool) => (
          <ShowProducts
            tool={tool}
            key={tool.id}
            setProducts={setProducts}
          ></ShowProducts>
        ))}
        {products &&  (
          <BookingModal
            setProducts={setProducts}
            products={products}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default Tools;
