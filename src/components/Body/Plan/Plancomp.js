import React from 'react';
import img from '../../../images/book2.jpg';
import './plancomp.scss';

const Plancomp = () => {
  return (
    
       <div className="plan-card">
        {/* <div className='plan-inner'> */}
            <img src={img} className="card-img-top" alt="..." style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
            <p style={{color:"#2430A0 ",paddingLeft:"4px"}}>LANGUAGE</p>
            <h6 className="card-title">Class name- Lorem ipsum dolor sit amet, consectetur adipisi.</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>

        </div>
        //  </div>
        
  )
}

export default Plancomp;
