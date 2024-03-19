import React, { useState } from 'react';
import './Sidebar.css';
import Home from '../../pages/Home/Home';
import { RiArrowLeftDoubleFill,RiArrowRightDoubleFill } from "react-icons/ri";
import Menu from '../menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {

  const [toggle,setToggle] = useState(true)
  

  const handleClick = () => {
    setToggle(!toggle)

  }

  return (
    <div className='sidebar-section'>
      <div className={toggle ? 'sidebar-toggle sidebar':'sidebar'}>
        <div className="sidebar-toggle-icons">
          <Menu toggle= {toggle }/>
          <p onClick={handleClick}>{
            toggle ? ( <RiArrowLeftDoubleFill size={30}/>):(<RiArrowRightDoubleFill size={30}/> )
          }
            
         
          </p>
        </div>
      </div>
        <div className="container">
          <Home />

        </div>
    </div>
  )
}

export default Sidebar