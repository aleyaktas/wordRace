const style = () => ({
  container: {
    width: "60rem",
    height: "35rem",
    backgroundColor: "yellow",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "7rem",
    backgroundColor: "#6EBA9D",
  },
  body: {
    position: "relative",
  },
  joker: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",
  },
});

export default style;
