import React from 'react'
import Text from '../../atoms/Text/Text'
import PropTypes from 'prop-types';
import './style.css'

const RoomCard = ({width, height, onClick, roomName, roomImage}) => {
  const style={
    width,
    height,
    cursor:"pointer"
  }
  return (
    <div onClick={onClick} style={style} class="card-container">
      <div class="card card-image" style={{height:"150px"}}>
        <img src={require(`../../../../assets/images/${roomImage}.png`)} alt="Bear" width="100" height="100"/>
      </div>
      <div class="card card-footer" style={{backgroundColor:"#C4DFF3", height:"50px"}} >
        <Text font="InterRegular" text={roomName} color="#556577" textAlign="center" margin={0}/>
      </div>
    </div>
  )
}

RoomCard.propTypes = {
  roomName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
RoomCard.defaultProps = {
  width:"220px",
  height:"200px",
  roomName:"Room Name",
  roomImage: "Bear"
};

export default RoomCard