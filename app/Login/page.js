"use client"
import Loader from '@/Components/Loader';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const Page = () => {
  const routes = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    mobile: '',
    password: '',
  });
  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = `${name}=${value};expires=${expirationDate.toUTCString()};path=/`;
    document.cookie = cookieValue;
  };

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const isInputDataValid =
    data.mobile.trim() !== '' &&
    data.password.trim() !== '' &&
    data.mobile.trim().length === 10 &&
    data.password.trim().length >= 6;

  const buttonStyles = {
    backgroundColor: isInputDataValid ? '#0093FF' : '#a5a5a5',
  };

  const createAccount = () => {
    routes.push('/Register');
  };

  const forgotPassword = () => {
    // Implement the logic for forgot password
  };
  axios.defaults.withCredentials = true;
  const handleLogin = async() => {
     if(isInputDataValid){
      setLoading(true);
      try{
        setData({mobile:data.mobile,password: data.password});
        const response= await axios.post("http://localhost:1000/user/login/",data)
        if (response.status === 201) {
          setCookie('jwt',"AShish",1);
           routes.push('/')
           setLoading(false)
        } 
      }catch(error){
        if (error.response && error.response.status === 400){
          setLoading(false)
           toast.warn("Account doesn't exist",{
            position: toast.POSITION.BOTTOM_CENTER,
            className:"toast-message"
            })
        }
        else if (error.response && error.response.status === 401){
          setLoading(false)
           toast.error("Password error, Please check",{
            position: toast.POSITION.BOTTOM_CENTER,
            className:"toast-message"
            })
        }
        else{
          setLoading(false)
          toast.error("Server error, Please try again",{
           position: toast.POSITION.BOTTOM_CENTER,
           className:"toast-message"
           })
        }
      }
     
     }
  };

  return (
    <>
 
    <div>
      <section id='regNav'>
        <i className='bx bx-chevron-left'></i>
        <h3>Login</h3>
      </section>
      <section id='regHero'>
        <img src='https://fastwin.app/includes/images/logo.png' alt='Logo'></img>
      </section>
      <section id='regInfo'>
        <div className='infoBox'>
          <img src='/cell.png' alt='Mobile Icon' />
          <input
            type='text'
            name='mobile'
            id='mobile'
            placeholder='Mobile Number'
            maxLength={10}
            onChange={handleInput}
          />
        </div>
        <div className='infoBox'>
          <img src='/lock.png' alt='Lock Icon' />
          <input
            type='password' // Set input type to password for security
            name='password'
            id='password'
            placeholder='Login Password (≥6 characters)'
            maxLength={15}
            onChange={handleInput}
          />
        </div>
      </section>
      <section id='regButton'>
        <button style={buttonStyles} onClick={handleLogin}>
          {loading ?  <Loader/>: 'Login'}
        </button>
      </section>
      <section id='logButton'>
        <button onClick={createAccount}>Create an account</button>
        <button onClick={forgotPassword}>Forgot Password</button>
      </section>
    </div>
     
    </>
  );
};

export default Page;
