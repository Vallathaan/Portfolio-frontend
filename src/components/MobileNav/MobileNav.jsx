 import React, { useState } from 'react';
 import './Mobile.css';
 
 import { IoClose,IoMenuSharp } from "react-icons/io5";
 import { FcHome,FcInfo,FcContacts,FcReading,FcCommandLine } from "react-icons/fc";
 import { Link } from 'react-scroll';
 
 const MobileNav = () => {

  const [open,setOpen] =useState(false)

  const handleOpen = () =>{
    setOpen(!open)
  };
    const handleMenuClick = () => {
      setOpen(false);
    };
  

   return (
     <> 
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (<IoClose size={30} className='mobile-nav-icon' onClick ={handleOpen}/> ):( <IoMenuSharp size={30} className='mobile-nav-icon'  onClick ={handleOpen}/> )}
             
            <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {open && (
           <div className="mobile-nav-menu">
           <div className="nav-items">
                 <div className="nav-item">
                   <div className="nav-link">
                  <Link to='home' spy={true} smooth={true} offset={-100} duration={100}
                  onClick ={handleMenuClick}><FcHome /> Home</Link> 
                   </div>
                 </div>
                 <div className="nav-item">
                   <div className="nav-link">
                   <Link to='about' spy={true} smooth={true} offset={-100} duration={100}
                    onClick ={handleMenuClick}> <FcInfo />About</Link>
                   </div>
                 </div>
                 <div className="nav-item">
                   <div className="nav-link">
                   <Link to='testimonial' spy={true} smooth={true} offset={-100} duration={100}
                    onClick ={handleMenuClick}> <FcCommandLine/>Testimonial</Link>
                   </div>
                 </div>
                 <div className="nav-item">
                   <div className="nav-link">
                   <Link to='portfolio' spy={true} smooth={true} offset={-100} duration={100}
                    onClick ={handleMenuClick}> <FcReading/>Portfolio</Link>
                   </div>
                 </div>
                 <div className="nav-item">
                   <div className="nav-link">
                   <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}
                    onClick ={handleMenuClick}><FcContacts/> Contact</Link> 
                   </div>
                 </div>
               </div>
           </div>
      )}
        
      </div>
       
      
     </>
   )
 }
 
 export default MobileNav