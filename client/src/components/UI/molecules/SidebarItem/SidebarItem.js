import { useEffect, useRef, useState } from "react";
import Icon from "../../../../assets/icons/Icon";
import style from "./SidebarItem.style";
import ReactTooltip from "react-tooltip";
import { Animated } from "react-animated-css";

const SidebarItem = ({ sidebarItem, onClick, onClickSend, onChangeMsg, isOpen, chatRef }) => {
  const styles = style({ isOpen });

  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      e.preventDefault();
      onClickSend(e);
    }
  };

  return (
    <>
      <div style={styles.messageItem}>
        <div onClick={() => onClick()} data-tip={sidebarItem} style={styles.container}>
          <Icon name={sidebarItem} color="#F3B948" width="3rem" height="3rem" />
        </div>
        {isOpen && sidebarItem === "Message" && (
          <div style={styles.chatContainer} ref={chatRef}>
            <Animated animationIn="fadeInLeft" animationInDuration={1000} isVisible={true}>
              {" "}
              {/* <Text text="You don't have any friends yet, do you want to add friends?" font="RedHatMonoRegular" fontSize="2.4rem" color="#6B5814" /> */}
              <input
                onKeyDown={handleKeyPress}
                id="messageInput"
                onChange={(e) => onChangeMsg(e)}
                style={styles.chatInputText}
                type="text"
                placeholder="You can enter up to 100 characters"
                maxLength="100"
              />
              <input onClick={onClickSend} id="chatInputSubmit" className="buttonHoverGold" style={styles.chatInputSubmit} type="submit" value="SEND" />
            </Animated>
          </div>
        )}
      </div>
      <ReactTooltip textColor="#6B5814" backgroundColor="#EBD894" />
    </>
  );
};

export default SidebarItem;
