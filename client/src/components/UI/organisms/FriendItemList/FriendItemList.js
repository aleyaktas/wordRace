import React, { useEffect, useState } from "react";
import FriendItem from "../../molecules/FriendItem/FriendItem";
import PropTypes from "prop-types";
import style from "./FriendItemList.style";
import { useAppSelector } from "../../../../store";

const FriendItemList = ({ modalType, friends, offlineFriends, onlineUsersLength, modalClose, height }) => {
  const styles = style({ height });

  const [indexOffline, setIndexOffline] = useState(onlineUsersLength || 0);

  return (
    <div id="friendItemList" style={styles.container}>
      {friends?.map((friend, index) => (
        <div key={index}>
          <FriendItem username={friend.username} isOnline modalType={modalType} modalClose={modalClose} />
        </div>
      ))}
      {offlineFriends?.length > 0 &&
        (modalType === "onlineModal" || modalType === "inviteModal") &&
        offlineFriends.map((friend, index) => (
          <div key={index}>
            <FriendItem
              // index={}
              username={friend.username}
              isOnline={false}
              modalType={modalType}
              modalClose={modalClose}
            />
          </div>
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
