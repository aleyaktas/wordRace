import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import style from "./GamePage.style";
import { Animated } from "react-animated-css";
import FriendItemListModal from "../../molecules/FriendItemListModal/FriendItemListModal";
import SidebarItemList from "../../organisms/SidebarItemList/SidebarItemList";
import QuestionCard from "../../molecules/QuestionCard/QuestionCard";
import ScoreCard from "../../molecules/ScoreCard/ScoreCard";

const GamePage = ({ firstUser, secondUser, friends, question, time, iconName }) => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);

  if (secondUser === "") {
    return (
      <div>
        {isOpen && <FriendItemListModal modalType="inviteModal" friends={friends} isOpen={isOpen} modalClose={() => setIsOpen(false)} />}
        <div style={styles.button} onClick={() => setIsOpen(true)}>
          <Button
            className="buttonHoverGold"
            text="Invite Your Friend"
            font="RobotoMedium"
            fontSize="1.8rem"
            width="20rem"
            height="4rem"
            margin="2rem 2rem 2rem auto"
            borderRadius="1rem"
            iconPosition="right"
            buttonColor="#EBD894"
            iconName="AddFriend"
          />
        </div>
        <div style={styles.headerText}>
          <Text text={`${firstUser} 0 - 0 waiting...`} font="InterBold" fontSize="2.4rem" color="#6B5814" />
        </div>
        <div style={styles.bodyText}>
          <Animated animationIn="zoomIn" animationInDuration={1200} isVisible={true}>
            {" "}
            <Text text="Waiting for other player" font="RedHatMonoRegular" fontSize="2.4rem" color="#6B5814" />
          </Animated>
        </div>
      </div>
    );
  } else if (secondUser !== "") {
    return (
      <div style={styles.container}>
        <SidebarItemList />
        <QuestionCard question={question} time={time} />
        <ScoreCard iconName={iconName} />
      </div>
    );
  }
};

export default GamePage;
