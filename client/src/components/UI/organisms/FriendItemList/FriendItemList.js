import React from 'react'
import FriendItem from '../../molecules/FriendItem/FriendItem'
import './style.css'
import PropTypes from 'prop-types';


const FriendItemList = ({friends, inviteModal, customComponent, height}) => {
  const style = {
    height,
    overflowY:"auto"
  }
  
  return (
    <div style={style}>
      {friends.map((friend, index) => 
        <FriendItem 
          index={index + 1} 
          username={friend.username} 
          isOnline={friend.isOnline} 
          inviteModal={inviteModal}
          customComponent={customComponent} 
           />
          )}
    </div>
  )
}
FriendItemList.propTypes = {
  isOpen: PropTypes.bool,
};
FriendItemList.defaultProps = {
  inviteModal: false
};

export default FriendItemList