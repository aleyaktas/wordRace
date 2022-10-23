const style = ({ length }) => ({
  container: {
    width: "65rem",
    height: "70rem",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "8rem",
    backgroundColor: "#6EBA9D",
    borderRadius: "2rem 2rem 0 0",
  },
  body: {
    position: "relative",
    borderRadius: " 2rem",
    overflow: "hidden",
    marginBottom: "2rem",
  },
  joker: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",
  },
  messagesContainer: { height: "22rem", overflowY: "auto", overflowX: "hidden", padding: "0 4rem", display: length > 0 ? "flex" : "none", flexDirection: "column" },
});

export default style;
