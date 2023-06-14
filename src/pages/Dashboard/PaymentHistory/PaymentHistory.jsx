import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';


const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const [paymentHistory, setPaymentHistory] = useState([]);
    const {user} = useAuth();
  
    useEffect(() => {
      // Fetch payment history based on user's email
      axiosSecure.get('/payments', {
        params: {
          email: user?.email // Use the user's email from your authentication context
        }
      })
        .then(res => {
          setPaymentHistory(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [axiosSecure, user]);
  
    return (
        <>
        <Helmet>
                <title>DancingDream | History</title>
            </Helmet>
        <SectionTitle heading="Payment History" subHeading="All "></SectionTitle>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Email</th>
              <th>Transaction ID</th>
              <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {paymentHistory.map((payment, index) => (
              <tr className="hover" key={payment._Id}>
                 <th>{index + 1}</th>
                <td>{payment.date}</td>
                <td>{payment.email}</td>
                <td>{payment.transactionId}</td>
                <td>${payment.price}</td>
                
              </tr>
            ))}
    </tbody>
  </table>
</div>
      </>
    );
  };
  
  export default PaymentHistory;
  