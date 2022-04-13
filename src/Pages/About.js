import React from "react";
import aboutImage from "../images/aboutImage.jpg";
import "../STYLES/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>

      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          omnis corrupti. Ex animi, esse sint illum quia nam enim odio qui vero
          culpa libero itaque at quisquam in fugiat odit sit iure ea vel
          tempora? Excepturi in repudiandae possimus iure, culpa fugit magnam
          dolores sapiente, corrupti reprehenderit provident rem perspiciatis et
          placeat quam minus non saepe aperiam, repellendus ex molestiae animi
          ullam. Laborum, officia ipsam qui mollitia molestiae, odit ab, itaque
          autem harum cupiditate enim deserunt sunt soluta.
        </p>
      </div>
    </div>
  );
}

export default About;
