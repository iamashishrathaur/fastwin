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
     <div className='check-row'>
     <div className='day'>
         <span>Day 1</span>
         <span>Day 2</span>
         <span>Day 3</span>
         <span>Day 4</span>  
      </div>
      <br />
       <div className='coin'>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
       </div>
       <div className='money'>
         <span>+1</span>
         <span>+1</span>
         <span>+1</span>
         <span>+1</span>
       </div> 

     </div>
     <div className='check-row'>
     <div className='day'>
         <span>Day 1</span>
         <span>Day 2</span>
         <span>Day 3</span>
         <span>Day 4</span>  
      </div>
      <br />
       <div className='coin'>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
       </div>
       <div className='money'>
         <span>+1</span>
         <span>+1</span>
         <span>+1</span>
         <span>+1</span>
       </div> 

     </div>
     <div className='check-button'>
       <button>Check In</button>
     </div>
    
    </div>
      <p>Check in for 7 consecutive days to get treasure box and receive mysterious prizes! .</p>
     <img src='https://fastwin.app/includes/images/Treasure_b.png'/>
    </section>
    </>
  )
}

export default page