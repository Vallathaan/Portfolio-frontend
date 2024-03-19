import React, { useState } from 'react';
import './Contact.css';
import contact from '../../Assets/contact/Contact.jpg';
import { toast }from 'react-toastify';
import axios from 'axios';


const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [msg,setMsg] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        if(!name || !email || !msg){
          toast.error('please provide all fields');
        }
        const res =await axios.post('http://localhost:2900/api/sendEmail',{name,email,msg});

        if(res.dara.success){
          toast.success(res.data.message);
        }else{
          toast.error(res.data.message);
        }

    }
    catch(error){
      console.log(error)
    }

  }

  return (
    <div className='container  contact' id='contact'>
      <div className="">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row  border-line">
                <img src={contact} alt="contactimg" className='img' />
              </div>
            </div>
          </div>
          <div className="inputbox col-lg-6 col-md-6 ">
                      
              <div className="row px-3 ">
                <input type="text" name='name' placeholder='Write your name' className='input mb-3 py-2 ' value={name} onChange={(e) => setName(e.target.value) }  />
              </div>
              <div className="row px-3">
                <input type="email" name='email' placeholder='Write your email address' className='input mb-3 py-2' value={email} onChange={(e) => setEmail(e.target.value) } />
              </div>
              <div className="row px-3">
                <textarea type="text" name='msg' placeholder='Type your message' className='textinput mb-3' value={msg} onChange={(e) => setMsg(e.target.value) }   />
              </div>
              <div className="row px-3">
                <button className=' btn btn-success' type='submit' onClick ={handleSubmit}>SEND MESSAGE</button>
              </div>
            </div>
            </div>           
          </div>
        </div>
        
      
   
  )
}

export default Contact