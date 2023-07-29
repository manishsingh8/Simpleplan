import React from 'react';
import w from '../../../../images/w5.jpg';
import w2 from '../../../../images/w2.jpg';
import w3 from '../../../../images/w3.jpg';

const LoveCon = () => {
  return (
    <div>
       <h3>Love from community</h3>
    <div className="review">
        <div >
        <img src={w} alt="" />
        <h6>Joya</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing<br/> elit. Reprehenderit aut quae officia</p>
        </div>
        <div>
        <img src={w2} alt="" />
        <h6>Kethrin</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing<br/> elit. Reprehenderit aut quae officia</p>
        </div>
        <div>
        <img src={w3} alt="" />
        <h6>Rechal</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing<br/> elit. Reprehenderit aut quae officia</p>
        </div>
    </div>
    </div>
  )
}

export default LoveCon
