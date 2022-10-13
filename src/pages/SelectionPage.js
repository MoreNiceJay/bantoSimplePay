import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import CustomCenterBox from "../components/CustomCenterBox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import BantoLogo from "../assets/icon/banto_text_logo.png";
import Battery20Icon from "@mui/icons-material/Battery20";
import CustomLeftBox from "../components/CustomLeftBox";

export default function App(props) {
  const [stationId, setStationId] = React.useState("");

  function checkMobile() {
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if (varUA.indexOf("android") > -1) {
      //안드로이드
      return "android";
    } else if (
      varUA.indexOf("iphone") > -1 ||
      varUA.indexOf("ipad") > -1 ||
      varUA.indexOf("ipod") > -1
    ) {
      //IOS
      return "ios";
    } else {
      //아이폰, 안드로이드 외
      return "other";
    }
  }
  function rentButtonTapped() {
    props.history.push({
      pathname: "/simple/login",
      state: { stationId: stationId },
    });
  }

  React.useEffect(() => {
    console.log(checkMobile());
    if (props.location.state !== undefined) {
      setStationId(props.location.state.stationId);

      sessionStorage.setItem("stationId", props.location.state.stationId);
    }
    // window.alert(`
    // *공지*
    // 안녕하세요 고객님
    // 현재 반토 보조배터리 서비스 이용이 불가합니다
    // 사유     : 서비스 점검이 진행중 입니다
    // 점검 일자 : 2022.8.2 05:00 - 8.4 05:00
    // 이용에 불편을 드려 죄송합니다
    // `)
  }, []);
  return (
    <Box sx={{ backgroundColor: "#0B0B0C", height: "100vh" }}>
      <CustomCenterBox sx={{ pt: "30%" }}>
        <img src={BantoLogo} alt="" />
        {/* <Typography color="white" fontSize={40} fontWeight={700}>
          BANTO
        </Typography> */}
        <Typography color="white">보조배터리 대여서비스</Typography>
      </CustomCenterBox>

      <CustomLeftBox sx={{ p: 4, mt: 8 }}>
        <Typography color="white">앱 다운 없이</Typography>
        <Typography color="white" fontWeight={500}>
          <span style={{ color: "#68E281" }}>보조배터리</span>를 대여하세요
        </Typography>
      </CustomLeftBox>
      <Box pl={4} pr={4}>
        <Button
          sx={{ backgroundColor: "#68E281", color: "black" }}
          fullWidth
          variant="contained"
          size="large"
          onClick={rentButtonTapped}
        >
          대여하기
          <Battery20Icon />
        </Button>
      </Box>
    </Box>
  );
}
