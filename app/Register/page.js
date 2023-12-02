"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '@/Components/Loader'


const page = () => {
  const routes= useRouter();
  const [isChecked, setIsChecked] = useState(true)
  const [loading, setLoading] = useState(false);
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
const isInputDataNull = inputValue.mobile.trim()!=="" 
&& inputValue.password.trim()!==""  
&& inputValue.confirmPassword.trim()!==""
&& inputValue.confirmPassword.trim() === inputValue.password.trim()
&& inputValue.invite.trim() !== ""
&& inputValue.otp.trim() !==""
 && inputValue.mobile.trim().length===10 
 && inputValue.password.trim().length>=6 ;

const buttonStyles = {
 backgroundColor: isInputDataNull ?  "#0093FF" : "#a5a5a5"
};


   function back(){
    routes.back(-1)
   }
   
      
  const handleRegister = async () => {
    if (isInputDataNull) {
      setLoading(true)
      try {
        const data = {invite: inputValue.invite.trim(),mobile: inputValue.mobile.trim(),password: inputValue.password.trim()}
        const response=await axios.post('https://gray-hungry-duckling.cyclic.app/user/registration/',data);
        if (response.status === 201) {
          //  toast.success("'Well done!",{
          //   position: toast.POSITION.BOTTOM_CENTER,
          //   className:"toast-message"
          //   })
            setLoading(false)
            routes.push('/')
        } 
      } catch (error) {
        if (error.response && error.response.status === 400) {
          if (error.response.data && error.response.data.error) {
            toast.error(error.response.data.error,{
              position: toast.POSITION.BOTTOM_CENTER,
              className:"toast-message"
              })
              setLoading(false)
          } else {
            toast.warn('Mobile Number Already Registered',{
              position: toast.POSITION.BOTTOM_CENTER,
              className:"toast-message"
              })
              setLoading(false)
  
          }
        } else {
          toast.info('Check Internet Connection',{
            position: toast.POSITION.BOTTOM_CENTER,
            className:"toast-message"
            })
            setLoading(false)
          
        }
      }
    } else {
      console.log('Please fill in all required fields.');
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
    <button onClick={handleRegister} style={buttonStyles}>
    { loading ?  <Loader/>: 'Register'}
    </button>
    </section>
     <section id='regLogin'>
    <h3>Already have an account? <span onClick={()=>{routes.push("/")}}>Log in</span></h3>
     </section>
     <section id='regPrivacy'>
      <input type='checkbox' defaultChecked={isChecked}/>
      <h3>I agree <span>PRIVACY POLICY</span></h3>
     </section>
  
    </>
  )
}

export default page