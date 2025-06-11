import React, { useEffect, useState } from 'react';
import './UniversityDetails.scss';
import img from '../../../assets/img/Frame.svg';
import Frame175 from "../../../assets/img/Frame 175.svg"
const UniversityDetails = () => {
  const [activeSection, setActiveSection] = useState('Description'); 
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
                <span>1986</span>
              </div>
              <div className="UniversityDetails--blocks__block--Type">
                <p>Type of programs:</p>
                <span>Bachelor Course, Magistracy</span>
              </div>
              <div className="UniversityDetails--blocks__block--Specialities">
                <p>Specialities:</p>
                <span>
                  Pre-university & Foundation, Foundation in Arts, Business & Accounting,
                  Communication, Computing & IT, Engineering, Medical & Health Sciences
                </span>
              </div>
              <div className="UniversityDetails--blocks__block--Language">
                <p>Language:</p>
                <span>English</span>
              </div>
            </div>
          </div>

          <div className="UniversityDetails--bottom">
            <a
              className={`Description ${activeSection === 'Description' ? 'active' : ''}`}
              onClick={() => setActiveSection('Description')}
            >
              Description
            </a>
            <a
              className={`Cost ${activeSection === 'Cost' ? 'active' : ''}`}
              onClick={() => setActiveSection('Cost')}
            >
              Cost
            </a>
            <a
              className={`Photo ${activeSection === 'Photo' ? 'active' : ''}`}
              onClick={() => setActiveSection('Photo')}
            >
              Photo
            </a>
          </div>

          {activeSection === 'Description' && (
            <div className="UniversityDetails--Description section">
              Description
            </div>
          )}

          {activeSection === 'Cost' && (
            <div className="UniversityDetails--Cost section">
              <p>
                <span>The cost of studying</span> at the Istituto Europeo di Design for the
                2023-2024 academic year:
              </p>
              <p>
                – Academic year (training) – from 1,566,000 rubles.
                <br />
                – Academic year (accommodation) – from 870,000 rubles.
              </p>
            </div>
          )}

          {activeSection === 'Photo' && (
            <div className="UniversityDetails--Photo section">
             <img src={Frame175} alt="img" />
             <img src={Frame175} alt="img" />
             <img src={Frame175} alt="img" />
             <img src={Frame175} alt="img" />
             <img src={Frame175} alt="img" />
             <img src={Frame175} alt="img" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
