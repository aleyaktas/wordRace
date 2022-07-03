import React from "react";
import Text from "../../atoms/Text/Text";
import style from "./ScoreItem.style";

const ScoreItem = ({ score, className }) => {
  const styles = style();
  return (
    <div className={className} style={styles.container}>
      <Text text={score} font="InterSemiBold" color="#F3B948" />
    </div>
  );
};

export default ScoreItem;
