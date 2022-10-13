import React from "react";

import { Button } from "@mui/material";

function CancleButton({ text, onClick }) {
  return (
    <Button
      sx={{
        border: "1px solid #D9D9D9",
        color: "#D9D9D9",
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
