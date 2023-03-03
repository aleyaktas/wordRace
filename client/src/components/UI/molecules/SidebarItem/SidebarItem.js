import { useState } from "react";
import Icon from "../../../../assets/icons/Icon";
import style from "./SidebarItem.style";
import ReactTooltip from "react-tooltip";
import { Animated } from "react-animated-css";
import { useNavigate } from "react-router-dom";
import FriendItemListModal from "../../molecules/FriendItemListModal/FriendItemListModal";

const SidebarItem = ({ className, sidebarItem, onlineFriends, onlineUsersLength, offlineFriends, onClick, onClickSend, onChangeMsg, isOpen, chatRef }) => {
  const styles = style({ isOpen });

  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      e.preventDefault();
      onClickSend(e);
    }
  };
  const [isOpenFriendsModal, setIsOpenFriendsModal] = useState(false);

  const navigate = useNavigate();
  if (sidebarItem === "Out") {
    onClick = () => navigate("/login");
  } else if (sidebarItem === "Friends") {
    onClick = () => setIsOpenFriendsModal(!isOpen);
  }

  return (
    <>
      <div className={className} style={styles.messageItem}>
        <div onClick={() => onClick()} data-tip={sidebarItem} style={styles.container}>
          <Icon name={sidebarItem} color="#F3B948" width="3rem" height="3rem" />
        </div>
        {isOpen && sidebarItem === "Message" && (
          <div className="chatContainer" style={styles.chatContainer} ref={chatRef}>
            <Animated animationIn="fadeInLeft" animationInDuration={1000} isVisible={true}>
              {" "}
              {/* <Text text="You don't have any friends yet, do you want to add friends?" font="RedHatMonoRegular" fontSize="2.4rem" color="#6B5814" /> */}
              <input
                onKeyDown={handleKeyPress}
                id="messageInput"
                className="messageInput"
                onChange={(e) => onChangeMsg(e)}
                style={styles.chatInputText}
                type="text"
                placeholder="You can enter up to 100 characters"
                maxLength="100"
              />
              <input onClick={onClickSend} id="chatInputSubmit" className="buttonHoverGold chatInputSubmit" style={styles.chatInputSubmit} type="submit" value="SEND" />
            </Animated>
          </div>
        )}
        {isOpenFriendsModal && (
          <FriendItemListModal
            onlineUsersLength={onlineUsersLength}
            friends={onlineFriends}
            offlineFriends={offlineFriends}
            modalType="onlineModal"
            isOpen={isOpenFriendsModal}
            modalClose={() => setIsOpenFriendsModal(false)}
          />
        )}

        {/* {isOpen && sidebarItem === "Out" && navigate("/")} */}
      </div>
      <ReactTooltip textColor="#6B5814" backgroundColor="#EBD894" />
    </>
  );
};

export default SidebarItem;
