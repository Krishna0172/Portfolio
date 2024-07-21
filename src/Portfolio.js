import React from "react";
import "./Portfololio.css";
import richard from "./image1.png";
import images1 from "./images1.png";
import images2 from "./images2.png";
import images3 from "./images3.png";

const Portfolio = () => {
  return (
    <div className="content">
      <div className="header">
        <img className="logo" src={richard} alt="Logo" />
        <p className="logo-moto">GIVE POWER TO THE PIXEL</p>
        <div className="profile">
          <h1>
            I<span className="hypen">'</span>M  
            SHAIJU RICHARD
            <span className="hypen_2">.</span>
          </h1>
          <p>UI & GRAPHICS DESIGNER</p>
        </div>
      </div>
      <div className="center">
        <div className="box">
          <img className="logo" src={richard} alt="Logo" />
          <p className="logo-moto">GIVE POWER TO THE PIXEL</p>
          <p className="bio">
            Peoples find expert designers to complete their work and I am an
            expert designer to complete all types of work. I have the experience
            to design high-quality business cards, logos, and social media
            posts.If you have any type of design related work , I am here for
            you to get quality work at a minimum time and affordable price. I
            satisfy my client to give them quality and professional work.If you
            have any work related to photo editing like photo retouching,
            removing background, editing brightness, editing contrast, changing
            cloth color, and many other things we complete and give you
            surprising results.
          </p>
          <button className="button">DOWNLOAD RESUME</button>
        </div>
      </div>

      <div className="bottom">
        <h1>01 PROFESSIONAL</h1>
        <h3>MY KNOWLEDGE LEVEL IN SOFTWARE</h3>

        <div className="bars">
          <div className="bar">
            <p className="skills">PHOTOSHOP</p>
            <p className="skills">FIGMA</p>
            <p className="skills">ILLUSTRATOR</p>
            <p className="skills">COREL DRAW</p>
            <p className="skills">INDESIGN</p>
            <p className="skills">CANVA</p>
            <p className="skills">CAPCUT PC</p>
          </div>
          <div className="bar">
            <p className="bar1"></p>
            <p className="bar2"></p>
            <p className="bar3"></p>
            <p className="bar4"></p>
            <p className="bar5"></p>
            <p className="bar6"></p>
            <p className="bar7"></p>
          </div>
          <div className="bar">
            <p className="percentage">95%</p>
            <p className="percentage">85%</p>
            <p className="percentage">95%</p>
            <p className="percentage">85%</p>
            <p className="percentage">80%</p>
            <p className="percentage">85%</p>
            <p className="percentage">95%</p>
          </div>
        </div>

        <h1>02 PORTFOLIO</h1>
        <h3>MY LATEST WORKS </h3>
        <div className="image-container">
          <img src={images1} alt="logo" />
          <div className="image-container2">
            <img src={images2} alt="Image2" />
            <img src={images3} alt="Image3" />
          </div>
        </div>
      <div className="educations">
        <h1>03 EDUCATION</h1>
        <div className="education_1">
          <p className="dot">
            <p className="dot_line"></p>
          </p>
          <div className="education1">
            <p className="year">2015-2016</p>
            <p>SSLC</p>
            <p>Sacred heart matriculation school,</p>
            <p>Neyveli-607802.</p>
          </div>
        </div>
        <div className="education_2">
          <p className="dot"></p>
          <div className="education2">
            <p className="year">2017-2018</p>
            <p>HSC</p>
            <p>Vetri Vikaas matric hr sec school,</p>
            <p>Rasipuram-641652.</p>
          </div>
        </div>
        <div className="education_3">
          <p className="dot"></p>
          <div className="education3">
            <p className="year">2018-2021</p>
            <p>BCOM COMPUTER APPLICATION</p>
            <p>Muthayammal college of arts & science,</p>
            <p>Rasipuram-637408.</p>
          </div>
        </div>
        <div className="education_4">
          <p className="dot"></p>
          <div className="education4">
            <p className="year">2021-2023</p>
            <p>MSC VISUAL COMMUNICATION</p>
            <p>Hindustan college of arts & science,</p>
            <p>Coimbatore-641028.</p>
          </div>
        </div>

        <div className="education_5">
          <p className="dot"></p>
          <div className="education5">
            <p className="year">2023-2024</p>
            <p>MASTER IN GRAPHICS DESIGN</p>
            <p>Adoro Institute of Multimedia</p>
            <p>Coimbatore - 641012.</p>
          </div>
          <p className="dot"></p>
        </div>
      </div>


        <img className="logo_2" src={richard} alt="Logo" />
        <p className="contact">Contact</p>
        <p className="contact">Mail id: shaijurichard@gmail.com</p>
      </div>
    </div>
  );
};

export default Portfolio;
