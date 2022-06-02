// import React, { useEffect, useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const CheckoutForm = ({ orders }) => {
//       // console.log(orders);
//   const stripe = useStripe();
//   const elements = useElements();
//   const [cardError, setCardError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [processing, setProcessing] = useState(false);
//   const [transactionId, setTransactionId] = useState("");
//   const [clientSecret, setClientSecret] = useState("");

//   const { _id, totalPrice, customer, customerName } = orders;

//   useEffect(() => {
//     fetch("https://secure-mesa-61567.herokuapp.com/create-payment-intent", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//       body: JSON.stringify({ totalPrice }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//             if (data?.clientSecret) {
//               console.log(data);
//           setClientSecret(data.clientSecret);
//         }
//       });
//   }, [totalPrice]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);

//     if (card === null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     setCardError(error?.message || "");
//     setSuccess("");
//     setProcessing(true);
//     // confirm card payment
//     const { paymentIntent, error: intentError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name: customerName,
//             email: customer,
//           },
//         },
//       });

//     if (intentError) {
//       setCardError(intentError?.message);
//       setProcessing(false);
//     } else {
//       setCardError("");
//       setTransactionId(paymentIntent.id);
//       console.log(paymentIntent);
//       setSuccess("Congrats! Your payment is completed.");

//       const payment = {
//         orders: _id,
//         transactionId: paymentIntent.id,
//       };
//       fetch(`https://secure-mesa-61567.herokuapp.com/booking/${_id}`, {
//         method: "PATCH",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//         body: JSON.stringify(payment),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setProcessing(false);
//           console.log(data);
//         });
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="btn btn-success btn-sm mt-5"
//           type="submit"
//           disabled={!stripe || !clientSecret}
//         >
//           Pay
//         </button>
//       </form>
//       {cardError && <p className="text-red-500"> {cardError}</p>}
//     </>
//   );
// };

// export default CheckoutForm;
