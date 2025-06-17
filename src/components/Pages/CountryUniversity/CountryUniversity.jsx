import React, { useEffect, useState } from 'react';
import "./CountryUniversity.scss"
import img from "../../../assets/img/IICS.svg"
import { BsGeoAlt } from 'react-icons/bs';
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';
import axios from 'axios';
const CountryUniversity = () => {
      const [universitydata,setUniversityData] = useState([])
   async function getUniversityData() {
const res = await axios("http://13.61.25.99/en/university/");
      setUniversityData(res.data);
  }
  console.log(universitydata,9);
  useEffect(() => {
    getUniversityData()
  },[])
    return (
        <div id="CountryUniversity">
            <div className="container">
                {
                    universitydata.map((el) => (
                        <div className="CountryUniversity">
                    <h1>{el.location.country_name}</h1>
                                            <div className="CountryUniversity--select">
                            <h2>Higher Education <a><GoChevronDown /></a></h2>
                            <h2>specialization <a><GoChevronDown/></a></h2>
                            <h2>Сountries <a><GoChevronDown /></a></h2>
                            </div>
                    <div className="CountryUniversity--blocks">
                        <div className="CountryUniversity--blocks__block">
                        <img src={img} alt="img" />
                       <div className="CountryUniversity--blocks__block--text">
                       <div className="CountryUniversity--blocks__block--text__top">
                        <p>Name: </p>
                        <Link to={`/countryuniversity`}><h3>Solbrige University</h3></Link>
                       </div>
                       <div className="CountryUniversity--blocks__block--text__center">
                        <p>Location <BsGeoAlt  /> </p>
                          <h2>Perth</h2>
                       </div>
                       <div className="CountryUniversity--blocks__block--text__buttom">
                        <p>Age: </p>
                        <h2>From 16</h2>
                       </div>
                       </div>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CountryUniversity;