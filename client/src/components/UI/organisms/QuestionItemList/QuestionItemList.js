import React from "react";
import QuestionItem from "../../molecules/QuestionItem/QuestionItem";
import PropTypes from "prop-types";
import "./style.css";
import style from "./QuestionItemList.style";

const QuestionItemList = ({ options, onClick }) => {
  const styles = style();
  return (
    <div style={styles.questionList}>
      <QuestionItem option={options.a} onClick={() => onClick("a")} />
      <QuestionItem option={options.b} onClick={() => onClick("b")} />
      <QuestionItem option={options.c} onClick={() => onClick("c")} />
      <QuestionItem option={options.d} onClick={() => onClick("d")} />
    </div>
  );
};
// QuestionItemList.propTypes = {
//   options: PropTypes.array,
// };
// QuestionItemList.defaultProps = {
//   options: null,
// };

export default QuestionItemList;
