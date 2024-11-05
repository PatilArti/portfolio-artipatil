import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arti_full_image from "../../assets/arti_full_image.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="About me" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="profile_image" src={arti_full_image} alt="Profile image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Having 4+ Years of Experience in Frontend Development using
              JavaScript, ReactJS, Redux and web designing including HTML, CSS,
              Bootstrap and Material UI.
            </p>
            <p>
              {" "}
              My passion for frontend development is not only reflected in my
              extensive experience but also in my work.
            </p>
            <p>
              Frontend Languages: JavaScript, Html5, CSS3, GraphQL, ES6,
              Frameworks: ReactJS, Redux CSS Frameworks: Bootstrap, Material UI
              Server Side: NodeJS Database: MySQL Task & Project Management:
              Git, Tools: Visual Studio Code, GitHub Desktop, Figma, BitBucket,
              Insomnia, PostMan, Jira
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript/ES6</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Redux</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap, Material UI</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>NodeJS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <hr/>
        <div className="about-achievement">
            <h1>4 +</h1>
            <p> YEARS OF EXPERIENCE</p>
        </div><hr/>
        <div className="about-achievement">
            <h1>4 +</h1>
            <p> Projects completed</p>
        </div><hr/>
      </div>

    </div>
  );
};

export default About;
