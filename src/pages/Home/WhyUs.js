import React from "react";

import { Grid, Typography } from "@mui/material";
import CustomCenterBox from "../../components/CustomCenterBox";

function WhyUs() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      p={1}
      sx={{ marginTop: { xs: 9, lg: 30 } }}
    >
      <Grid item xs={12} lg={12}>
        <CustomCenterBox>
          <Typography
            fontSize={{ lg: 54, xs: 30 }}
            color="#BDBDBD"
            textAlign="left"
          >
            WHY US?
          </Typography>
        </CustomCenterBox>
      </Grid>

      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        xs={12}
        lg={12}
      >
        <Grid item xs={1} lg={1} sx={{ alignSelf: "center" }}>
          <CustomCenterBox>
            <Typography fontSize={{ lg: 170, xs: 55 }} color="#F2F2F2">
              1
            </Typography>
          </CustomCenterBox>
        </Grid>

        <Grid item xs={3} lg={3} sx={{ alignSelf: "center" }}>
          <CustomCenterBox>
            <Typography fontSize={{ lg: 30, xs: 9 }} textAlign="left">
              사용하기 너무나
            </Typography>
            <Typography
              fontSize={{ lg: 30, xs: 9 }}
              textAlign="left"
              fontWeight={700}
            >
              간편하고 쉽다
            </Typography>
          </CustomCenterBox>
        </Grid>

        <Grid item xs={1} lg={1} sx={{ textAlign: "center" }}>
          <CustomCenterBox>
            <Typography fontSize={{ lg: 170, xs: 55 }} color="#F2F2F2">
              2
            </Typography>
          </CustomCenterBox>
        </Grid>

        <Grid item xs={3} lg={3} sx={{ alignSelf: "center" }}>
          <CustomCenterBox>
            <Typography fontSize={{ lg: 30, xs: 9 }} textAlign="left">
              예쁜 <b>Design</b>
            </Typography>
            <Typography fontSize={{ lg: 30, xs: 9 }} textAlign="left">
              <b>Perfect</b> 사이즈
            </Typography>
          </CustomCenterBox>
        </Grid>

        <Grid item xs={1} lg={1} sx={{ textAlign: "center" }}>
          <CustomCenterBox>
            <Typography fontSize={{ lg: 170, xs: 55 }} color="#F2F2F2">
              3
            </Typography>
          </CustomCenterBox>
        </Grid>

        <Grid item xs={3} lg={3} sx={{ alignSelf: "center" }}>
          <CustomCenterBox>
            <Typography fontSize={{ lg: 30, xs: 9 }} textAlign="left">
              <b>Free</b> 설치 OR
            </Typography>
            <Typography
              fontSize={{ lg: 30, xs: 9 }}
              textAlign="left"
              fontWeight={700}
            >
              수익분배
            </Typography>
          </CustomCenterBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WhyUs;
