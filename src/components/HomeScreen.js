import React, { useEffect } from "react";
import M from "materialize-css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";

const HomeScreen = () => {
  useEffect(() => {
    let elems = document.querySelectorAll(".slider");

    let instances = M.Slider.init(elems, {
      height: 700,
      indicators: false,
      interval: 1000,
    });
  });

  return (
    <>
      <div className="slider">
        <ul className="slides">
          <li>
            <img src={img1} />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={img2} />
            {img1}
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={img3} />
            {img1}
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src={img4} />
            {img1}
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
        </ul>
      </div>
      {/* <img src="https://www.pexels.com/photo/person-holding-baby-s-feet-2456327/" /> */}
      <h1 className="flow-text section-heading">Our Offerings</h1>
      <Section />
      <Section2 />
      <Section3 />
    </>
  );
};

export default HomeScreen;
