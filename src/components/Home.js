import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Category from "./Body/Category/Category";
import Blog from "./Body/Blog/Blog";
import Class from "./Body/Class/Class";
import Plan from "./Body/Plan/Plan";
import Explore from "./Body/Explore/Explore";
import Teacher from "./Body/Teacher/Teacher";
import Tooltip from "@mui/material/Tooltip";

const Home = () => {
  // Function to handle smooth scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth behavior
    });
  };

  return (
    <div style={{ marginLeft: "10%", marginRight: "10%"}}>
      <Header />
      <Body />
      <Explore />
      <Plan />
      <Category />
      <Class />
      <Teacher />
      <Blog />

      {/* Go to top button */}
      <Tooltip title="Go To Top" placement="bottom-start">
        <button onClick={handleScrollToTop} style={{ float: "right", margin: "10px", border: "none", background: "transparent", cursor: "pointer" }}>
          <i
            className="fa-solid fa-circle-chevron-right fa-rotate-270 fa-2xl"
            style={{
              color: "#2430A0",
            }}
          />
        </button>
      </Tooltip>
      <Footer />
    </div>
  );
};

export default Home;
