import React from "react";
import Button from "../../atoms/Button/Button";
import PropTypes from "prop-types";
import style from "./QuestionItem.style";

const QuestionItem = ({ option, className, onClick, disabled }) => {
  const styles = style();
  return (
    <>
      <div style={styles.container}>
        <Button
          onClick={onClick}
          disabled={disabled}
          className={!disabled && "buttonHoverGold"}
          text={option}
          fontWeight="600"
          borderRadius="3.6rem"
          fontSize="1.8rem"
          letterSpacing="0.1rem"
          width="80%"
          height="6rem"
          buttonColor="#E9D8A6"
          padding="1rem 2rem"
          textPosition="center"
        />
      </div>
    </>
  );
};

// QuestionItem.propTypes = {
//   option: PropTypes.string,
// };
// QuestionItem.defaultProps = {
//   option: null,
// };

export default QuestionItem;
