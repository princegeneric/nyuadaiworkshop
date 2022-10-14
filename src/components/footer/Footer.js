/*import React from 'react'
import './FooterStyles.css'
import {FaTwitter} from 'react-icons/fa'
import {FaDesktop} from 'react-icons/fa'



function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>The NYU Clinical Artificial Intelligence workshop</h3>
                    <h2>by Farah Shamout</h2>
                    <ul className="social">
                        <li>
                        <FaTwitter className='icon' href="https://twitter.com/NYUClinicalAI"/>
                        </li>
                        <li>
                        <FaDesktop className='icon' href="https://clinicalailab.com"/>
                        </li>
                    </ul>


                </div>
              
            </div>
        </div>

       
       

    )
}

export default Footer*/ 

import React from 'react';
import'./FooterStyles.css'
import {FaAlignCenter, FaAlignRight, FaTwitter} from 'react-icons/fa'
import {FaDesktop} from 'react-icons/fa'
  
const Footer = () => (
  <footer className="footer">
   {/**  <p className="text">The NYU Clinical AI Workshop</p> */}
    <ul className="social">
                    <a>NYU CAI Lab</a>
                    <a href="https://twitter.com/NYUClinicalAI" >
                    <FaTwitter className='icon' />
                    </a>
                    <a href="https://clinicalailab.com">
                    <FaDesktop className='icon' />
                    </a>
                    </ul>



return (
  <footer class="footer">
  © 2023 by the Clinical AI Lab

 

  </footer>
)
  
  </footer>
);
  
export default Footer;





