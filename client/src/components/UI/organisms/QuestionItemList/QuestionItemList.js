import React from "react";
import PropTypes from "prop-types";
import QuestionItem from "../../molecules/QuestionItem/QuestionItem";
import style from "./QuestionItemList.style";

const QuestionItemList = ({ options }) => {
  const styles = style();
  return (
    <div style={styles.container}>
      {options.map((option) => (
        <QuestionItem option={option.text} />
      ))}
    </div>
  );
};

QuestionItemList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
};
QuestionItemList.defaultProps = {
  options: null,
};

export default QuestionItemList;
