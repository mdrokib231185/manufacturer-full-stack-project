import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
       const { productId } = useParams();
      const [item, setItem] = useState({});
      useEffect(() => {
            fetch(`http://localhost:5000/products/${productId}`);
      },[])
      return (
            <div>
                  <h1>This is product details page</h1>
            </div>
      );
};

export default ProductsDetails;