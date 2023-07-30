import React from 'react'
import Plancomp from './Plancomp';
import './plan.scss';
const Plan = () => {
  return (
    <div className='plan-container'>
        <span>
        <h3>Discover Classes  <a href="">SHOW ALL</a></h3>
        <div>
            <p>show prices in: <button>click</button></p>
        </div>
        </span>
        
      <p>Choose from veraity of classes from over the world</p>
      <div className='plan-comp'>
        <Plancomp />
        <Plancomp />
        <Plancomp />
        <Plancomp />
      </div>
    </div>
  )
}

export default Plan
