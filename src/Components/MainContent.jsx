import React, { useState } from "react";
import MatchCard from "./MatchCard";
import "./CSS/MainContent.css";
import { data } from "./data";
const MainContent = ({ query }) => {
  const matchDetails = data();

  const [filter, setFilter] = useState("Live");

  const filteredMatches = matchDetails
    .filter((match) => match.status === filter)
    .filter((match) =>
      query
        ? match.homeTeam.toLowerCase().includes(query) ||
          match.awayTeam.toLowerCase().includes(query)
        : true
    );
// console.log(filteredMatches);
  const groupedMatches = filteredMatches.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = [];
    }
    acc[match.date].push(match);
    return acc;
  }, {});

  return (
    <div className="main-content">
      <div className="filter-buttons">
        <button
          className={`filter-button ${filter === "Live" ? "active" : ""}`}
          onClick={() => setFilter("Live")}
        >
          Live
        </button>
        <button
          className={`filter-button ${filter === "Upcoming" ? "active" : ""}`}
          onClick={() => setFilter("Upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`filter-button ${filter === "Completed" ? "active" : ""}`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>

      <div className="matches-container">
        {Object.keys(groupedMatches).length > 0 ? (
          Object.keys(groupedMatches).map((date) => (
            <div key={date} className="date-group">
              <h3 className="match-date">{date}</h3>
              <div className="cards-group">
                {groupedMatches[date].map((match) => (
                  <MatchCard
                    key={match.id}
                    homeTeam={match.homeTeam}
                    awayTeam={match.awayTeam}
                    date={match.date}
                    time={match.time}
                    homeLogo={match.homeLogo}
                    awayLogo={match.awayLogo}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No matches available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
