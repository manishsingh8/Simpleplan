import React from 'react';
import './section.scss';
import teacher from '../../../images/teacher2.jpg';

const Section = () => {
  return (
    <div className="container">
    <div className="row">
        <div className=" col-md-6 column1">
            <div className='sec-img'>
            <img src={teacher} alt=""  />
            </div>
        </div>
        <div className=" col-md-6 column2">
           <h3 style={{color:"#2430A0",fontFamily:"font-family: 'Poppins', sans-serif;",fontWeight:"700"}}>Become a certified teacher</h3>
           <p>we only have the best and trusted teachers from the glob. Just join us if you have skill and passion to share </p>
           <ul>
            <li><i class="fa-solid fa-stop fa-beat" /> Make you own schedule</li>
            <li><i class="fa-solid fa-stop fa-beat"/> Teach students on an international platform</li>
            <li><i class="fa-solid fa-stop fa-beat"/> Become part of international community of passionate educators</li>
           </ul>
           <button>START TEACHING  <i class="fa-solid fa-circle-arrow-right fa-fade"></i></button>
        </div>
    </div>
    </div>
  )
}

export default Section;
