const navButton = {
  cursor: "pointer",
  position: "absolute",
  bottom: "50%",
  width: "auto",
  marginTop: "-22px",
  padding: "16px",
  color: "black",
  fontWeight: "bold",
  fontSize: "18px",
  transition: "0.6s ease",
  userSelect: "none",
  outline: "none",
};

const makeStyles = () => {
  return {
    left: { ...navButton, left: "10px", borderRadius: "9px 0px 0px 9px" },
    right: {
      ...navButton,
      right: "10px",
      borderRadius: "0px 9px 9px 0px",
    },
  };
};

export default makeStyles;
