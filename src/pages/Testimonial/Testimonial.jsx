import React from 'react';
import './Testimonial.css';
import {techstack} from '../../utils/techstack';

const Testimonial = () => {
  return (
    <div className='container techstack' id='testimonial'>
      <h2 className='col-12 mt-3 mb-1 text-center'>Tech Stack</h2>
      <hr className='hr'/>
      <p className='pb-3 '>
        👉 including programming languages, frameworks,databases, front-end and  back-end tools and APIs
      </p>
      <div className="row">
        {techstack.map((tech) => (
          <div key={tech.id} className=" col-md-3 columns ">
            <div className="techcard card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                    <tech.icon className='tech-icon' />
                    </div>
                  <div className="media-body">
                    <h5>{tech.name}</h5>
                  </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial