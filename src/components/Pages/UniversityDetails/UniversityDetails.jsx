import React from 'react';
import "./UniversityDetails.scss"
import img from '../../../assets/img/Frame.svg'
const UniversityDetails = () => {
    return (
        <div id="UniversityDetails">
            <div className="container">
                <div className="UniversityDetails">
            <h1>INTI International University</h1>
                   <div className="UniversityDetails--blocks">
                   <img src={img} alt="img" />
                   <div className="UniversityDetails--blocks__block">
                    <div className="UniversityDetails--blocks__block--Location">
                        <p>Language:</p>
                        <span>Malaysia</span>
                    </div>
                    <div className="UniversityDetails--blocks__block--Date">
                           <p>Date of foundation:</p>
                           <span> 1986 </span>
                    </div>
                    <div className="UniversityDetails--blocks__block--Type">
                           <p>Type of programs:</p>
                           <span>Bachelor Course Magistracy</span>
                    </div>
                    <div className="UniversityDetails--blocks__block--Specialities">
                           <p>Specialities: </p>
                           <span>Pre-university & Foundation Foundation in Arts Business & Accounting Communication Computing & IT Engineering Medical & Health Sciences </span>
                    </div>
                    <div className="UniversityDetails--blocks__block--Language">
                           <p>Language:</p>
                           <span>english</span>
                    </div>
                   </div>
                   </div>
                   <div className="UniversityDetails--bottom">
                    <a>Description</a>
                    <a>Cost</a>
                    <a>Photo</a>
                    <div className="UniversityDetails--bottom__Description">
                        <h1>Description</h1>
                    </div>
                    <div className="UniversityDetails--bottom__Cost">
                        <h1>Cost</h1>
                    </div>
                    <div className="UniversityDetails--bottom__Photo">
                        <h1>Photo</h1>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default UniversityDetails;