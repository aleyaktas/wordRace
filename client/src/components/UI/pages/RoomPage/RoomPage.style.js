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
    // width: "20%",
    width: "30rem",
    marginLeft: "5rem",
    height: "65rem",
    // backgroundColor: "#EBF1F5",
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
    height: "5rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAEEED",
  },
  score: {
    margin: "1.6rem 2rem",
    padding: "1rem",
    display: "flex",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor: "#ffffff3d",
  },
});
export default style;
