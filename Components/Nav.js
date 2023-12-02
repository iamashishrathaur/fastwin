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
    {/* <Link className='link' href="/" >
   <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/') ? '/home_s.png' : '/home.png'})`
    }}></span>
        <span className="nav__name">Home</span>
    </Link> */}
    <Link className='link' href="/" style={{ color: isActive('/') ? '#0093FF' : '#89CDFF' }} >
    <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/') ? '/home_s.png' : '/home.png'})`
    }}></span>
        <span className="nav__name">Home</span>
    </Link>

    <Link className='link' href="/Invite" style={{ color: isActive('/Invite') ? '#0093FF' : '#89CDFF' }}>
    <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/Invite') ? '/group_s.png' : '/group.png'})`
    }}></span>
        <span className="nav__name">Invite</span>
    </Link>

    <Link className='link' href="/Recharge" style={{ color: isActive('/Recharge') ? '#0093FF' : '#89CDFF' }}>
    <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/Recharge') ? '/wallet_s.png' : '/wallet.png'})`
    }}></span>
        <span className="nav__name"> Recharge</span>
    </Link>
    
    <Link className='link' href="/My" style={{ color: isActive('/My') ? '#0093FF' : '#89CDFF' }}>
    <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/My') ? '/my_s.png' : '/my.png'})`
    }}></span>
        <span className="nav__name">My</span> 
    </Link>
  </div>
  </>
  )
}

export default Nav