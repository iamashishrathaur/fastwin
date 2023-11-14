'use client'
import React, { useState } from 'react'
import Nav from '@/Components/Nav'
const page = () => {
  const [totalValue, setTotalValue] = useState("");
  function change(value) {
    setTotalValue(value);
  }
  function recharge(){
   // alert(totalValue)
  }

  return (
    <>
    <Nav/>
    <section id='rechargeNav'>
      <h4>Records</h4>
      <h3>Recharge</h3>
      <h5>Help</h5>
    </section>
    <section id="rechargeBal">
      <span>Balance</span>
      <h2>₹455.5</h2>
    </section>
    <section id='rechargeInput'>
      <h4>Amount</h4>
      <span>₹</span><input id='totalValue' value={totalValue} type='text' placeholder='200 ~ 100000' maxLength={6} onChange={(e) => change(e.target.value)}/>
       <hr></hr>
    </section>
    <section id='rechargeAmount'>
      <button className='value' onClick={() => change(200)}>₹200</button>
      <button className='value' onClick={() => change(2400)}>₹2400</button>
      <button className='value' onClick={() => change(4500)}>₹4500</button>
      <button className='value' onClick={() => change(20000)}>₹20000</button>
      <button className='value' onClick={() => change(30000)}>₹30000</button>
      <button className='value' onClick={() => change(45000)}>₹45000</button>

      <button onClick={recharge}>Recharge</button>
    </section>

    </>
  )
}

export default page