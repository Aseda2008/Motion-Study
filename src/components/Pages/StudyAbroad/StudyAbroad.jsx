import React, { useEffect, useState } from 'react';
import "./StudyAbroad.scss";
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudyAbroad = () => {
  const [country, setCountry] = useState(null);

  async function getData() {
    try {
      const res = await axios.get('http://13.61.25.99/en/country/1/');
      setCountry(res.data);
    } catch (error) {
      console.error("Маалымат алуу учурунда ката:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(country);

  return (
    <div id="StudyAbroud">
      <div className="container">
        <div className="StudyAbroud">
          {country && (
            <>
              {/* 1️⃣ Өлкөнүн аталышы */}
              <h1>{country.location.country_name}</h1>

              {/* 2️⃣ Тандоо */}
              <div className="StudyAbroud--select">
                <h2>Программалар <a><GoChevronDown /></a></h2>
                <h2>Адистиктер <a><GoChevronDown /></a></h2>
                <h2>Тилдер <a><GoChevronDown /></a></h2>
              </div>

              {/* 3️⃣ Фотолор */}
              <div className="StudyAbroud--photos">
                {country.country_photos.map((photo) => (
                  <div key={photo.id} className="StudyAbroud--photos__item">
                    <img src={photo.country_photos} alt="University" />
                  </div>
                ))}
              </div>

              {/* 4️⃣ Программалар */}
              <div className="StudyAbroud--programs">
                <h3>Программалар:</h3>
                <ul>
                  {country.program_type.map((program) => (
                    <li key={program.id}>{program.program}</li>
                  ))}
                </ul>
              </div>

              {/* 5️⃣ Адистиктер */}
              <div className="StudyAbroud--specialities">
                <h3>Адистиктер:</h3>
                <ul>
                  {country.speciality.map((spec) => (
                    <li key={spec.id}>{spec.speciality_name}</li>
                  ))}
                </ul>
              </div>

              {/* 6️⃣ Тилдер */}
              <div className="StudyAbroud--languages">
                <h3>Тилдер:</h3>
                <ul>
                  {country.language.map((lang) => (
                    <li key={lang.id}>{lang.language_ky}</li>
                  ))}
                </ul>
              </div>

              {/* 7️⃣ Өлкө тууралуу маалымат */}
              <div className="StudyAbroud--descriptions">
                {country.country_descriptions.map((desc) => (
                  <p key={desc.id}>{desc.description}</p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
