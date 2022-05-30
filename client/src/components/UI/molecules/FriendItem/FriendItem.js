import React, { useState } from 'react'
import Text from '../../atoms/Text/Text'
import PropTypes from 'prop-types';
import './style.css'
import ButtonItem from '../../atoms/Button/Button';

const FriendItem = ({index, username, inviteModal, customComponent, isOnline, color}) => {
  
  const [isInvite, setIsInvite] = useState(false)
    
  const inviteControl = (isInvite, setIsInvite)=> 
  <>
    {isInvite? <Text text='invited'/> : <ButtonItem onClick={()=> setIsInvite(true)} padding="0px 10px" iconPosition='start' icon iconName="Letter" />}
  </>
  return (
      <div className="row" style={{'--color': color,
    }}>
        <div className="column">
          <Text text={index}/>
        </div>
        <div className="column">
          <Text text={username} />
        </div>
        <div className="column">
        {inviteModal ? inviteControl(isInvite, setIsInvite) : customComponent}
        </div>
      </div>
  )
}

FriendItem.propTypes = {
  index: PropTypes.number,
  username: PropTypes.string,
  customComponent: PropTypes.elementType
};
FriendItem.defaultProps = {
  customComponent: null,
  color:"#E6E6E6"
};

export default FriendItem