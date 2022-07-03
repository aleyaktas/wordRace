import React from "react";
import FriendItem from "../../molecules/FriendItem/FriendItem";
import PropTypes from "prop-types";
import style from "./FriendItemList.style";

const FriendItemList = ({ friends, modalType, height }) => {
  const styles = style({ height });

  return (
    <div id="friendItemList" style={styles.container}>
      {friends.map((friend, index) => (
        <FriendItem index={index + 1} username={friend.username} isOnline={friend.isOnline} modalType={modalType} />
      ))}
    </div>
  );
};
FriendItemList.propTypes = {
  isOpen: PropTypes.bool,
};
FriendItemList.defaultProps = {
  modalType: null,
};

export default FriendItemList;
