import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

import IntroduceText from "../../components/IntroduceText";
import officeImage1 from "../../assets/img/partners/office1.png";
import officeImage2 from "../../assets/img/partners/office2.png";
import CustomCenterBox from "../../components/CustomCenterBox";
import CustomLeftBox from "../../components/CustomLeftBox";
import CustomButton from "../../components/CustomButton";

import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";

const CircleBox = ({ text }) => {
  return (
    <CustomCenterBox
      sx={{
        paddingTop: isMobile ? 3.2 : 7,
        width: isMobile ? 70 : 130,
        height: isMobile ? 70 : 130,
        borderRadius: "50%",
        background: "#FBFBFB",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Typography fontWeight={500}>{text}</Typography>
    </CustomCenterBox>
  );
};

function Service() {
  const history = useHistory();

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      mt={3}
    >
      <Grid item xs={12} lg={12}>
        <IntroduceText firstLine="파트너스" secondLine="서비스 소개" />
      </Grid>

      <Grid item xs={12} lg={12}>
        <img src={officeImage1} alt="" width="100%" />
      </Grid>

      <Grid item xs={12} lg={4}>
        <img src={officeImage2} alt="" width="100%" />
      </Grid>

      <Grid item xs={12} lg={8}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={{ xs: 3, lg: 6 }}
        >
          <CustomLeftBox>
            <Typography fontWeight={100} fontSize={{ xs: 15, lg: 16 }}>
              BANTO PARTNER는 3가지 부류로 나뉘어져있습니다
            </Typography>
          </CustomLeftBox>
          <CustomLeftBox>
            <Stack direction="row" spacing={8}>
              <CircleBox text="세일즈" />
              <CircleBox text="구매자" />
              <CircleBox text="가맹점" />
            </Stack>
          </CustomLeftBox>
          <CustomLeftBox sx={{ textAlign: "left" }}>
            <Typography fontWeight={100}>수익 창출</Typography>
            <Typography fontWeight={100}>누구나 신청 가능한 서비스</Typography>
            <Typography fontWeight={100}>
              반토 서비스를 사용하면 좋은 점들
            </Typography>
          </CustomLeftBox>
        </Stack>
      </Grid>

      <Grid item xs={12} lg={12}>
        <Stack spacing={{ xs: 3, lg: 6 }}>
          <CustomLeftBox sx={{ textAlign: "left" }}>
            <Typography
              fontWeight={300}
              fontSize={{ xs: 30, lg: 64 }}
              color="#BDBDBD"
            >
              파트너스 가이드 라인
            </Typography>
            <Typography
              fontWeight={300}
              fontSize={{ xs: 12, lg: 24 }}
              color="#BDBDBD"
            >
              파트너스에 대한 간단한 설명
            </Typography>
            <Typography
              fontWeight={300}
              fontSize={{ xs: 12, lg: 24 }}
              color="#BDBDBD"
            >
              파트너스 가이드 라인
            </Typography>
          </CustomLeftBox>

          <CustomLeftBox sx={{ textAlign: "left" }}>
            <Typography
              fontWeight={300}
              fontSize={{ xs: 14, lg: 40 }}
              color="#BDBDBD"
            >
              "주변을 둘러보면 설치할 곳은 많다"
            </Typography>
            <Typography
              fontWeight={300}
              fontSize={{ xs: 12, lg: 40 }}
              color="#BDBDBD"
            >
              "친구 맥주집? 친구 카페? 지인을 통해 설치 후 수익을 창출해보자"
            </Typography>
          </CustomLeftBox>

          <CustomLeftBox sx={{ textAlign: "left" }}>
            <CustomButton
              text="가이드 라인"
              onClick={() => {
                history.push("/partners/guide");
              }}
            />
          </CustomLeftBox>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Service;
