import React,{useState} from 'react'
import Plancomp from './Plancomp';
import './plan.scss';
const Plan = () => {

  const[price,setPrice] = useState('₹1999 only'); 
  
  return (
    <div className='plan-container'>
        <span>
        <h3>Discover Classes  <a href="">SHOW ALL</a></h3>
        <div style={{display:"flex",alignItems:"center"}}>
         <p style={{marginTop:"11px",marginRight:"10px"}}> show prices in : </p>  
        <button className="btn1" onClick={()=>{setPrice('₹1999 only')}}>INR</button>
        <button className="btn2" onClick={()=>{setPrice('$25 only')}}>USA</button>
        </div>
        </span>
        
      <p>Choose from veraity of classes from over the world</p>
      <div className='plan-comp'>
        {/* PlanComponent */}
        <Plancomp price={price}/>
        <Plancomp price={price}/>
        <Plancomp price={price}/>
        <Plancomp price={price}/>
      </div>
    </div>
  )
}

export default Plan
