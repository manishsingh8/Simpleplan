import React from 'react';
import Carousel from './Carousel';
import Section from './Section';

const Teacher = () => {
  return (
    <div style={{marginTop:"40px"}}>
        <h3 style={{color:"#2430A0" ,fontFamily:"font-family: 'Poppins', sans-serif;",fontWeight:"700"}}>Meet our teachers</h3>
      <Carousel />
      <Section />
    </div>
  )
}

export default Teacher;
