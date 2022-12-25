import React from "react";
import { Animated } from "react-animated-css";
import Text from "../../atoms/Text/Text";
import style from "./MessageBox.style";

const MessageBox = ({ image, message, isOwnUser, username }) => {
  const styles = style({ isOwnUser });
  return (
    <div>
      <Animated
        animationIn={isOwnUser ? "fadeInRight" : "fadeInLeft"}
        animationOut={isOwnUser ? "fadeOutRight" : "fadeOutLeft"}
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        {" "}
        <div style={styles.messageContainer}>
          <div style={styles.messageBox}>
            {image ? <img src={image} style={styles.profileImage} /> : <div style={styles.usernameChar}>{username.charAt(0)?.toUpperCase()}</div>}
            <Text text={message} fontSize="1.5rem" color="black" />
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default MessageBox;
