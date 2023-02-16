import React from "react";
import PropTypes from "prop-types";
import ScoreItem from "../../molecules/ScoreItem/ScoreItem";

const ScoreItemList = ({ firstUser, secondUser }) => {
  const scores = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000].reverse();
  return (
    <div>
      {scores.map((score, index) => (
        <ScoreItem indexNumber={10 - index} score={score} firstUser={firstUser} secondUser={secondUser} />
      ))}
    </div>
  );
};

export default ScoreItemList;
