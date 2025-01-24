import React from "react";
import "./CSS/MatchCard.css";
import mlog from "../Images/football.png";

const MatchCard = ({ homeTeam, awayTeam, date, time, homeLogo, awayLogo }) => {
  return (
    <div className="match-card">
      <div className="match-header">
        <div className="team">
          <img src={mlog} alt={`${homeTeam} logo`} className="team-logo" />
          <span className="team-name">{homeTeam}</span>
        </div>
        <div className="match-info">
          <span className="match-date">{date}</span>
          <span className="match-time">{time}</span>
        </div>
        <div className="team">
          <img src={mlog} alt={`${awayTeam} logo`} className="team-logo" />
          <span className="team-name">{awayTeam}</span>
        </div>
      </div>
      <button className="join-game-btn">Join Game</button>
    </div>
  );
};

export default MatchCard;
