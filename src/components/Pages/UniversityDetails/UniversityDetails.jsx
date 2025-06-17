import React, { useEffect, useState } from 'react';
import './UniversityDetails.scss';
import Frame175 from "../../../assets/img/Frame 175.svg"
import imginit from "../../../assets/img/init.svg"
import image1 from "../../../assets/img/image 102.svg"
import image2 from "../../../assets/img/image 104.svg"
import WhatsApp from "../../../assets/img/WhatsApp.svg"
import instagram from "../../../assets/img/Group 21.svg"
import telegram from "../../../assets/img/Group 24.svg"
import WARNING from "../../../assets/img/WARNING.svg"
import axios from 'axios';
const UniversityDetails = () => {
  const [activeSection, setActiveSection] = useState('Description'); 
  const [data,setData] = useState([])
  const [universitydata,setUniversityData] = useState([])
  async function getData() {
const res = await axios("http://13.61.25.99/en/university_photo/");
      setData(res.data);
  }
   async function getUniversityData() {
const res = await axios("http://13.61.25.99/en/university/");
      setUniversityData(res.data);
  }
  console.log(universitydata,9);

  useEffect(() => {
    getData()
    getUniversityData()
  },[])
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="UniversityDetails">
      <div className="container">
        <div className="UniversityDetails">
          <h1>INTI International University</h1>
          <div className="UniversityDetails--blocks">
            <img src={imginit} alt="img" />
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
        <div className="UniversityDetails--Description__blocks">
        <div className="UniversityDetails--Description__blocks--block">
          <img src={imginit} alt="img" />
          <p>INTI International University</p>
        </div>
        <div className="UniversityDetails--Description__blocks--block">
                <h2>Nominal duration: </h2>
          <p>4.5 years(240 ECTS)</p>
        </div>
                <div className="UniversityDetails--Description__blocks--block">
                <h2>Awards:</h2>
          <p><span>B.Sc.</span> (Professional Bachelor’s <br />
          degree in Business <br />
          Management, qualification: <br />
          Business Manager or E- <br />
          Business Manager)</p>
        </div>
       <div className="line"></div>
                       <div className="UniversityDetails--Description__blocks--block">
                <h2>Tuition fee:</h2>
          
          <div className="UniversityDetails--Description__blocks--block__text">
          <p><span>€1,400</span> per semester <br />
           <span> US$1</span>,502.87</p>

          </div>
           
        </div>
        <div className="UniversityDetails--Description__blocks--block">
                <h2>Application <br />
                fee:</h2>
          <div className="UniversityDetails--Description__blocks--block__text">
         <p><span>€120</span> one-time <br />
US$128.83</p>
          </div>
           
        </div>
               <div className="UniversityDetails--Description__blocks--block">
                <h2>Registration <br />
                fee:</h2>
        <p>US$150 one-time
          <br />
          <br />
You need to choose student status: <br />
Base – <span>150 USD</span> <br />
Standard –<span> 500 USD</span> <br />
VIP – <span>900 USD</span>
         </p>
           
        </div>
               <div className="line"></div>
        <div className="UniversityDetails--Description__blocks--block">
                <h2>Tuition fee:</h2>
          <div className="UniversityDetails--Description__blocks--block__text">
          <h3>High school / secondary <br />
          education (or higher)</h3>
         <p>Completed Secondary <br />
         Education ( 12 years, in some <br />
         countries 11 years) <br />
         </p>
          </div>
           
        </div>
       <div className="UniversityDetails--Description__blocks--block">
                <h2>Entry <br />
                qualication:</h2>
         <p>The entry qualification <br />
         documents are accepted in <br />
         the following languages: <br />
         English / Lithuanian.Often you <br />
         can get a suitable transcript <br />
         from your school. If this is not <br />
         the case, you will need official <br />
         translations along with <br />
         verified copies of the original.
         </p>
           
        </div>
        </div>
          <div className="UniversityDetails--Description__apply">
          <div className="UniversityDetails--Description__apply--block">
            <h2>Apply Now!!! <span>Fall semester 2023</span></h2>
          </div>
          <div className="UniversityDetails--Description__apply--card">
            <img src={image1}alt="img" />
            <div className="UniversityDetails--Description__apply--card__text">
              <h2>Pre-deadline</h2>
              <p>20 Jun 2023, 23:59:59Eastern <br />
              European Time</p>
              <p>Pre-deadline
20 Jun 2023, 23:59:59Eastern European Time
Please ask your manager in <br />
Baltic Center about correct <br />
deadline for your country</p>
            </div>
          </div>
          <div className="UniversityDetails--Description__apply--card">
                      <img src={image1}alt="img" />
                          <div className="UniversityDetails--Description__apply--card__text">
              <h2>Application deadline</h2>
              <p>31 Aug 2023, 23:59:59Eastern <br />
              European Time</p>
              <p>
Autumn Intake</p>
            </div>
          </div>
          <div className="UniversityDetails--Description__apply--card">
                      <img src={image2}alt="img" />
                          <div className="UniversityDetails--Description__apply--card__text">
              <h2>Studies commence</h2>
              <p>4 Sept 2023</p>
              <p>
Autumn Intake</p>
            </div>
          </div>
          <div className="UniversityDetails--Description__apply--block">
            <h2>Apply Now!!! <br />
            <span>Spring semester 2023</span></h2>
          </div>
          <div className="UniversityDetails--Description__apply--ended">
          <img src={WARNING} alt="img" />
            <h3>Application period has ended</h3>
          </div>
          <div className="UniversityDetails--Description__apply--card">
                      <img src={image2}alt="img" />
                          <div className="UniversityDetails--Description__apply--card__text">
              <h2>Studies commence</h2>
              <p>6 Feb 2023</p>
            </div>
          </div>
          </div>
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
            {
              data.map((el) => (
                 <img src={el.university_photos}alt="img" />
              ))
            }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
