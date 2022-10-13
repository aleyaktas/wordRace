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
{
  /* {scores.reverse().map((score) => (

  {score === scores[firstUser.scoreIndex] ? (
      <div style={{ display: "flex" }}>
      <div style={{ width: "5rem", height: "4rem", overflow: "hidden" }}>
        <img className="firstUser" src={firstUser.image} alt="profile" />
      </div>
    <ScoreItem score={score} />
    </div>
    ) : (<ScoreItem score={score} />) } 
))} */
}

// {firstUser. === 0 && (
//   <div style={{ width: "5rem", height: "5rem", overflow: "hidden" }}>
//     <img className="firstUser" src={firstUserImg} alt="profile" />
//     {/* <img className="secondUser" src={secondUserImg} alt="profile" /> */}
//   </div>
// )}
// ScoreItemList.propTypes = {
//   scores: PropTypes.arrayOf(PropTypes.object),
// };
// ScoreItemList.defaultProps = {
//   scores: null,
// };

export default ScoreItemList;
