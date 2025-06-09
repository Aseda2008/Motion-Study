import React, { useEffect, useState } from 'react';
import "./Best.scss"
import ourFriends from "../../../assets/img/aboutMe-3 1.svg"
import Partners from "../../../assets/img/Frame 71.svg"
import axios from 'axios';
const Best = () => {
    const [data,setData] = useState([])
    async function getData(){
        let res = await axios(`/api/en/home_info/`)
      setData(res.data)
    }
    useEffect(() => {
        getData()
    },[])
    console.log(data,"h");
    
    return (
      <div id="Best">
        <div className="container">{
            data.map((el) => (
                            <div className="Best">
                <div className="Best--left">
                    <h1>This is why we are  <br />
best from others</h1>
<p>{el.description}</p>
 <img src={el.image} alt="img" />
                </div>
                <div className="Best--rigth">
                    <div className="Best--rigth__block">
                        <img src={Partners} alt="img" />
                        <h3>{el.info_cards[0].title}</h3>
                        <p>{el.info_cards[0].description}</p>
                    </div>
                       <div className="Best--rigth__block">
                        <img src={Partners} alt="img" />
                        <h3>{el.info_cards[1].title}</h3>
                        <p>{el.info_cards[1].description}</p>
                    </div> 
                      <div className="Best--rigth__block">
                        <img src={Partners} alt="img" />
                        <h3>{el.info_cards[2].title}</h3>
                        <p>{el.info_cards[2].description}</p>
                    </div>  
                     <div className="Best--rigth__block">
                        <img src={Partners} alt="img" />
                      <h3>{el.info_cards[3].title}</h3>
                        <p>{el.info_cards[3].description}</p>
                    </div>
                </div>
            </div>
            ))
        }
        </div>
      </div>
    );
};

export default Best;