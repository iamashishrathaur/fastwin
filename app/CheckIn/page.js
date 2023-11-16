"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const routes =useRouter()
  function back(){
    routes.back(-1)
  }
  return (
    <>
    <section id='checkNav'>
      <i className='bx bx-chevron-left' onClick={back}></i>
      <h3>Check In</h3>
    </section> 
    <section id='checkBody'>
    <div id='checkBox'>
       
    </div>
      <p>Check in for 7 consecutive days to get treasure box and receive mysterious prizes! .</p>
     <img src='https://fastwin.app/includes/images/Treasure_b.png'/>
    </section>
    </>
  )
}

export default page