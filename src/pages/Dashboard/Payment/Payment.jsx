import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <SectionTitle heading="Make Payment" subHeading="Process to Make Payment "></SectionTitle>
            <h2>Payment</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;