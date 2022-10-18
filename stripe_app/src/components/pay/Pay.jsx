import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51LYmN6GRVcB5JNrq4XYU4MxSLNtxrXOt3xu79oUIyV71TMhbmIWYlzupWVfdbbUfi4WQ7hzrOppsU2G9L0qvtDI300EUCda3dR";

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  const makeRequest = async () => {
    try {
      const res = await fetch("http://localhost:9000/api/checkout/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tokenId: stripeToken.id,
          amount: 20000,
        }),
      });
      const payment = await res.json();
      console.log(payment);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Sensei E-commerce"
        image="/images/20210917160842_IMG_1346.jpg"
        billingAddress
        shippingAddress
        zipCode
        description="Your total is Ksh. 200"
        amount={20000}
        token={onToken}
        stripeKey={KEY}
        currency={"KES"}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};
