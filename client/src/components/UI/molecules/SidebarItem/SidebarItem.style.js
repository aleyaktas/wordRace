const style = ({ isOpen }) => ({
  container: {
    width: "6rem",
    height: "6rem",
    borderRadius: "6rem",
    backgroundColor: "white",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    cursor: "pointer",
    zIndex: 3,
  },
  chatContainer: {
    width: "30rem",
    height: "3rem",
    display: "inline-flex",
    zIndex: 2,
  },
  chatInputText: {
    width: "20rem",
    height: "100%",
    borderWidth: "0.5px 0 0.5px 0.5px",
    padding: "0.5rem",
  },
  chatInputSubmit: {
    width: "8rem",
    height: "100%",
    fontSize: "1.4rem",
    backgroundColor: "#EBD894",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",

    // borderWidth: "1px 1px 1px 0",
  },
  messageItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default style;
