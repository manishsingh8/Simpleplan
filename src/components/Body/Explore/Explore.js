import React from 'react'
import './explore.scss';
import img1 from '../../../images/feepay.jpg';
import img2 from '../../../images/classimg.jpg';
import img3 from '../../../images/learn.webp';
import img4 from '../../../images/skill.webp';

const Explore = () => {
  return (
    <div className='explore-container'>
      
      <div className='explore-page'>
         <h3>Explore.Enroll.Have Fun. Repeat-<br/>here hobby meets happiness</h3>
      </div>
      <div className='explore-card'>
         <div className='exp-img'>
             <div>
             <img src={img1} alt="" />
                </div>
                <h6>Learn something new</h6>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsa aut 
                 obcaecati non, nemo incidunt sunt laudantium at doloribus con</p>
         </div>
        
         <div className='exp-img'>
             <div>
             <img src={img2} alt="" />
                </div>
                <h6>Learn something new</h6>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsa aut 
                 obcaecati non, nemo incidunt sunt laudantium at doloribus con</p>
         </div>
    
         
         <div className='exp-img'>
             <div>
             <img src={img3} alt="" />
                </div>
                <h6>Learn something new</h6>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsa aut 
                 obcaecati non, nemo incidunt sunt laudantium at doloribus con</p>
         </div>
        
       
         <div className='exp-img'>
             <div>
             <img src={img4} alt="" />
                </div>
                <h6>Learn something new</h6>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsa aut 
                 obcaecati non, nemo incidunt sunt laudantium at doloribus con</p>
         </div>
         </div>
         </div>
  )
}

export default Explore
