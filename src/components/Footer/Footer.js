import React from "react";
import './footer.css';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import img from "../../images/products.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner1">
        <div>
          <p>Class Category</p>
          <h6>Language</h6>
          <h6>Cooking</h6>
          <h6>Music</h6>
          <h6>Arts & Craft</h6>
          <h6>Yoga</h6>
          <h6>Academic</h6>
          <h6>Back To Roots</h6>
          <h6>Funteresting</h6>
        </div>
        <div>
          <p>Company</p>
          <h6>About</h6>
          <h6>Careers</h6>
          <h6>Blog</h6>
          <h6>Contact</h6>
          <h6>Privacy Policy</h6>
          <h6>Terms & Conditions</h6>
          <h6>Refund Policy</h6>
        </div>
        <div>
          <p>Learn</p>
          <h6>All Classes</h6>
        </div>
        <div>
          <p>Tech</p>
          <h6>Become A Teacher</h6>
        </div>
        <div class="card" >
          <img src={img} class="card-img" alt="..." />
        </div>
      </div>
        <hr />
      <div className="footer-inner2">
        <div>
            @ Project 2023 All rights reseverd.
        </div>
        <div>
            Made with ❤️ SimplePlan
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/" target="blank">
            <BsFacebook style={{color:"#3b5998"}} />
          </a>
          <a href="https://twitter.com/" target="blank">
            <BsTwitter style={{color:"#00acee "}} />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <BsInstagram style={{color:"#fa7e1e "}} />
          </a>
          <a href="https://github.com/" target="blank">
            <BsGithub style={{color:"#3b5998 "}} />
          </a>
          <a href="https://www.youtube.com/" target="blank">
            <BsYoutube style={{color:" #CD201F "}} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
