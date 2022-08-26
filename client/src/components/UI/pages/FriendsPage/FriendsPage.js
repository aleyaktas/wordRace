import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button/Button";
import FriendItemListModal from "../../molecules/FriendItemListModal/FriendItemListModal";
import AddFriendModal from "../../molecules/AddFriendModal/AddFriendModal";
import FriendItemList from "../../organisms/FriendItemList/FriendItemList";
import { Animated } from "react-animated-css";
import style from "./FriendsPage.style";
import Text from "../../atoms/Text/Text";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { getFriends } from "../../../../store/features/auth/authSlice";

const FriendsPage = () => {
  const styles = style();
  const [isOpen, setIsOpen] = useState({ isOpenState: false, componentName: "" });
  const { isOpenState, componentName } = isOpen;
  const dispatch = useAppDispatch();

  const { friends, pendingRequests, username } = useAppSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(getFriends({ username }));
  }, [dispatch, username]);
  const haveFriend = (
    <div style={styles.body}>
      <div style={styles.text}>
        <Text text="YOUR FRIENDS" color="darkslategray" fontSize="2rem" font="InterSemiBold" letterSpacing="0.3rem" />
      </div>
      <FriendItemList height="50rem" friends={friends} modalType="deleteFriend" />
    </div>
  );
  const noFriend = (
    <div style={styles.noFriendText}>
      <Animated animationIn="zoomIn" animationInDuration={1200} isVisible={true}>
        {" "}
        <Text text="You don't have any friends yet, do you want to add friends?" font="RedHatMonoRegular" fontSize="2.4rem" color="#6B5814" />
      </Animated>
    </div>
  );
  return (
    <div style={styles.container}>
      <div style={styles.button}>
        <div style={{ position: "relative" }}>
          <div style={styles.counter}>{pendingRequests.length}</div>
          {(isOpenState === true) & (componentName === "FriendItemListModal") ? (
            <FriendItemListModal
              friends={pendingRequests}
              modalType="requestModal"
              title={pendingRequests.length === 0 ? "No pending requests yet" : "Pending Requests"}
              setIsOpen={setIsOpen}
              isOpen={isOpenState}
              modalClose={() => setIsOpen(false)}
            />
          ) : (isOpenState === true) & (componentName === "AddFriendModal") ? (
            <AddFriendModal setIsOpen={setIsOpen} isOpen={isOpenState} modalClose={() => setIsOpen(false)} />
          ) : null}
          <Button
            className="buttonHoverGold"
            onClick={() => setIsOpen({ ...isOpen, isOpenState: true, componentName: "FriendItemListModal" })}
            text="Pending Requests"
            margin="0 3rem 0 0"
            font="RobotoMedium"
            fontSize="1.7rem"
            width="20rem"
            height="3.8rem"
            borderRadius="1rem"
            buttonColor="#EBD894"
          />
        </div>
        <Button
          className="buttonHoverGold"
          onClick={() => setIsOpen({ ...isOpen, isOpenState: true, componentName: "AddFriendModal" })}
          text="Add Friend"
          margin="0 5rem 0 0"
          font="RobotoMedium"
          fontSize="1.7rem"
          width="20rem"
          height="3.8rem"
          borderRadius="1rem"
          icon
          iconPosition="end"
          buttonColor="#EBD894"
          iconName="AddFriend"
        />
      </div>
      {friends.length > 0 ? <>{haveFriend}</> : <>{noFriend}</>}
    </div>
  );
};

export default FriendsPage;
