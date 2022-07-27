import React, { useState } from "react";
import Text from "../../atoms/Text/Text";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import style from "./FriendItem.style";

const FriendItem = ({ index, username, modalType, isOnline }) => {
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
  const onlineControl = () => <>{isOnline ? <div style={styles.online}></div> : <div style={styles.offline}></div>}</>;
  const requestControl = () => (
    <>
      <Button
        width="3rem"
        height="3rem"
        borderRadius="4rem"
        buttonColor="#64A3AF"
        padding="0.3rem"
        icon
        iconName="Tick"
        iconColor="white"
        iconPosition="center"
        iconSize="2rem"
        margin="0 1rem"
      />
      <Button width="3rem" height="3rem" borderRadius="4rem" buttonColor="#C75555" padding="0.3rem" icon iconName="Close" iconColor="white" iconPosition="center" iconSize="2rem" />
    </>
  );
  const deleteControl = () => (
    <>
      <Button
        className="buttonHoverBlack"
        width="5rem"
        height="5rem"
        buttonColor="transparent"
        padding="0.3rem"
        icon
        iconName="DeleteFriend2"
        iconColor="darkslategray"
        iconPosition="center"
        iconSize="3rem"
        margin="0 1rem"
      />
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
      <div style={styles.column}>
        {modalType === "inviteModal"
          ? inviteControl(isInvite, setIsInvite)
          : modalType === "onlineModal"
          ? onlineControl()
          : modalType === "requestModal"
          ? requestControl()
          : modalType === "deleteFriend"
          ? deleteControl()
          : ""}
      </div>
    </div>
  );
};

FriendItem.propTypes = {
  index: PropTypes.number,
  username: PropTypes.string,
};
FriendItem.defaultProps = {
  modalType: null,
};

export default FriendItem;
