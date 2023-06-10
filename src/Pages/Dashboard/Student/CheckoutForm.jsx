import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { myAxios } from "../../../Hooks/useAxiosSecure";
import useGetContext from "../../../Hooks/useGetContext";

const CheckoutForm = ({ ClassPrice, instantEnrollClass }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  // const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState();
  const { user } = useGetContext();

  //
  useEffect(() => {
    if (ClassPrice > 0) {
      myAxios.post(`/create-payment-intent`, { ClassPrice }).then((res) => {
        // console.log(res.data);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [ClassPrice]);

  //

  const handleSubmit = async (event) => {
    event.preventDefault();
    //
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // console.log("card: ", card);
    //
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
      return;
    } else {
      console.log("paymentMethod", paymentMethod);
      setCardError("");
    }

    setProcessing(true);
    // confirmCardPayment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "userEmail",
            name: user?.displayName || "userName",
          },
        },
      });
    //
    if (confirmError) {
      console.log(confirmError);
      setProcessing(false);
    } else {
      setProcessing(false);
      //   console.log(paymentIntent);
    }
    //
    if (paymentIntent.status === "succeeded") {
      //   console.log("i passed");
      setTransactionId(paymentIntent.id);
      //Save payment information to the server
      const payment = {
        classId: instantEnrollClass.classId,
        imageUrl: instantEnrollClass.imageUrl,
        instructorName: instantEnrollClass.instructorName,
        name: instantEnrollClass.name,
        price: instantEnrollClass.price,
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date().toLocaleString(),
        status: "paid",
      };

      // payments collection
      myAxios.post(`/payments`, payment).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire(`Payment Success! ID : ${paymentIntent.id}`);
          navigate("/dashboard/enrolledClass");
          // remove from selected
          myAxios
            .delete(`/enroll/${instantEnrollClass._id}`)
            .then()
            .catch((err) => toast.error("Somting Wrong"));

          // update sets
          myAxios
            .patch(`/classSets/${instantEnrollClass.classId}`)
            .then()
            .catch((err) => toast.error(err.message));
        }
      });
      //
    }
  };
  return (
    <>
      <form className="w-2/3 mx-auto mt-4" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-primary my-4 mx-auto block"
          type="submit"
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-error">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
