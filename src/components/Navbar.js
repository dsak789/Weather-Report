import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import sun from '../Media/sun.png'
import moon from '../Media/moon.png'


const Navbar = () => {
  return (
    <div className='navbar-main'>
        <div className='header'>
            <img src={sun} className='sun-moon' width={50} height={50} alt='sun'/>
            <p>WEATHER MOOD</p>
            <img src={moon} className='sun-moon' width={50} height={50} alt='moon'/>
        </div>
        {/* <div className='navbar'>
            <div className='nav-links'>
                <NavLink to='/home' className='home-link'>
                    <p>
                        Home
                    </p>
                </NavLink>
                <NavLink to='/home' className='home-link'>
                    <p>
                        Other Citys
                    </p>
                </NavLink>
                <NavLink to='/home' className='home-link'>
                    <p>
                        Other Contries
                    </p>
                </NavLink>
            </div>
        </div> */}
    </div>
  )
}

export default Navbar