import React, { useEffect, useState } from 'react';
import "./MotionStudy.scss"
import Study from "../../../assets/img/homeimg.svg"
import group2 from "../../../assets/img/Group 2.svg"
import group1 from "../../../assets/img/Group 1.svg"
import axios from 'axios';
import  scrollArrow  from "../../../assets/img/arrows.mp4"

const MotionStudy = () => {
 const [data, setData] = useState([]);
async function getData() {
  try {
const res = await axios('/api/en/home/');
    console.log("Response:", res.data);
    setData(res.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
    useEffect(() => {   
        getData();
    }, []);

    return (
       <div id="Study">
        <div className="container">
            <div className="Study">
            {
                data.map((el) => (
                    <>
                           <div className="Study--block">
                 <div className="Study--block__left">
                 <h3>EXPLORE THE WORLD</h3>
                    <h1>{el.title}</h1>
                    <p>{el.description}</p>
                    <video
  className="scroll-arrow"
  src={scrollArrow}
  autoPlay
  loop
  muted
  playsInline
  width="60"
/>

                </div>
                <div className="Study--block__rigth">
                    <img src={Study} alt="img" className='bg'/>
                    <img src={el.image2} alt="img" className='Ellipse4'/>
                    <img src={el.image1} alt="img" className='Ellipse6'/>
                    <img src={el.image4} alt="img" className='Ellipse7'/>
                    <img src={el.image3} alt="img" className='Ellipse5'/>
                </div>
               </div>
               <div className="Study--contact">
                <div className="Study--contact__name">
                    <img src={group2} alt="img" />
                    <div className="Study--contact__name--text">
                        <p>NAME </p>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                </div>
                <div className="Study--contact__phone">
                    <img src={group1} alt="img" />
                    <div className="Study--contact__phone--text">
                        <p>PHONE</p>
                        <input type="text" placeholder='Enter your phone' />
                    </div>
                </div>
                <button>Contact</button>
               </div>
                    </>
                ))
            }
            </div>
        </div>
       </div>
    );
};

export default MotionStudy;
