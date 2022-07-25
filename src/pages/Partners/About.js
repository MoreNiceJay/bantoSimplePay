import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CustomCenterBox from "../../components/CustomCenterBox";
import CustomLeftBox from "../../components/CustomLeftBox";
import IntroduceText from "../../components/IntroduceText";

import salesImage from "../../assets/img/partners/sales.png";
import buyerImage from "../../assets/img/partners/buyer.png";
import storeImage from "../../assets/img/partners/store.png";
import CustomButton from "../../components/CustomButton";

const AboutBox = ({ img, first, second }) => {
  return (
    <Grid container item xs={12} lg={12}>
      <Grid item xs={6} lg={6}>
        <CustomCenterBox>
          <img src={img} alt="" width="100%" />
        </CustomCenterBox>
      </Grid>
      <Grid item xs={6} lg={6}>
        <CustomLeftBox>
          <Stack spacing={{ xs: 0, lg: 10 }}>
            <Typography fontWeight={100} fontSize={{ xs: 20, lg: 40 }}>
              {first}
            </Typography>
            <Typography fontWeight={100} fontSize={{ xs: 10, lg: 14 }}>
              {second}
            </Typography>
            <CustomButton text="더 알아보기" />
          </Stack>
        </CustomLeftBox>
      </Grid>
    </Grid>
  );
};

function About() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: { xs: 10, lg: 30 } }}
    >
      <Grid item xs={12} lg={12}>
        <IntroduceText firstLine="About" secondLine="Partners" />
      </Grid>

      <AboutBox
        img={salesImage}
        first="영업자 SALES"
        second="영업자는 반토와 함께 보조배터리 대여 서비스가 필요한 장소에 영업합니다."
      />
      <AboutBox
        img={buyerImage}
        first="구매자 BUYER"
        second="구매자는 스테이션을 구매해 수익을 창출할 수 있습니다. 구매된 스테이션은 영업자를 통해​ 설치됩니다."
      />
      <AboutBox
        img={storeImage}
        first="가맹점 STORE"
        second="가맹점은 업장에 필요한 스테이션을 무료로 신청하고 설치할 수 있습니다."
      />
    </Grid>
  );
}

export default About;
