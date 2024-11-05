import React from "react";
import "./Hero.css";
import arti_image from "../../assets/arti_image.jpeg";
const Hero = () => {
  return (
    <div className="hero">
      <img className="arti-image" src={arti_image} alt="profile Image" />
      <h1>
        <span>I am Arti Patil,</span> frontend developer in India.
      </h1>
      <p>
        Having 4+ Years of Experience in Frontend Development using JavaScript,
        ReactJS, Redux and web designing including HTML, CSS, Bootstrap and
        Material UI.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me.</div>
        <div className="hero-resume">My Resume.</div>
      </div>
    </div>
  );
};

export default Hero;
