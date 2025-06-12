import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Team.scss"

const Team = () => {
  let [team, setTeam] = useState([]);

  async function getTeam() {
    let res = await axios(`http://13.61.25.99/en/team/`);
    setTeam(res.data);
  }
  console.log(team, "team");

  useEffect(() => {
    getTeam();
  }, []);
  return (
    <div id="team">
      <div className="container"> 
        <div className="team">
          {team.map((el) => (
            <div className="team--block" key={el.id}>
              <h1>{el.title}</h1>
              <div className="team--block__cards">
                {el.team_members.map((member) => (
                  <div className="team--block__cards--card" key={member.id}>
                    <img src={member.profile_image} alt={member.name} />
                    <h2>{member.name}</h2>
                    <p>{member.info}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;