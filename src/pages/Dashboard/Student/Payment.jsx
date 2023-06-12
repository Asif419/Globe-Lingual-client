import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import Caption from "../../Shared/Caption";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {

  // const { classId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const classId = queryParams.get("classId");
  const userId = queryParams.get("userId");
  const selectedClassesId = queryParams.get("selectedClassesId");
  const string_price = queryParams.get("price");
  const float_price = parseFloat(string_price);
  const price = parseFloat(float_price.toFixed(2));
  // console.log(price);
  // const price = parseFloat(float_price.toFixed(2));



  return (
    <div>
      <Caption heading='Pay for your class'></Caption>
      <div className="flex items-center justify-center h-screen">
        <Elements stripe={stripePromise}>
          <CheckOutForm
            classId={classId}
            selectedClassId={selectedClassesId}
            price={price}
            userId={userId}
          >
          </CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;