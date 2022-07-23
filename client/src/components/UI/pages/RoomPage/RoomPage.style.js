const style = () => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "92vh",
  },
  containerNoRoom: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "5rem",
  },
  scoreCard: {
    width: "20%",
    height: "65rem",
    backgroundColor: "#EBF1F5",
    overflowY: "auto",
  },
  text: {
    backgroundColor: "#5B5B5B",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  roomText: {
    display: "flex",
    width: "60%",
    height: "3.8rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAEEED",
  },
  score: {
    margin: "3rem 2rem",
  },
});
export default style;
