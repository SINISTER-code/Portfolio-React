import "./intro.css";
import React from "react";
import Me from "../../img/1.jpg";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-right">
        <div className="intro-background"></div>
        <img src={Me} alt="" className="intro-image" />
      </div>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="hello">Hello, my name is </h2>
          <h1 className="name">Swapnil</h1>
          <div className="intro-title">
            <div className="intro-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Graphic Desginer</div>
              <div className="intro-title-item">Content creator</div>
              <div className="intro-title-item">Pen-tester</div>
            </div>
          </div>
          <div className="intro-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint qui
            maxime. Consectetur labore dolore ex sit, ipsam aut quae fugiat
            adipisci, nobis obcaecati nesciunt est numquam rerum alias
            perferendis.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
