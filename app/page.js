"use client"
import React from 'react'
import Nav from '@/Components/Nav'
import { useRouter } from 'next/navigation';
const page = () => {
  const routes=useRouter()
  const Recharge = () => {
    routes.push('/Recharge');
    //push, replace, and back
  };
  const Withdraw = () => {
    routes.push('/Withdraw');
    //push, replace, and back
  };
  const taskReward=()=>{
    routes.push("/TaskReward")
  }
  const checkIn=()=>{
    routes.push("/CheckIn")
  }
  return (
   <>
   <Nav/>
   <section id='HomeTop'>
     <div>
     <h4>Balance</h4>
      <h2>₹234.00</h2>
      <h5>ID:12345</h5>
     </div>
     <div id='button'>
      <button onClick={Recharge}>Recharge</button>
      <button onClick={Withdraw}>Withdraw</button>
     </div>
   </section>
   
   <section id='HomeReward'>
     <div onClick={taskReward}>
       <div className='image1'><i className='bx bxs-gift'></i></div>
       <h4>Task reward</h4>
     </div>
     <div onClick={checkIn}>
       <div className='image2'><i className='bx bxs-calendar-check'></i></div>
       <h4>Check in</h4>
     </div>
   </section>
   <section id='HomeReferBanner'>
    <img src='https://fastwin.app/includes/images/refer_bn.svg'></img>
   </section>
 
   <section id='HomeGame'>
    <img src='https://fastwin.app/includes/images/fast-parity.jpg' />
    <img src='https://fastwin.app/includes/images/parity.jpg'/>
    <img src='https://fastwin.app/includes/images/sapre.jpg'/>
    <img src='https://fastwin.app/includes/images/dice.jpg'/>
    <img src='https://fastwin.app/includes/images/AnB.jpg'/>
    <img src='https://fastwin.app/includes/images/wheel.png'/>
    <img src='https://fastwin.app/includes/images/MineSweeper.png'/>
    <img src='https://fastwin.app/includes/images/jetx.png'/>
    <img src='https://fastwin.app/includes/images/ludo.png'/>
    <img/>
   </section>
   </>
  )
}

export default page