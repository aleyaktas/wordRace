import React from "react";
import SidebarItem from "../../molecules/SidebarItem/SidebarItem";
import style from "./SidebarItemList.style.js";

const SidebarItemList = ({ onClick, onClickSend, onChangeMsg, isOpen, chatRef }) => {
  const styles = style();
  const sidebarItems = ["Message", "Friends", "Question", "Out"];

  return (
    <div style={styles.container}>
      {sidebarItems.map((sidebarItem) => (
        <SidebarItem
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
