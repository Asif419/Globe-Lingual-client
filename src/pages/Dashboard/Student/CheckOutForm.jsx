import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import './CheckoutForm.css';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = ({ classId, selectedClassId, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setCardError(error.message);
    }
    else {
      setCardError('');
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }
    console.log('intent', paymentIntent);
    setProcessing(true);
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      // save payment info
      const payment = {
        classId,
        selectedClassId,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          if (res.data.result.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Payment Successful',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    //TODO: after successful payment send to payment history
  }

  return (
    <>
      <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
        {
          cardError &&
          <p className="text-red-600 ml-8">
            {cardError}
          </p>
        }
        {transactionId && <p className="text-green-500">Transection complete with transactionId: {transactionId}</p>}
      </form>
    </>
  );
};

export default CheckOutForm;