const style = ({ margin }) => ({
  cardContainer: {
    width: "20rem",
    height: "20rem",
    display: "inline-block",
    margin: margin || "0.5rem",
    cursor: "pointer",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    border: "none",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15rem",
    backgroundColor: "#FAF9ED",
  },
  cardFooter: {
    backgroundColor: "#C4DFF3",
    height: "5rem",
  },
});

export default style;
