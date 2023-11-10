import React from 'react'

const page = () => {
  return (
    
    <>
    <section id='myNav'> 
    <div id='blue'></div>
    <div id='white'></div>
    </section>

   <section id='profile'>
   <div id='myProfile'>
      <i class='user bx bxs-user-circle'></i>
      <div id='data'>
      <h2>Ashish</h2>
      <div id='id'>
        <h4>Mob:<span>7905321205</span></h4>,
       <h4>ID:<span>232112</span></h4>
      </div>
      </div>

      <i class='alert bx bx-error-circle'></i>
   <div id='myProfileButton'>
    <button>Change Nick Name</button>
    <button>Change Password</button>
   </div>
   
   </div>
 
   </section>

   <section className='myList'>
    <div id='orderRecord'>
    <i class='icon1 bx bx-food-menu'></i>
     <span>Order Record</span>
     <i class='icon2 bx bx-chevron-right'></i>
     </div>
   </section>
   
   <div className='brackLine'></div>
   <section className='myList'>
   <div id='financialDelails'>  
   <i class='icon1 bx bx-rupee'></i>
     <span>Financial Delails</span>
     <i class='icon2 bx bx-chevron-right'></i>
     </div>
   </section>

   <div className='brackLine2'></div>

   <section className='myList'>
    <div id='download'>
     <i class='icon1 bx bx-cloud-download'></i>
     <span>Download</span>
     <i class='icon2 bx bx-chevron-right'></i>
     </div>
   </section>

   <div className='brackLine'></div>

   <section className='myList'>
   <div id='followUs'>
   <i class='icon1 bx bxl-twitter' ></i>
     <span>Follow us</span>
     <i class='icon2 bx bx-chevron-right'></i>
     </div>
   </section>

   <div className='brackLine'></div>

   <section className='myList'>
  <div id='support'>
  <i class='icon1 bx bx-support' ></i>
     <span>Support</span>
     <i class='icon2 bx bx-chevron-right'></i>
     </div>
   </section>

   <div className='brackLine'></div>

   <section className='myList'>
    <div id='complaint'> 
    <i class='icon1 bx bx-conversation'></i>
     <span>Complaint</span>
     <i class='icon2 bx bx-chevron-right'></i>
     </div>
   </section>

   <div className='brackLine2'></div>

   <span id='signOut'>Sign Out</span>
    </>
  )
}

export default page