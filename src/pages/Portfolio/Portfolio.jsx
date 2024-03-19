import React from 'react';
import './Portfolio.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBookReader } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      <div className="container education" id='portfolio'>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education Details</h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '', color: '', border:'3px solid '}}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2023-present"
    iconStyle={{ background: 'LIGHTGRAY', color: 'RED', border:'2px solid RED' }}
    icon={<FaBookReader />}
  >
    <h3 className="vertical-timeline-element-title">FULL STACK DEVELOPER</h3>
    <h4 className="vertical-timeline-element-subtitle">PUDUCHERRY ,INDIA</h4>
    <p>
      GUVII,CHENNAI
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '', color: '', border:'3px solid '}}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2015-2019"
    iconStyle={{ background: 'lightgray', color: 'red', border:'2px solid red' }}
    icon={<FaBookReader />}
  >
    <h3 className="vertical-timeline-element-title">B.TECH</h3>
    <h4 className="vertical-timeline-element-subtitle">SRI MANAKULA VINAYAGER ENGINEERING COLLEGE</h4>
    <p>
      PUDUCHERRY,INDIA
    </p>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '', color: '', border:'3px solid '}}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2014-2015"
    iconStyle={{ background: 'lightgray', color: 'red', border:'2px solid red' }}
    icon={<FaBookReader />}
  >
    <h3 className="vertical-timeline-element-title">HIGHER SECONDARY BOARD EXAM </h3>
    <h4 className="vertical-timeline-element-subtitle">AMALORPAVAM HIGHER SECONDARY SCHOOL</h4>
    <p>PUDUCHERRY ,INDIA</p>
   
  </VerticalTimelineElement>
  
  
  </VerticalTimeline>
      </div>
    </div>
  )
}

export default Portfolio