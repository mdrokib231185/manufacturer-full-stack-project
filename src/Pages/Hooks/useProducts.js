import React, { useEffect, useState } from "react";

const useProducts = (productsId) => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    const url = `https://secure-mesa-61567.herokuapp.com/products/${productsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [productsId]);
  return [products];
};

export default useProducts;
