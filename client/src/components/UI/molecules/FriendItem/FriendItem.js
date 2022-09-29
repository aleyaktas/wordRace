import React, { useState } from "react";
import Text from "../../atoms/Text/Text";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import style from "./FriendItem.style";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { acceptFriend, getFriends, rejectFriend } from "../../../../store/features/auth/authSlice";
import DeleteFriendModal from "../DeleteFriendModal/DeleteFriendModal";
import socket from "../../../../utils/socket";

const FriendItem = ({ index, username, modalType, modalClose, isOnline }) => {
  const [isInvite, setIsInvite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const ownerUser = useAppSelector((state) => state.auth.user.username);

  const onClickInvite = () => {
    setIsInvite(true);
    socket.emit("invite_user", { username, ownerUser });
  };

  const onClickAccept = (e) => {
    e.preventDefault();
    dispatch(acceptFriend({ username }));
    socket.emit("friend_accept", { username });
    dispatch(getFriends({ ownerUser }));
    modalClose();
  };

  const onClickReject = (e) => {
    e.preventDefault();
    dispatch(rejectFriend({ username }));
    dispatch(getFriends({ ownerUser }));
    modalClose();
  };
  const inviteControl = (isInvite, setIsInvite) => (
    <>
      {isInvite ? (
        <Text text="invited" />
      ) : (
        <Button
          onClick={onClickInvite}
          width="12rem"
          padding="0.3rem"
          textPosition="center"
          text="Invite"
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
        onClick={onClickAccept}
        width="3rem"
        height="3rem"
        borderRadius="4rem"
        buttonColor="#64A3AF"
        padding="0.3rem"
        iconName="Tick"
        iconColor="white"
        iconSize="2rem"
        margin="0 1rem"
      />
      <Button onClick={onClickReject} width="3rem" height="3rem" borderRadius="4rem" buttonColor="#C75555" padding="0.3rem" iconName="Close" iconColor="white" iconSize="2rem" />
    </>
  );
  const deleteControl = () => (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="buttonHoverBlack"
        width="5rem"
        height="5rem"
        buttonColor="transparent"
        padding="0.3rem"
        iconName="DeleteFriend2"
        iconColor="darkslategray"
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
      <DeleteFriendModal isOpen={isOpen} setIsOpen={setIsOpen} modalClose={() => setIsOpen(false)} username={username} />
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
