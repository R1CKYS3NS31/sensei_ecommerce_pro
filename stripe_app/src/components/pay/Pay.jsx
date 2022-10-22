import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const KEY =process.env.REACT_APP_STRIPE

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

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
      navigate("/success", { replace: true }); // ricky has bugs
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
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
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
      )}
    </div>
  );
};
