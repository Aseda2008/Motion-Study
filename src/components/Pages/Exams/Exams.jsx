import React from "react";
import "./Exams.scss";
import img1 from "../../../assets/img/Rectangle 19.svg";


const Exams = () => {
  return (
    <section id="exams">
      <div className="container">
        <div className="exams">
          <div className="exams--top">
            <h1>exams</h1>
            <p>
              Exams are tests that assess a person's knowledge, skills,
              aptitude, or other qualifications in a specific subject or area of
              study. They are used to evaluate academic performance.
            </p>
          </div>
          <div className="exams--content">
            <div className="exams--content__left">
              <img src={img1} alt="" />
              <div className="exams--content__left--text">
                <h4>cambrige English exams</h4>
                <h3>Your path to learning English, step by step.</h3>
                <p>
                  Cambridge English Qualifications are in-depth exams that make
                  learning English enjoyable, effective and rewarding. Our
                  qualifications are based on research into effective teaching
                  and learning.
                </p>
                <div className="exams--content__left--text__btn">
                  <button>Discover more</button>
                </div>
              </div>
            </div>
            <div className="exams--content__right">
              <div className="exams--content__right--card">
                <img src={img1} alt="img" />
                <div className="exams--content__right--card__text">
                  <div className="exams--content__right--card__text--category">
                    <h3>aptis</h3>
                  </div>
                  <h1>Choose Aptis for your assessment needs</h1>
                  <p>
                    Aptis is a computer basedtest which provides fast results
                    reliably marked by our exsaminest.
                  </p>
                </div>
              </div>
              <div className="exams--content__right--card">
                <img src={img1} alt="img" />
                <div className="exams--content__right--card__text">
                  <div className="exams--content__right--card__text--category">
                    <h3>aptis</h3>
                  </div>
                  <h1>Choose Aptis for your assessment needs</h1>
                  <p>
                    Aptis is a computer basedtest which provides fast results
                    reliably marked by our exsaminest.
                  </p>
                </div>
              </div>
              <div className="exams--content__right--card">
                <img src={img1} alt="img" />
                <div className="exams--content__right--card__text">
                  <div className="exams--content__right--card__text--category">
                    <h3>aptis</h3>
                  </div>
                  <h1>Choose Aptis for your assessment needs</h1>
                  <p>
                    Aptis is a computer basedtest which provides fast results
                    reliably marked by our exsaminest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exams;