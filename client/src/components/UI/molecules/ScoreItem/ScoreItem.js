import React from "react";
import Text from "../../atoms/Text/Text";
import style from "./ScoreItem.style";

const ScoreItem = ({ score, indexNumber, className, firstUser, secondUser }) => {
  const styles = style();

  return (
    <div>
      {firstUser.scoreIndex === indexNumber && secondUser.scoreIndex !== indexNumber && (
        <div>
          <div style={styles.container}>
            {firstUser.image ? (
              <img className="firstUser" src={firstUser.image} alt={firstUser.image} />
            ) : (
              <div
                className="firstUser"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", backgroundColor: " rgb(196, 196, 196)" }}
              >
                {firstUser.username.charAt(0)?.toUpperCase()}
              </div>
            )}

            <div className={className} style={styles.scoreContainer}>
              <Text text={score} font="InterSemiBold" color="#F3B948" />
            </div>
            <div style={{ width: "3.6rem", height: "3.6rem" }} />
          </div>
        </div>
      )}
      {secondUser.scoreIndex === indexNumber && firstUser.scoreIndex !== indexNumber && (
        <div>
          <div style={styles.container}>
            <div style={{ width: "3.6rem", height: "3.6rem" }} />
            <div className={className} style={styles.scoreContainer}>
              <Text text={score} font="InterSemiBold" color="#F3B948" />
            </div>

            {secondUser.image ? (
              <img className="secondUser" src={secondUser.image} alt={secondUser.image} />
            ) : (
              <div
                className="secondUser"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", backgroundColor: " rgb(196, 196, 196)" }}
              >
                {secondUser.username.charAt(0)?.toUpperCase()}
              </div>
            )}
          </div>
        </div>
      )}
      {firstUser.scoreIndex !== indexNumber && secondUser.scoreIndex !== indexNumber && (
        <div style={styles.container}>
          <div style={{ width: "3.6rem", height: "3.6rem" }} />
          <div className={className} style={styles.scoreContainer}>
            <Text text={score} font="InterSemiBold" color="#F3B948" />
          </div>
          <div style={{ width: "3.6rem", height: "3.6rem" }} />
        </div>
      )}
      {firstUser.scoreIndex === indexNumber && secondUser.scoreIndex === indexNumber && (
        <div>
          <div style={styles.container}>
            {firstUser.image ? (
              <div>
                <img className="firstUser" src={firstUser.image} alt={firstUser.image} />
              </div>
            ) : (
              <div
                className="firstUser"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", backgroundColor: " rgb(196, 196, 196)" }}
              >
                {firstUser.username.charAt(0)?.toUpperCase()}
              </div>
            )}

            <div className={className} style={styles.scoreContainer}>
              <Text text={score} font="InterSemiBold" color="#F3B948" />
            </div>
            {/* <div style={{ position: "relative" }}> */}
            {/* <div style={{ position: "absolute", bottom: "-1.5rem", left: "14rem" }}> */}
            {/* <div class="box sb3">
                  <p>flsdialfişas şgdflişgls şidgflsgis igdflşis</p>
                </div>
              </div> */}
            {/* <img className="secondUser" src={secondUser.image} alt="profile" /> */}
            {/* </div> */}

            {secondUser.image ? (
              <div>
                <img className="secondUser" src={secondUser.image} alt={secondUser.image} />
              </div>
            ) : (
              <div
                className="secondUser"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", backgroundColor: " rgb(196, 196, 196)" }}
              >
                {secondUser.username.charAt(0)?.toUpperCase()}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreItem;
