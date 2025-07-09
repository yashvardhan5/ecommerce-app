import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;




  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(backendUrl + '/api/subscribe', { email });

      if (res.status === 201) {
        toast.success('Thank you for subscribing! You will receive an email shortly with exclusive offers. 🎉');
        setEmail('');
      }
    } catch (err) {
      if (err.response?.status === 409) {
        toast.info('You are already subscribed.');
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Dive into a world of fashion by subscribing us & be an elite part of this community.</p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>

      <ToastContainer position='top-center' autoClose={3000} />
    </div>
  );
};

export default NewsletterBox;
