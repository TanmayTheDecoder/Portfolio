import React from "react";
import "./about.css";
import CommonBackground from "../../components/CommonBackground";
import Cubes from "../../components/Cubes";
const About = () => {
  const ResumeData = {
    filePath : require('../about/Resume.pdf'),
    alt : 'file not found'
  }

  const aboutBtnFunction = (e) => {
    const aboutBtn = document.getElementById('about-btn');
    return function () {
      aboutBtn.addEventListener('click', () => {
        e.preventDefault();
      })
    }
  }
  return (
    <div className="about-container w-100">
      <CommonBackground />
      <div className="about-inner w-100 h-100p flex-centered">
        <div className="about-contents w-80">
          <div className="about-contents-inner w-100 flex-column-space">
            <div className="about-title w-100 flex-column-start">
              Glance inside me...
            </div>
            <div className="about-description flex-column-start">
              Hi, I'm Tanmay , a MERN stack web developer. I'm proficient in
              React js, HTML 5, CSS 3, JavaScript, Bootstrap, Express js, Node js, MongoDB, C,
              C++. I'm passionate about building great web applications that
              solve real-world problems. I'm a hard worker and am always willing
              to go the extra mile. I'm also a great communicator and am able to
              work effectively with both clients and team members. If you're
              looking for a talented and experienced MERN stack web developer,
              I'm the perfect candidate. I'm confident that I can use my skills
              and experience to make a positive impact on the world.
              <div className="download-cv">
                <button className="btn enlarge" onClick={aboutBtnFunction} id="about-btn">
                  <a href={ResumeData.filePath} download>
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
            <div className="development-cubes w-100">
              <Cubes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
