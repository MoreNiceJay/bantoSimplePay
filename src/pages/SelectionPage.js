import React from "react";
import { Stack, Typography } from "@mui/material";
import CustomCenterBox from "../components/CustomCenterBox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import BantoLogo from "../assets/icon/banto_text_logo.png";

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

  React.useEffect(() => {
    console.log(checkMobile());
    if (props.location.state !== undefined) {
      setStationId(props.location.state.stationId);

      sessionStorage.setItem("stationId", props.location.state.stationId);
    }
  }, []);
  return (
    <Box sx={{ backgroundColor: "#0B0B0C", height: "100vh" }}>
      <CustomCenterBox sx={{ pt: "30%" }}>
        <img src={BantoLogo} alt="" />
        {/* <Typography color="white" fontSize={40} fontWeight={700}>
          BANTO
        </Typography> */}
        <Typography color="white">반토 보조배터리 대여서비스</Typography>
      </CustomCenterBox>

      <Stack pt={4}>
        <Box p={4}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 5px 14px #000000",
              height: "184px",
              borderRadius: "20px",
            }}
            onClick={() => {
              props.history.push({
                pathname: "/simple/login",
                state: { stationId: stationId },
              });
            }}
          >
            <Stack direction="row" p={3} spacing={8}>
              <Stack spacing={2}>
                <Typography fontWeight={900} fontSize={26}>
                  간편 이용
                </Typography>
                <Box>
                  <Typography fontWeight={500} fontSize={12}>
                    앱 다운 없이 배터리를
                  </Typography>
                  <Typography fontWeight={500} fontSize={12}>
                    대여할 수 있습니다
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 1,
                    pl: 2,
                    pr: 2,
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <Typography fontWeight={600} fontSize={12}>
                    결제수단 등록하러 가기
                  </Typography>
                </Box>
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 50,
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
