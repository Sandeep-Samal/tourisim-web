import { Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../Actions/CommonActions";
import AppLogo from "../../assets/images/logos.png";
import giphy from "../../assets/images/giphy.gif";
import "../componentStyle.css";

const Header = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => {
    return {
      isOpen: state.commonReducer.isOpen,
    };
  });

  const clicked = () => {
    dispatch(setIsOpen(false));
    console.log("isOpen", isOpen);
  };
  return (
    <div className="header">
      <div className="logo">
      <img className="orgLogo" src={AppLogo} alt="" onClick={clicked} />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          fontFamily: "emoji",
          wordWrap: "break-word",
          color: "blanchedalmond",
          width: "100px",
        }}
      >
        Tours and Travels
      </Typography>
      </div>
      <img className="giphy" src={giphy} alt="" />
    </div>
  );
};

export default Header;
