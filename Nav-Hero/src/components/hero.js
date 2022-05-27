import React from "react";
import heroImage from "./doctor.png";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>We Care About Your Health</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum
          </p>
          <a className="btn" href="#">
            Get our Service now
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
