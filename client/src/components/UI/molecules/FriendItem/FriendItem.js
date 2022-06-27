import React, { useState } from "react";
import Text from "../../atoms/Text/Text";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import style from "./FriendItem.style";

const FriendItem = ({ index, username, inviteModal, customComponent, isOnline, color }) => {
  const [isInvite, setIsInvite] = useState(false);

  const inviteControl = (isInvite, setIsInvite) => (
    <>
      {isInvite ? (
        <Text text="invited" />
      ) : (
        <Button
          onClick={() => setIsInvite(true)}
          width="12rem"
          padding="0.3rem"
          textPosition="center"
          text="Invite"
          icon
          iconName="Letter"
          iconPosition="left"
          buttonColor="#EBD894"
          textMargin="0 0 0 1rem"
          fontSize="1.6rem"
          iconSize="2rem"
          className="buttonHoverGold"
        />
      )}
    </>
  );

  const styles = style();

  return (
    <div className="row" style={styles.row}>
      <div style={styles.column}>
        <Text text={index} />
      </div>
      <div style={styles.column}>
        <Text text={username} />
      </div>
      <div style={styles.column}>{inviteModal ? inviteControl(isInvite, setIsInvite) : customComponent}</div>
    </div>
  );
};

FriendItem.propTypes = {
  index: PropTypes.number,
  username: PropTypes.string,
  customComponent: PropTypes.elementType,
};
FriendItem.defaultProps = {
  customComponent: null,
  color: "#E6E6E6",
};

export default FriendItem;
