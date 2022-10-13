import React from "react";
import Text from "../../atoms/Text/Text";
import style from "./ScoreItem.style";

const ScoreItem = ({ score, indexNumber, className, firstUser, secondUser }) => {
  const styles = style();
  return (
    <div>
      {firstUser.scoreIndex === indexNumber && secondUser.scoreIndex !== indexNumber && (
        <div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <img className="firstUser" src={firstUser.image} alt="profile" />

            <div className={className} style={styles.container}>
              <Text text={score} font="InterSemiBold" color="#F3B948" />
            </div>
            <div style={{ width: "3.6rem", height: "3.6rem" }} />
          </div>
        </div>
      )}
      {secondUser.scoreIndex === indexNumber && firstUser.scoreIndex !== indexNumber && (
        <div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "3.6rem", height: "3.6rem" }} />

            <div className={className} style={styles.container}>
              <Text text={score} font="InterSemiBold" color="#F3B948" />
            </div>
            <img className="secondUser" src={secondUser.image} alt="profile" />
          </div>
        </div>
      )}
      {firstUser.scoreIndex !== indexNumber && secondUser.scoreIndex !== indexNumber && (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "3.6rem", height: "3.6rem" }} />
          <div className={className} style={styles.container}>
            <Text text={score} font="InterSemiBold" color="#F3B948" />
          </div>
          <div style={{ width: "3.6rem", height: "3.6rem" }} />
        </div>
      )}
      {firstUser.scoreIndex === indexNumber && secondUser.scoreIndex === indexNumber && (
        <div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <img className="firstUser" src={firstUser.image} alt="profile" />
            <div className={className} style={styles.container}>
              <Text text={score} font="InterSemiBold" color="#F3B948" />
            </div>
            <img className="secondUser" src={secondUser.image} alt="profile" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreItem;
