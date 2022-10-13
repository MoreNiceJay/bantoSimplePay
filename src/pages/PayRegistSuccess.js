import React from "react";
import UserIcon from "../assets/icon/user.png";
import CustomCenterBox from "../components/CustomCenterBox";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import AgreeButton from "../components/AgreeButton";
import CancleButton from "../components/CancleButton";

import BantoLogo from "../assets/icon/banto_text_logo.png";

export default function App(props) {
  return (
    <>
      <Box sx={{ backgroundColor: "#0B0B0C", height: "100vh" }}>
        <CustomCenterBox sx={{ pt: "20%", pb: "20%" }}>
          <CustomCenterBox sx={{ p: 5, alignItems: "center" }}>
            <Box>
              <img src={BantoLogo} alt="" />
            </Box>
            {/* <Typography color="white" fontSize={40} fontWeight={700}>
              BANTO
            </Typography> */}
            {/* <Box sx>
              <img src={UserIcon} alt="" width="30%" />
            </Box> */}
          </CustomCenterBox>

          <CustomCenterBox>
            <Typography color="white" fontWeight={500} fontSize={18}>
              결제 등록 완료!
            </Typography>
            <Typography color="white" fontWeight={500} fontSize={18}>
              지금 바로 <span style={{ color: "#00C853" }}>보조배터리</span>를
            </Typography>
            <Typography color="white" fontWeight={500} fontSize={18}>
              대여할 수 있습니다
            </Typography>
          </CustomCenterBox>
        </CustomCenterBox>

        {/* <CustomCenterBox>
          <Typography color="white" fontSize={15}>
            대여하시겠습니까?
          </Typography>
        </CustomCenterBox> */}

        <CustomCenterBox>
          {/* <CancleButton text="다음에 할게요" /> */}
          <Box pl={4} pr={4}>
            <Button
              sx={{ backgroundColor: "#68E281", color: "black" }}
              fullWidth
              variant="contained"
              size="large"
              onClick={() => {
                props.history.push("/simple/login");
              }}
            >
              대여하기
            </Button>
          </Box>
        </CustomCenterBox>
      </Box>
    </>
  );
}
