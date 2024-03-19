import React from 'react';
import './Menu.css';
import profile from '../../Assets/ProfilePic/homeimg.png';
import Logo from '../../Assets/Logo/logo.jpg'
import { FcHome,FcInfo,FcContacts,FcReading,FcCommandLine } from "react-icons/fc";
import { Link } from 'react-scroll';

const Menu = ({toggle}) => {
  return (
    <div>
      {toggle ? (
      <>
        <div className="navbar-profile-pic">
           <img src={profile} alt="profilePic" />
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
           <Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome /> Home</Link> 
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
            <Link to='about' spy={true} smooth={true} offset={-100} duration={100}> <FcInfo />About</Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
            <Link to='testimonial' spy={true} smooth={true} offset={-100} duration={100}> <FcCommandLine/>Testimonial</Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
            <Link to='portfolio' spy={true} smooth={true} offset={-100} duration={100}> <FcReading/>Portfolio</Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}><FcContacts/> Contact</Link> 
            </div>
          </div>
        </div>
      </> ):(
        <>
        <div className="navbar-logo-pic">
        <img src={Logo} alt="logoPic" />
     </div>
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-links">
           <Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome /> </Link> 
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
            <Link to='about' spy={true} smooth={true} offset={-100} duration={100}> <FcInfo /></Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
            <Link to='testimonial' spy={true} smooth={true} offset={-100} duration={100}> <FcCommandLine/></Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
            <Link to='portfolio' spy={true} smooth={true} offset={-100} duration={100}> <FcReading/></Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}><FcContacts/></Link> 
            </div>
          </div>
      </div>
      </>
      )}
      
    </div>
  )
}

export default Menu