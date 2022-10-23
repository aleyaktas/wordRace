const style = ({ isOwnUser }) => ({
  messageContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0.8rem",
    marginLeft: isOwnUser ? "auto" : "0",
    width: "fit-content",
    borderRadius: "2rem",
    marginBottom: "2rem",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  usernameChar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    backgroundColor: " rgb(196, 196, 196)",
    width: "3rem",
    height: " 3rem",
    objectFit: "cover",
    borderRadius: "50%",
    margin: "0 0.5rem",
  },
  profileImage: { width: "3rem", height: "3rem", borderRadius: "50%", margin: "0 0.5rem" },
  messageBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: isOwnUser ? "row-reverse" : "",
  },
});
export default style;
