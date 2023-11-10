import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>

    <div className='navbar'>
       
    <Link className='link' href="/">
        <i class='bx bx-home-alt nav__icon'></i>
        <span class="nav__name">Home</span>
    </Link>

    <Link className='link' href="/Invite">
        <i class='bx bx-home-alt nav__icon'></i>
        <span class="nav__name">Invite</span>
    </Link>

    <Link className='link' href="/Recharge">
        <i class='bx bx-home-alt nav__icon'></i>
        <span class="nav__name"> Recharge</span>
    </Link>
    
    <Link className='link' href="/My">
        <i class='bx bx-home-alt nav__icon'></i>
        <span class="nav__name">My</span> 
    </Link>
  </div>
  </>
  )
}

export default Nav