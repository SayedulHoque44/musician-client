import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import useGetContext from "../../../Hooks/useGetContext";
import useGetEnroll from "../../../Hooks/useGetEnroll";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);

const Payment = () => {
  const { user } = useGetContext();
  const { id } = useParams();
  const [enrolledClasses, isLoading, refetch] = useGetEnroll(user?.email);
  const instantEnrollClass = enrolledClasses.find((item) => item._id === id);
  let ClassPrice = 0;
  if (instantEnrollClass) {
    const { price } = instantEnrollClass;
    ClassPrice = parseFloat(price.toFixed(2));
  }
  //   console.log(ClassPrice);

  return (
    <div>
      <h1 className="uppercase text-3xl text-center">Make Payment</h1>
      <div className="w-full px-3">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            ClassPrice={ClassPrice}
            instantEnrollClass={instantEnrollClass}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
