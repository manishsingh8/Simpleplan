import React from 'react';
import Header from './Header';
import Body from './Body';

const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <button style={{borderRadius:"50%",position:"absolute",top:"80%",bottom:"10%",left:"90%"}}>floating</button>
    </div>
  )
}

export default Home
