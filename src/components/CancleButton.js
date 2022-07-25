import React from "react";

import { Button } from "@mui/material";

function CancleButton({ text, onClick }) {
  return (
    <Button
      sx={{
        border: "1px solid #535362",
        color: "#535362",
        width: "45%",
        m: 1,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default CancleButton;
