import React, { useState } from "react";
import style from "./ProfilePage.style";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import ChangePasswordModal from "../../molecules/ChangePasswordModal/ChangePasswordModal";
import { useAppDispatch, useAppSelector } from "../../../../store";
import Icon from "../../../../assets/icons/Icon";
import { storage } from "../../../../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { editProfile } from "../../../../store/features/auth/authSlice";

const ProfilePage = () => {
  const styles = style();
  const { username, email, profileImage } = useAppSelector((state) => state.auth.user);
  const [image, setImage] = useState(profileImage);
  const [showImage, setShowImage] = useState(profileImage);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useAppDispatch();
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setShowImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${username}`);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            dispatch(editProfile({ url }));
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        {showImage ? <img src={showImage} alt="profile" style={styles.profileImage} /> : <div style={styles.profileChar}>{username.charAt(0).toUpperCase()}</div>}
      </div>
      <div>
        <label for="file-input" style={styles.imageUpload}>
          <Icon name="Camera" width="3rem" height="3rem" color="white" />
          <input style={styles.imageInput} id="file-input" type="file" onChange={handleImageChange} />
        </label>
      </div>

      <div style={styles.textContainer}>
        <Text text="Username" fontSize="1.2rem" />
        <Text text={username} fontSize="1.6rem" opacity="70%" />
        <hr />
      </div>

      <div style={styles.textContainer}>
        <Text text="Email" fontSize="1.2rem" />
        <Text text={email} fontSize="1.6rem" opacity="70%" />
        <hr />
      </div>
      <div style={styles.changePassword}>
        <Text text="Change Password" fontSize="1.6rem" margin="0 4rem 0 0" />
        <label class="switch">
          <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
          <span class="slider round"></span>
        </label>
      </div>

      {isChecked && <ChangePasswordModal isOpen={isChecked} modalClose={() => setIsChecked(false)} />}
      <Button
        className="buttonHoverGold"
        onClick={handleSubmit}
        text="Save Profile"
        fontSize="1.6rem"
        margin="2rem 0 0 0"
        padding="1rem"
        width="15rem"
        buttonColor="#EBD894"
        borderRadius="4rem"
      />
    </div>
  );
};

export default ProfilePage;
