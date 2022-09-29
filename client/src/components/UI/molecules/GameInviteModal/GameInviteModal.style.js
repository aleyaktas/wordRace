const style = () => ({
  // container: {
  //   width: "30rem",
  //   height: "30rem",
  //   boxShadow: "2.4rem",
  //   backgroundColor: "white",
  //   borderRadius: "3.4rem",
  //   overflow: "hidden",
  //   outline: "none",
  // },
  rootContainer: {
    display: "flex",
    height: "contain",
  },
  container: {
    borderRadius: "1.8rem",
    width: "40rem",
    boxShadow: "2.4rem",
    // padding: "2rem 2rem 3.2rem 2rem",
    backgroundColor: "white",
    overflow: "hidden",
    outline: "none",
  },
  card: {
    width: "10rem",
    height: "10rem",
    margin: "auto",
  },
  cardImage: {
    height: "15rem",
    width: "100%",
    backgroundColor: "#89DF73",
  },
  cardText: {
    height: "8.5rem",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  closeButton: {
    border: "none",
    transitionDuration: " 0.4s",
    cursor: "pointer",
    padding: "2rem 2rem 0 0",
    backgroundColor: "#89DF73",
    display: "flex",
    marginInlineStart: "auto",
  },
});

export default style;
