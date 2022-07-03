import React from "react";
import PropTypes from "prop-types";
import style from "./ScoreItemList.style";
import ScoreItem from "../../molecules/ScoreItem/ScoreItem";

const ScoreItemList = ({ scores }) => {
  const styles = style();
  return (
    <div>
      {scores.map((score) => (
        <ScoreItem score={score} />
      ))}
    </div>
  );
};

ScoreItemList.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.object),
};
ScoreItemList.defaultProps = {
  scores: null,
};

export default ScoreItemList;