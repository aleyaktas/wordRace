import React, { useEffect, useState } from "react";
import Text from "../../../../components/UI/atoms/Text/Text";
import HomePageFirstImg from "../../../../assets/images/HomePageFirstImg.png";
import HomePageSecondImg from "../../../../assets/images/HomePageSecondImg.png";
import HomePageThirdImg from "../../../../assets/images/HomePageThirdImg.png";
import HomePageFourthImg from "../../../../assets/images/HomePageFourthImg.png";
import { useMediaQuery } from "react-responsive";
import { Animated } from "react-animated-css";
import style from "./HomePage.style";

const HomePage = () => {
  const styles = style();
  const [scrollY, setScrollY] = useState(0);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <div className="homePageContainer" style={styles.container}>
        <img className="homePageImg homeFirstImg" src={HomePageFirstImg} alt="first" width="100%" />
        <div className="homePageText">
          {isTabletOrMobile ? (
            <Text
              font="InterBold"
              textAlign="-webkit-center"
              color="#47607A"
              fontSize="2.5rem"
              lineHeight="3.5rem"
              text="How many English words do you know? How about learning more words by playing?"
            />
          ) : (
            <Animated animationIn="fadeInRight" animationInDuration={1800} isVisible={true}>
              <Text
                font="InterBold"
                textAlign="-webkit-center"
                color="#47607A"
                fontSize="2.5rem"
                lineHeight="3.5rem"
                text="How many English words do you know? How about learning more words by playing? Register now and start learning"
              />{" "}
            </Animated>
          )}
        </div>
      </div>

      <div className="homePageContainer2" style={styles.container}>
        <img className="homePageImg homeSecondImg" src={HomePageSecondImg} alt="first" width="100%" />
        {(scrollY > 230) & !isTabletOrMobile ? (
          <div className="homePageText">
            <Animated animationIn="fadeInLeft" animationInDuration={1800} isVisible={true}>
              <Text
                font="InterBold"
                textAlign="-webkit-center"
                color="#47607A"
                fontSize="2.5rem"
                lineHeight="3.5rem"
                text="If you want, you can create a room and invite your friends to the room. Are you ready for this learning journey?"
              />{" "}
            </Animated>{" "}
          </div>
        ) : (
          isTabletOrMobile && (
            <Text
              font="InterBold"
              textAlign="-webkit-center"
              color="#47607A"
              fontSize="2.5rem"
              lineHeight="3.5rem"
              text="If you want, you can create a room and invite your friends to the room. Are you ready for this learning journey?"
            />
          )
        )}
      </div>
      <div className="homePageContainer" style={styles.container}>
        <img className="homePageImg homeThirdImg" src={HomePageThirdImg} alt="first" width="100%" />
        {scrollY > 680 ? (
          <div className="homePageText">
            <Animated animationIn="fadeInRight" animationInDuration={1800} isVisible={true}>
              <Text
                font="InterBold"
                textAlign="-webkit-center"
                color="#47607A"
                fontSize="2.5rem"
                lineHeight="3.5rem"
                text="Or you can join the created online rooms and play with different users"
              />{" "}
            </Animated>{" "}
          </div>
        ) : (
          isTabletOrMobile && (
            <Text
              font="InterBold"
              textAlign="-webkit-center"
              color="#47607A"
              fontSize="2.5rem"
              lineHeight="3.5rem"
              text="Or you can join the created online rooms and play with different users"
            />
          )
        )}
      </div>
      <div className="homePageContainer2" style={styles.container}>
        <img className="homePageImg homeFourthImg" src={HomePageFourthImg} alt="first" width="100%" />
        {scrollY > 1000 ? (
          <div className="homePageText">
            <Animated animationIn="fadeInLeft" animationInDuration={1800} isVisible={true}>
              <Text
                font="InterBold"
                textAlign="-webkit-center"
                color="#47607A"
                fontSize="2.5rem"
                lineHeight="3.5rem"
                text="It's game time! Don't be afraid, you have jockeys and don't forget to face your opponent to score, good luck"
              />{" "}
            </Animated>{" "}
          </div>
        ) : (
          isTabletOrMobile && (
            <Text
              font="InterBold"
              textAlign="-webkit-center"
              color="#47607A"
              fontSize="2.5rem"
              lineHeight="3.5rem"
              text="It's game time! Don't be afraid, you have jockeys and don't forget to face your opponent to score, good luck. Register now and start learning"
            />
          )
        )}
      </div>
    </>
  );
};

export default HomePage;
