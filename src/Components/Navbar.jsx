import React from 'react'
import navbar from '../Styles/navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Navbar() {
  return (
    <div>
    <nav>
       <ul>
            <li class="active"> <AnchorLink href="#home"  className='anchor'>Home
            </AnchorLink></li>
            <li><AnchorLink href="#about" className='anchor'>About</AnchorLink></li>
            <li><AnchorLink href="#service" className='anchor'>Services</AnchorLink></li>
            <li><AnchorLink href="#portfolio" className='anchor'>Portfolio</AnchorLink></li>
           
            <li><AnchorLink href="#footer" className='anchor'>Contact</AnchorLink></li>


         </ul>
        
         
         </nav>
    </div>
  )
}

export default Navbar
