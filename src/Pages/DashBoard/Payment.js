// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import React from "react";
// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import Loading from "../Shared/Loading";
// import CheckoutForm from "./CheckoutFrom";




// const stripePromise = loadStripe(
//   "pk_test_51L1TYgCR8RSAsaVLXfj3sTNqFNJ3g3R5ggWXg8puCSvpeBIcTUsp6GFQ3hZ5PVAWXdZe9BYxxCm0or99Tt6JCBhp00rQZ4ebws"
// );

// const Payment = () => {
//   const { id } = useParams();
//   const url = `http://localhost:5000/booking/${id}`;

//   const { data: orders, isLoading } = useQuery(["booking", id], () =>
//     fetch(url, {
//       method: "GET",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     }).then((res) => res.json())
//   );

//   if (isLoading) {
//     return <Loading></Loading>;
//   }

//   return (
//     <div>
//       <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
//         <div class="card-body">
//           <p className="text-success font-bold">Hello, {orders.customer}</p>
//           <h2 class="card-title">Please Pay for {orders.totalPrice}</h2>
//         </div>
//       </div>
//       <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
//         <div class="card-body">
//           <Elements stripe={stripePromise}>
//             <CheckoutForm orders={orders} />
//           </Elements>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
