const style = () => ({
  container: {
    height: "auto",
    padding: "6rem 0 0 0",
    boxSizing: "border-box",
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    placeContent: "end",
    width: "100%",
  },
  body: {
    margin: "3rem 4rem 0 4rem",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5.3rem",
    backgroundColor: "white",
    border: "1px solid #EBD894",
  },
  noFriendText: {
    height: "45rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "3.5rem",
    backgroundColor: "#DE8C50",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.1rem",
    position: "absolute",
    top: "10%",
    left: "85%",
    transform: "translateY(-50%) translateX(-50%)",
    zIndex: "1",
  },
});

export default style;
