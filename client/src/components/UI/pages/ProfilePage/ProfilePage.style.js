const style = () => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "92vh",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25rem",
    height: "25rem",
    borderRadius: "50rem",
    backgroundColor: "#C4C4C4",
    position: "relative",
    overflow: "hidden",
    marginBottom: "5.5rem",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imageUpload: {
    width: "5rem",
    height: "5rem",
    borderRadius: "50rem",
    backgroundColor: "#004f9d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "absolute",
    bottom: "48%",
    right: "44%",
  },
  imageInput: {
    display: "none",
  },
  textContainer: {
    width: "25rem",
    margin: "0 0 2.2rem 0",
  },
  changePassword: {
    width: "25rem",
    margin: "0 0 1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileChar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12rem",
  },
});

export default style;
