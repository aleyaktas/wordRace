import React, { useState } from "react";
import Text from "../../atoms/Text/Text";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import style from "./FriendItem.style";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { acceptFriend, getFriends, rejectFriend } from "../../../../store/features/auth/authSlice";
import DeleteFriendModal from "../DeleteFriendModal/DeleteFriendModal";
import socket from "../../../../utils/socket";
import { showMessage } from "../../../../utils/showMessage";

const FriendItem = ({ username, modalType, modalClose, isOnline }) => {
  const [isInvite, setIsInvite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const ownerUser = useAppSelector((state) => state.auth.user.username);

  const onClickInvite = () => {
    setIsInvite(true);
    socket.emit("invite_user", { username, ownerUser });
    showMessage("Invitation sent", "success");
    // modalClose();
  };

  const onClickAccept = async (e) => {
    e.preventDefault();
    await dispatch(acceptFriend({ username }));
    socket.emit("friend_accept", { username });
    await dispatch(getFriends({ ownerUser }));
    modalClose();
  };

  const onClickReject = async (e) => {
    e.preventDefault();
    await dispatch(rejectFriend({ username }));
    dispatch(getFriends({ ownerUser }));
    modalClose();
  };
  const inviteControl = (isInvite, setIsInvite) => (
    <>
      {isOnline ? (
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
          disabled={true}
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
      <Button
        onClick={onClickReject}
        width="3rem"
        height="3rem"
        borderRadius="4rem"
        buttonColor="#C75555"
        padding="0.3rem"
        iconName="Close"
        iconColor="white"
        iconSize="2rem"
      />
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
        <Text fontSize="2rem" text="➝" />
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
