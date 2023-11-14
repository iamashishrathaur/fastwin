"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const routes =useRouter()
    function back(){
        routes.back(-1)
     }
  return (
    <>
    <section id='rewardNav'>
    <i className='bx bx-chevron-left' onClick={back}></i>
        <h3>Rewards</h3>
    </section>
      <section id='welcomeReward'>
        <div id='top'> <h4>Welcome</h4> <h3>₹0</h3></div>
        <div id='mid'><div></div></div>
        <div id='bottom'><p>We will reward you with ₹0 when you join our Telegram Channel </p><button>Claimed</button></div>
      </section>
      <section id='rechargeReward'>
      <div id='top'> <h4>First recharge</h4> <h3>₹20</h3></div>
        <div id='mid'><div></div></div>
        <div id='bottom'><p>This reward can only be obtained by doing your first recharge</p><button>Claimed</button></div>
      </section>
      <section id='dailyReward'>
      <div id='top'> <h4>Daily 100 orders</h4> <h3>₹10</h3></div>
        <div id='mid'><div></div></div>
        <div id='bottom'><p>You need to complete 100 games in order to receive this reward</p><button>Claimed</button></div>
      </section>
    </>
  )
}

export default page