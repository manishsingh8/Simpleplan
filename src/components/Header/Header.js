import React,{useState} from "react";
import "./header.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import walt from '../../images/walt.png';



const Header = () => {
    
    // List items
    const listItem = ['Review','Explore','Enroll','Category','Classes','Our Teachers','Our Blogs','Footer'];
    
    const clickHandler = (item) => {
      const scrollPositions = {
        'Footer': 4730,
        'Our Blogs': 3748,
        'Our Teachers': 3064,
        'Classes': 2164,
        'Category': 1400,
        'Enroll': 800,
        'Review':2680,
      };
    
      const defaultScrollPosition = 300;
    
      const position = scrollPositions[item] || defaultScrollPosition;
      window.scrollBy(0, position);
    };
    
 

  return (
    <div className="header">
      <div className="left-section">
        <div className="logo">Logo</div>
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            CATEGORIES
          </button>
          <ul className="dropdown-menu">
            <div className="show-list">
              {
                // map function to traverse over listItem array
                listItem.map((item,index)=>{
                  return(
                    <li key={index}>
                      <a className="dropdown-item" href="#" onClick={()=>clickHandler(item)}>
                     {item}
                      </a>
                  </li>
                  )
                })
              }
             <div className="show-img">
              <img src={walt} alt="" style={{height:"100%",width:"100%",objectFit:"contain"}} />
             </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="right-section">
        <div className="tech">TECH</div>
        <button className="button">LOGIN</button>
        <button className="button">SIGNUP</button>
      </div>
    </div>
  );
};

export default Header;
