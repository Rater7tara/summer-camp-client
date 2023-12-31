import { CardElement, CartElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import './CheckoutForm.css'


const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const {user} = useAuth();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');


  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret);
        })
    }
  }, [price, axiosSecure])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }
    console.log('card', card)

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message);
    }
    else {
      setCardError('')
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown',
          },
        },
      },
    );

    if(confirmError){
      console.log(confirmError);
    }

    console.log('payment intent', paymentIntent);
    setProcessing(false)
    if(paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id)
      // const transactionId = paymentIntent.id;
      const payment = {
        email: user?.email, 
        transactionId: paymentIntent.id, 
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map(item => item._id),
        status: 'pending',
        classId: cart.map(item => item._classId),
        classesNames: cart.map(item => item.name)
      }
      axiosSecure.post('/payments', payment)
      .then(res =>{
        console.log(res.data)
        if(res.data.insertedId){

        }
      })
    }

  }


  return (
    <>
      <form className='w-2/3 m-8' onSubmit={handleSubmit}>
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
        <button className='btn  btn-warning mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600 ms-8'>{cardError}</p>}
      {transactionId && <p className='text-green-500'>Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;