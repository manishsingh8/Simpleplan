import React from 'react';
import './section.scss';
import teacher from '../../../images/teacher2.jpg';

const Section = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-sm-6 column1">
            <div className='sec-img'>
            <img src={teacher} alt=""  />
            </div>
        </div>
        <div className="col-sm-6 column2">
           <h3>Become a certified teacher</h3>
           <p>we only have the best and trusted teachers from the glob. Just join us if you have skill and passion to share </p>
           <ul type="square">
            <li>Make you own schedule</li>
            <li>Teach students on an international platform</li>
            <li>Become part of international community of passionate educators</li>
           </ul>
           <button>START TEACHING</button>
        </div>
    </div>
    </div>
  )
}

export default Section;
