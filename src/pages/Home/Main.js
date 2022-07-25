import React from "react";
import { Grid, Typography } from "@mui/material";

import CustomLeftBox from "../../components/CustomLeftBox";
import MainImage from "../../assets/img/home/big_station.png";

function Main() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      p={1}
      sx={{ marginTop: { xs: 0, lg: 10 } }}
    >
      <Grid item xs={4}>
        <CustomLeftBox>
          <Typography fontSize={{ lg: 64, xs: 20 }} fontWeight={700}>
            BANTO
          </Typography>
        </CustomLeftBox>
        <CustomLeftBox>
          <Typography fontSize={{ lg: 54, xs: 16 }} color="#BDBDBD">
            보조배터리
          </Typography>
          <Typography fontSize={{ lg: 54, xs: 16 }}>대여서비스</Typography>
        </CustomLeftBox>
      </Grid>
      <Grid item xs={8}>
        <img src={MainImage} alt="" width="100%" />
      </Grid>
    </Grid>
  );
}

export default Main;
