import React from 'react';
import './Home.css';
import{ FaFileDownload } from 'react-icons/fa';
import resume from '../../Assets/Resume/resume.pdf';


const Home = () => {
 
  
  return (
    <>
    <div className="home" id='home'>
     
      <div className="home-intro">
        <div className="home-wrapper">
          <div className="intro">
            <h4 className='home-intro1'>Hello I'm</h4>
            <h1 className='home-name'>Vallathan</h1>
            <div className="home-title">
              <div className="home-title-wrapper">
                <div className="home-title-item">
                  Mern Stack Developer
                </div>
                <div className="home-title-item">
                  Front End Developer
                </div>
                <div className="home-title-item">
                  Back End Developer
                </div>
                <div className="home-title-item">
                  UI/UX Developer
                </div>
              </div>
            </div>
            <div className="home-desc">
              I design and develop services for customer of all sizes,specializing in creating and developing stylish,modern websites,web service online stores.
            </div>
          </div>
        </div>
      
        <a className='button' href={resume} >Resume<FaFileDownload/></a>
      </div>
    </div>
    </>
  )
}

export default Home