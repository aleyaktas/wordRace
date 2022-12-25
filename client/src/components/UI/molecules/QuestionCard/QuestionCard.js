import React from "react";
import style from "./QuestionCard.style";
import QuestionItemList from "../../organisms/QuestionItemList/QuestionItemList";
import Text from "../../atoms/Text/Text";
import QuestionJoker from "../QuestionJoker/QuestionJoker";
import MessageBox from "../MessageBox/MessageBox";

const QuestionCard = ({ username, messages, timer, question, onClick, handleJoker, usedJokers }) => {
  const styles = style({ length: messages.length });
  var scroll = document.getElementById("scroll");

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Text text={question?.question} fontSize="3rem" color="white" />
      </div>
      <div style={styles.body}>
        <QuestionItemList options={question} onClick={(option) => onClick(option)} />
        <div style={styles.joker}>
          <QuestionJoker timer={timer} handleJoker={(joker) => handleJoker(joker)} usedJokers={usedJokers} />
        </div>
      </div>
      <div id="scroll" style={styles.messagesContainer}>
        {messages.length > 0 &&
          scroll &&
          (((scroll.scrollTop = scroll.scrollHeight), scroll?.scrollIntoView({ behavior: "smooth" })),
          messages.map((item, index) => <MessageBox image={item.img} message={item.msg} isOwnUser={item.username === username ? true : false} username={username} />))}
      </div>
    </div>
  );
};

export default QuestionCard;
