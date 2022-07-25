import React from "react";

import { Grid, Stack, Typography } from "@mui/material";

import MiniImage1 from "../../assets/img/home/mini_station1.png";
import MiniImage2 from "../../assets/img/home/mini_station2.png";
import MiniImage3 from "../../assets/img/home/phone_battery2.png";
import CustomButton from "../../components/CustomButton";
import CustomLeftBox from "../../components/CustomLeftBox";
import CustomCenterBox from "../../components/CustomCenterBox";

function AbuoutUs() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      bgcolor="#ECECED"
      p={4}
      sx={{ marginTop: { xs: 10, lg: 30 } }}
    >
      <Grid item xs={6} lg={3}>
        <CustomCenterBox>
          <img src={MiniImage2} alt="" width="100%" />
        </CustomCenterBox>
      </Grid>
      <Grid item xs={6} lg={3}>
        <CustomCenterBox>
          <img src={MiniImage1} alt="" width="80%" />
        </CustomCenterBox>
        <CustomCenterBox>
          <img src={MiniImage3} alt="" width="80%" />
        </CustomCenterBox>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack spacing={2}>
          <CustomLeftBox>
            <Typography fontSize={{ lg: 54, xs: 28 }} color="#BDBDBD">
              ABOUT US
            </Typography>
          </CustomLeftBox>

          <CustomLeftBox>
            <Typography fontSize={{ lg: 20, xs: 12 }}>
              반토는 여러분이 마주하는 매 순간의
            </Typography>
            <Typography fontSize={{ lg: 20, xs: 12 }}>
              불편한 충전 생활을 편하게 만들어 줄
            </Typography>
            <Typography fontSize={{ lg: 20, xs: 12 }}>
              만들어 줄 보조배터리 서비스입니다.
            </Typography>
          </CustomLeftBox>

          <CustomLeftBox>
            <Typography fontSize={{ lg: 20, xs: 12 }}>
              어느 공간에서도 센스있게 잘 어우러지겠금 만든
            </Typography>
            <Typography fontSize={{ lg: 20, xs: 12 }}>
              세련된 디자인이며, 색감과 사이즈에 집중적으로
            </Typography>
            <Typography fontSize={{ lg: 20, xs: 12 }}>
              신경을 쓴 보조배터리 대여 기기입니다.
            </Typography>
          </CustomLeftBox>

          <CustomLeftBox>
            <Typography fontSize={{ lg: 20, xs: 12 }}>
              "누구나 나의 공간에 두고 싶은 반토 서비스입니다"
            </Typography>
          </CustomLeftBox>

          <CustomLeftBox>
            <CustomButton text="더 알아보기" />
          </CustomLeftBox>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AbuoutUs;
