import React from "react";

import { Button } from "@mui/material";

function AgreeButton({ text, onClick }) {
  return (
    <Button
      sx={{
        border: "1px solid #00C853",
        color: "#00C853",
        width: "45%",
        m: 1,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default AgreeButton;
