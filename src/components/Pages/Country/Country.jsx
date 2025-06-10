  import React, { useEffect, useState } from 'react';
  import "./Country.scss";
  import { GoChevronDown } from 'react-icons/go';
  import { Link } from 'react-router-dom';
  import axios from 'axios';

  const Country = () => {
    const [country, setCountry] = useState([]);

    async function getData() {
        const res = await axios.get('http://13.61.25.99/en/country/');
        setCountry(res.data);
    }

    useEffect(() => {
      getData();
    }, []);

    console.log(country);

    return (
      <div id="Country">
        <div className="container">
          <div className="Country">
            {country.map((el) =>(
              <>
              <h1>{el.title}</h1>
  <div className="Country--select">
                            <h2>Higher Education <a><GoChevronDown /></a></h2>
                            <h2>specialization <a><GoChevronDown/></a></h2>
                            <h2>Сountries <a><GoChevronDown /></a></h2>
  </div>
  <div className="Country--block">
    <div className="Country--block__country">
      <img src={el.countries.country} alt="img" />
      {el.countries.map((country) => (
  <Link to={`/countrydetails/${el.id}`}><p key={country.id}>{country.location.country_name}</p></Link>
  ))}
    </div>
  </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  };
export default Country;
