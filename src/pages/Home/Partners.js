import React from "react";

import { Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CustomCenterBox from "../../components/CustomCenterBox";
import CustomLeftBox from "../../components/CustomLeftBox";
import IntroduceText from "../../components/IntroduceText";
import CustomButton from "../../components/CustomButton";

function Partners() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: { xs: 10, lg: 30 } }}
    >
      <Grid item xs={12} lg={12}>
        <IntroduceText firstLine="Become" secondLine="our PARTNER" />
      </Grid>
      <Grid item xs={12} lg={12}>
        <CustomCenterBox>
          <Typography
            fontSize={{ lg: 48, xs: 20 }}
            color="#8D8D8D"
            fontWeight="700"
          >
            바로 시작하세요 간단합니다
          </Typography>
          <Typography fontSize={{ lg: 36, xs: 13 }} color="#72BA75">
            반토 파트너스와 함께 시작하세요
          </Typography>
        </CustomCenterBox>
      </Grid>
      <Grid item xs={12} lg={12}>
        <CustomCenterBox>
          <CustomButton text="제안서 다운받기" />
        </CustomCenterBox>
      </Grid>

      <Grid
        container
        item
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} lg={2}>
          <CustomLeftBox>
            <Typography fontSize={{ lg: 14, xs: 12 }}>
              앱스토어 및 구글플레이에서
            </Typography>
            <Typography fontSize={{ lg: 14, xs: 12 }}>
              앱 다운을 받습니다
            </Typography>
          </CustomLeftBox>
        </Grid>

        <Grid item xs={2} lg={1}>
          <CustomCenterBox>
            <ArrowForwardIosIcon
              sx={{
                color: "#72BA75",
                fontSize: { lg: 50, xs: 20 },
              }}
            />
          </CustomCenterBox>
        </Grid>

        <Grid item xs={6} lg={2}>
          <CustomLeftBox>
            <Typography fontSize={{ lg: 14, xs: 12 }}>
              반토 파트너스에서
            </Typography>
            <Typography fontSize={{ lg: 14, xs: 12 }}>
              회원가입합니다
            </Typography>
          </CustomLeftBox>
        </Grid>

        <Grid item xs={2} lg={1}>
          <CustomCenterBox>
            <ArrowForwardIosIcon
              sx={{
                color: "#72BA75",
                fontSize: { lg: 50, xs: 20 },
              }}
            />
          </CustomCenterBox>
        </Grid>

        <Grid item xs={6} lg={2}>
          <CustomLeftBox>
            <Typography fontSize={{ lg: 14, xs: 12 }}>
              스테이션 필요한 장소를
            </Typography>
            <Typography fontSize={{ lg: 14, xs: 12 }}>
              찾아 설치합니다
            </Typography>
          </CustomLeftBox>
        </Grid>

        <Grid item xs={2} lg={1}>
          <CustomCenterBox>
            <ArrowForwardIosIcon
              sx={{
                color: "#72BA75",
                fontSize: { lg: 50, xs: 20 },
              }}
            />
          </CustomCenterBox>
        </Grid>

        <Grid item xs={8} lg={2}>
          <CustomLeftBox>
            <Typography fontSize={{ lg: 14, xs: 12 }}>
              앱에서 수익 확인 탭을 통해
            </Typography>
            <Typography fontSize={{ lg: 14, xs: 12 }}>
              들어오는 수익을 확인합니다
            </Typography>
          </CustomLeftBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Partners;
