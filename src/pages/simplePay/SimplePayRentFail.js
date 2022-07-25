import React from "react";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CustomCenterBox from "../../components/CustomCenterBox";

export default function App(props) {
  return (
    <Box sx={{ backgroundColor: "#0B0B0C", height: "100vh" }}>
      <Box sx={{ pt: "40%" }}>
        <CustomCenterBox sx={{ p: 2 }}>
          <CancelOutlinedIcon
            sx={{ color: "white", width: "40%", fontSize: 200 }}
          />
        </CustomCenterBox>
        <CustomCenterBox>
          <Typography color="white" fontSize={40}>
            대여 실패
          </Typography>
          <Link
            href="https://pf.kakao.com/_eWuNT/chat"
            color="inherit"
            target="_blank"
            sx={{ color: "white" }}
          >
            카카오톡 고객센터 연결
          </Link>
        </CustomCenterBox>
      </Box>
    </Box>
  );
}
