import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AboutUs.scss"
const AboutUs = () => {
  const [about, setAbout] = useState([]);

  async function getAbout() {
    let res = await axios(`http://13.61.25.99/en/about/`);
    setAbout(res.data);
  }
  console.log(about, "about");

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div id="aboutUs"> 
      <div className="container"> 
        <div className="aboutUs">
          <div className="aboutUs--block">
            {about.map((el) => ( 
              <img key={el.id} src={el.image} alt={el.title} />
            ))}
          </div>
          <div className="aboutUs--title">
            {about.map((el) => (
              <div className="aboutUs--title__text">
                <h1>{el.label}</h1>
                <h2>{el.title}</h2>
                <h3>{el.text}</h3>
                <p>{el.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;