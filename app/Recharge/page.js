'use client'
import React from 'react'

const page = () => {
 const changeValue=(val)=>{
    console.log("click")
    }
  return (
    <>
    <section id='rechargeNav'>
      <h4>Records</h4>
      <h3>Recharge</h3>
      <h4>Help</h4>
    </section>
    <section id="rechargeBal">
      <span>Balance</span>
      <h2>₹455.5</h2>
    </section>
    <section id='rechargeInput'>
      <h4>Amount</h4>
      <span>₹</span><input type='text' placeholder='200 ~ 100000' maxLength={6}/>
       <hr></hr>
    </section>
    <section id='rechargeAmount'>
      <button className='value' >₹200</button>
      <button className='value' onClick={() => changeValue(200)}>₹2400</button>
      <button className='value' onClick={changeValue(4500)}>₹4500</button>
      <button className='value' onClick={changeValue(20000)}>₹20000</button>
      <button className='value' onClick={changeValue(30000)}>₹30000</button>
      <button className='value' onClick={changeValue(45000)}>₹45000</button>

      <button>Recahrge</button>
    </section>

    </>
  )
}

export default page