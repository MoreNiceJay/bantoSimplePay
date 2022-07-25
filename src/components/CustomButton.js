import React from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";
import { isMobile } from "react-device-detect";

function CustomButton({ text, onClick }) {
  return (
    <Button
      sx={{
        color: "black",
        width: isMobile ? "120px" : "188px",
        height: isMobile ? "40px" : "61px",
        background: "#FFFFFF",
        border: "1px solid #FFFFFF",
        ButtonSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        fontSize: isMobile ? "10px" : "15px",
      }}
      onClick={onClick}
    >
      {text}
      <ArrowRightAltIcon />
    </Button>
  );
}

export default CustomButton;
