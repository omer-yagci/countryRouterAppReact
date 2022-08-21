import React from "react";
import software from "../assests/software.jpg";
const About = () => {
  return (
    <section className="aboutContainer">
      <img className="aboutImage" src={software} alt="coding" />

      <h2>
        About Software Developer
        <span> Ömer Kağan YAĞCI</span>
      </h2>
      <article>
        <h1>I'm Ömer</h1>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p>
          I've already known JS,ReactJS,HTML,Css,Sass,Booststrap5,Material UI
        </p>
        <p>
          <span>Send email : </span>
          omeryagci3295@gmail.com
        </p>
      </article>
    </section>
  );
};

export default About;
