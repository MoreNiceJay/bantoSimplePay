import React, { useState } from "react";

import { Button, CircularProgress, Fade } from "@mui/material";

export default function CustomButton(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <Button
      sx={{
        height: "66px",
        width: "90%",
        backgroundColor: "#00C853",
        borderRadius: "15px",
        border: "2px solid #00C853",
        fontWeight: "500",
        fontSize: "18px",
        position: "fixed",
        left: "5%",
        bottom: "5%",
        color: "#0B0B0C",
      }}
      disabled={isDisabled}
      onClick={async () => {
        setIsDisabled(true);
        const result = await props.callback();
        setIsDisabled(false);
      }}
      {...props}
    >
      {isDisabled ? (
        <Fade
          in={isDisabled}
          style={{
            transitionDelay: isDisabled ? "800ms" : "0ms",
          }}
          unmountOnExit
        >
          <CircularProgress sx={{ color: "#00C853" }} />
        </Fade>
      ) : (
        props.children
      )}
    </Button>
  );
}
