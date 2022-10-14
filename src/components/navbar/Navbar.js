import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'
import image from '../../assets/image.png'


import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}> 
                <img className='logo' src={image} href="https://clinicalailab.com" ></img>
            
            </div>
            <ul className="nav-menu">
                {/* <Link to='home' smooth={true} duration={500} ><li>Home</li></Link> */}
                <Link to='speakers' smooth={true} duration={500} ><li>Speakers</li></Link>
                <Link to='agenda' smooth={true} duration={500} ><li>Register</li></Link>
            </ul>
        
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                {/* <Link to='home' smooth={true} duration={500} ><li>Home</li></Link> */}
                <Link to='speakers' smooth={true} duration={500} ><li>speakers</li></Link>
                <Link to='agenda' smooth={true} duration={500} ><li>Register</li></Link>
             
                </ul>
               
                </div>
            </div>

        
    )
}

export default Navbar
