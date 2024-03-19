import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import About from './pages/About/About'
import Testimonial from './pages/Testimonial/Testimonial'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import './App.css'
import ScrollToTop from "react-scroll-to-top";
import MobileNav from './components/MobileNav/MobileNav'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <ToastContainer />
      <MobileNav />
      <Sidebar />
      <div className='container'>
      <About/>
      <Testimonial/>
      <Portfolio /> 
      <Contact />
      
      </div>
      <div className='footer mb-3 ms-3 '>
        <h6 className='text-center'>Made by &copy; vallathan 2024</h6>
      </div>
      <ScrollToTop smooth
      color='lightgray'
      style={{ backgroundColor:'red', borderRadius:'80px',}} className='scroll-to-top' />
    </div>
  )
}

export default App