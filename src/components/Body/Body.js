import React from 'react';
import './body.css';
import img from '../../images/image1.png';

const Body = () => {
  return (
    <div className='body-container'>
     <div className='body-inner'>
         <div className='body-heading'>
           <h3>Hobbies ❤️ Happiness ❤️ Home</h3>
         </div>
         <div className='body-para'>
          A Nordic Startup which brings incredibly<br/> intresting hobbies
          from around the world to<br/> people of all ages.
         </div>
         <div className='body-button'>
          <input type="text" placeholder='Enter your email' className='email' />
          <button>START EXPLORING</button>
         </div>
     </div>
     <div className="image-section">
         <img src={img} alt="image..." className='body-image' />
     </div>
    </div>
  )
}

export default Body
