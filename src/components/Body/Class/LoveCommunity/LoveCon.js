import React from 'react';
import w from '../../../../images/w5.jpg';
import w2 from '../../../../images/w2.jpg';
import w3 from '../../../../images/w3.jpg';
import './lovecommunity.scss'

const LoveCon = () => {
  return (
    <div className='lov-com'>
       <h3>Love from community</h3>
    <div className="review">
        <div >
        <img src={w} alt="" />
        <h6>Joya</h6>
        <p>It is nice to be on an international platform where  there are teachers from around the world.</p>
        </div>
        <div>
        <img src={w2} alt="" />
        <h6>Kethrin</h6>
        <p>The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.</p>
        </div>
        <div>
        <img src={w3} alt="" />
        <h6>Rechal</h6>
        <p>As a student, I get to explore and learn about the different cultural  specialties of another country with native teachers.</p>
        </div>
    </div>
    </div>
  )
}

export default LoveCon
