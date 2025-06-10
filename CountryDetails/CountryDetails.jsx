import React from 'react';
import "./CountryDetails.scss"
import img from "../../../../assets/img/IICS.svg"
import { BsGeoAlt } from 'react-icons/bs';
import { GoChevronDown } from 'react-icons/go';
import { useParams } from 'react-router-dom';
const Details = () => {
    const {CountryId} = useParams()
    return (
        <div id="Details">
            <div className="container">
                <div className="Details">
                    <h1>United Stated</h1>
                            <div className="Details--select">
                            <h2>Higher Education <a><GoChevronDown /></a></h2>
                            <h2>specialization <a><GoChevronDown/></a></h2>
                            <h2>Сountries <a><GoChevronDown /></a></h2>
                            </div>
                    <div className="Details--blocks">
                        <div className="Details--blocks__block">
                        <img src={img} alt="img" />
                       <div className="Details--blocks__block--text">
                       <div className="Details--blocks__block--text__top">
                        <p>Name: </p>
                        <h3>Solbrige University</h3>
                       </div>
                       <div className="Details--blocks__block--text__center">
                        <p>Location <BsGeoAlt  /> </p>
                          <h2>Perth</h2>
                       </div>
                       <div className="Details--blocks__block--text__buttom">
                        <p>Age: </p>
                        <h2>From 16</h2>
                       </div>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;