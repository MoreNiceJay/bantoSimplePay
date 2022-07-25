import { Typography } from "@mui/material";
import React from "react";
import CustomLeftBox from "./CustomLeftBox";

function IntroduceText({ firstLine, secondLine }) {
  return (
    <CustomLeftBox
      sx={{
        borderBottom: 1,
        borderColor: "#F2F2F2",
      }}
    >
      <Typography
        fontSize={{ lg: 54, xs: 30 }}
        color="#BDBDBD"
        fontWeight={100}
        lineHeight={0.3}
      >
        {firstLine}
      </Typography>
      <Typography fontSize={{ lg: 54, xs: 30 }} fontWeight="700">
        {secondLine}
      </Typography>
    </CustomLeftBox>
  );
}

export default IntroduceText;
