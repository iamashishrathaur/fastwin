"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'


const page = () => {
  const routes= useRouter();
  const [error, setError] = useState(null);
 const [inputValue, setInputValue] = useState({
  mobile:'',
  confirmPassword:'',
  password:'',
  invite:'',
  otp:''
 })
 const handleInputChange = (event) => {
  setInputValue({...inputValue,[event.target.name]:event.target.value});
};


   function back(){
    routes.back(-1)
   }
   
   const handleRegister = async()=>{
    if(!inputValue.invite.trim()=="" && !inputValue.mobile.trim()=="" && !inputValue.password.trim()==""){ 
      try {
        const data={invite:inputValue.invite.trim(),mobile:inputValue.mobile.trim(),password:inputValue.password.trim()}
        const response = await axios.post('http://localhost:1000/user/registration/', data);
        if (response.status === 201) {
          console.log('User created successfully');
        } else {
          const responseData = response.data;
          if (responseData.error && responseData.error.name === 'SequelizeUniqueConstraintError') {
            setError('Username must be unique. This username is already taken.');
          } else {
            setError('An error occurred while creating the user.');
          }
        }
      } catch (error) {
        setError('An unexpected error occurred.');
      }
    }
      
   }

  return (
    <>
     <section id='regNav'>
      <i className='bx bx-chevron-left' onClick={back}></i>
      <h3>Register</h3>
    </section>
    <section id='regHero'>
      <img src='https://fastwin.app/includes/images/logo.png'></img>
    </section>
    <section id='regInfo'>
      <div className='infoBox'>
      <img src='/cell.png'/>
      
      <h3>+91</h3>
      <input type='text' name='mobile' id='mobile' placeholder='Mobile Number' maxLength={10} 
        onChange={handleInputChange}/>
      </div>
      <div className='infoBox'>
      <img src='/lock.png'/>
      <input type='text'  name='password' id='password' placeholder='Login Password (≥6 characters)' maxLength={15} 
        onChange={handleInputChange} />
      </div>
      <div className='infoBox'>
      <img src='/lock.png'/>
      <input type='text' name='confirmPassword' placeholder='Confirm Login Password' maxLength={15}  
      onChange={handleInputChange}/>
      </div>
      <div className='infoBox'>
      <img src='/Recommendation.png'/>
      <input type='text' id='invite' name='invite' placeholder='invite Code' maxLength={20} 
        onChange={handleInputChange}/>
      </div>
      <div className='infoBox'>
      <img src='/key.png'/>
      <input type='text' name='otp' placeholder='OTP' maxLength={6} 
      onChange={handleInputChange}/>
      <button>OTP</button>
      </div>
    </section>
    <section id='regButton'> 
    <button onClick={handleRegister}>Register</button>
    </section>
     <section id='regLogin'>
      <h3>Already have an account? <span>Log in</span></h3>
     </section>
     <section id='regPrivacy'>
      <input type='checkbox'/>
      <h3>I agree <span>PRIVACY POLICY</span></h3>
     </section>
    </>
  )
}

export default page