import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../Firebaseinit";
import useProducts from "../Hooks/useProducts";

const PurchesModal = () => {
  const { productId } = useParams();
  const [product] = useProducts(productId);
  // const { name, price } = items
  const [user] = useAuthState(auth);
  const handelBooking = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-50 mx-auto">
      

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchesModal;
