import React, { useState } from "react";
import style from "./ProfilePage.style";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import ChangePasswordModal from "../../molecules/ChangePasswordModal/ChangePasswordModal";

const ProfilePage = ({ username, email }) => {
  const styles = style();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img style={styles.image} src={require(`../../../../assets/images/profilePicture.png`)} alt="Bear" />
      </div>
      <Text text={username} margin="2rem 0" fontSize="1.8rem" />
      <Text text={email} margin="0 0 2rem 2rem" fontSize="1.8rem" />
      {isOpen && <ChangePasswordModal isOpen={isOpen} modalClose={() => setIsOpen(false)} />}
      <Button
        onClick={() => setIsOpen(true)}
        className="buttonHoverGold"
        text="Change Password"
        font="RobotoMedium"
        fontSize="1.8rem"
        width="22rem"
        height="4rem"
        borderRadius="1rem"
        buttonColor="#EBD894"
      />
    </div>
  );
};

export default ProfilePage;
