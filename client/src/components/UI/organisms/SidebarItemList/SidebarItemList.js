import React from "react";
import SidebarItem from "../../molecules/SidebarItem/SidebarItem";
import style from "./SidebarItemList.style.js";

const SidebarItemList = ({ onClick, onClickSend, onChangeMsg, isOpen, chatRef, onlineFriends, offlineFriends }) => {
  const styles = style();
  const sidebarItems = ["Message", "Friends", "Out"];

  return (
    <div className="sidebarItemsContainer" style={styles.container}>
      {sidebarItems.map((sidebarItem) => (
        <SidebarItem
          offlineFriends={offlineFriends}
          onlineFriends={onlineFriends}
          onClickSend={onClickSend}
          onChangeMsg={(e) => onChangeMsg(e)}
          isOpen={isOpen}
          onClick={() => onClick(sidebarItem)}
          sidebarItem={sidebarItem}
          chatRef={chatRef}
        />
      ))}
    </div>
  );
};

export default SidebarItemList;
