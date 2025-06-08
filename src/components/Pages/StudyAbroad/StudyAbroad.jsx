import React from 'react';
import "./StudyAbroad.scss"
import img1 from "../../../assets/img/image 98.svg"
import img2 from "../../../assets/img/image 1.svg"
import img3 from "../../../assets/img/image 2.jpg"
import { GoChevronDown } from 'react-icons/go';
const StudyAbroad = () => {
    return (
      <div id="StudyAbroud">
        <div className="container">
            <div className="StudyAbroud">
        <h1>Choose the country</h1>
                        <div className="StudyAbroud--select">
        <h2>Higher Education <a><GoChevronDown /></a></h2>
        <h2>specialization <a><GoChevronDown /></a></h2>
        <h2>Сountries <a><GoChevronDown /></a></h2>
        </div>
        <div className="StudyAbroud--block">
            <div className="StudyAbroud--block__country">
             <img src={img1} alt="img" />
             <p>America</p>
            </div>
            <div className="StudyAbroud--block__country">
             <img src={img2} alt="img" />
             <p>Singapure </p>
            </div>
            <div className="StudyAbroud--block__country">
             <img src={img3} alt="img" />
             <p>Malaysia</p>
            </div>
        </div>
        </div>
            </div>
        </div>
    );
};

export default StudyAbroad;