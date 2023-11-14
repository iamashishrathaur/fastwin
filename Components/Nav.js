"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname,} from 'next/navigation'

const Nav = () => {
  const pathname = usePathname()
   function isActive(path){
    if(pathname==path){
      return true
    }
   } 
  return (
    <>
    <div className='navbar'>
       
    <Link className='link' href="/" style={{ color: isActive('/') ? '#0093FF' : '#89CDFF' }} >
    <i className='bx bx bxs-home'></i>
        <span className="nav__name">Home</span>
    </Link>

    <Link className='link' href="/Invite" style={{ color: isActive('/Invite') ? '#0093FF' : '#89CDFF' }}>
    <i className='bx bx bxs-group'></i>
        <span className="nav__name">Invite</span>
    </Link>

    <Link className='link' href="/Recharge" style={{ color: isActive('/Recharge') ? '#0093FF' : '#89CDFF' }}>
    <i className='bx bx bxs-wallet'></i>
        <span className="nav__name"> Recharge</span>
    </Link>
    
    <Link className='link' href="/My" style={{ color: isActive('/My') ? '#0093FF' : '#89CDFF' }}>
    <i className='bx bx bxs-user'></i>
        <span className="nav__name">My</span> 
    </Link>
  </div>
  </>
  )
}

export default Nav