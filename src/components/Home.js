import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Category from './Body/Category/Category';
import Blog from './Body/Blog/Blog';
import Class from './Body/Class/Class';
import Plan from './Body/Plan/Plan';
import Explore from './Body/Explore/Explore';
import Teacher from './Body/Teacher/Teacher';

const Home = () => {
  return (
    <div style={{marginLeft:"10%",marginRight:"10%"}}>
      <Header />
      <Body />
      <Explore />
      <button style={{borderRadius:"50%",position:"absolute",top:"80vh",bottom:"10vh",left:"90vw"}}>floating</button>
      <Plan />
      <Category />
      <Class />
      <Teacher />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
