"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const routes= useRouter();
 function back(){
    routes.back(-1)
 }
  return (
   <>
   <section id='withdrawNav'>
    <i className='bx bx-chevron-left' onClick={back}></i>
      <h3>Withdraw</h3>
      <h4>Records</h4>
    </section>
    <section id="withdrawBal">
      <span>Balance</span>
      <h2>₹455.5</h2>
    </section>
    <section id='bankCard'>
     <div>Bank</div>
    </section>
    <section id='withdrawInput'>
      <h4>Amount</h4>
      <span>₹</span><input id='totalValue' type='text' placeholder='200 ~ 100000' maxLength={6}/>
       <hr></hr>
    </section>
    <section id='withdrawTerm'>
        <div className='term'> 
        <p>Amount  ₹1000 fee ₹30 </p>
        <p>Maximum:<span>₹30</span></p>
         </div>
        <div className='term'>
        <p>Amount  ₹1000 fee ₹30 </p>
        <p>Minimum:₹230</p>   
        </div>
    </section>
    <center><button id='withdrawButton'>Withdrawal</button></center>
   </>
  )
}

export default page