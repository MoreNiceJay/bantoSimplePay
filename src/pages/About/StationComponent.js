import React from "react";

import { Grid, Stack } from "@mui/material";
import IntroduceText from "../../components/IntroduceText";
import CustomCenterBox from "../../components/CustomCenterBox";
import CustomButton from "../../components/CustomButton";

import station1 from "../../assets/img/about/station1.png";
import station2 from "../../assets/img/about/station2.png";
import station3 from "../../assets/img/about/station3.png";
import station4 from "../../assets/img/about/station4.png";
import bigStation from "../../assets/img/about/big_station.png";

import { useHistory } from "react-router-dom";

function StationComponent() {
  const history = useHistory();

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: { xs: 10, lg: 30 },
      }}
    >
      <Grid item xs={12} lg={12}>
        <IntroduceText firstLine="스테이션" secondLine="구성품" />
      </Grid>
      <Grid item xs={12} lg={12}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <CustomCenterBox>
            <img src={station1} alt="" width="100%" />
          </CustomCenterBox>
          <CustomCenterBox>
            <img src={station2} alt="" width="100%" />
          </CustomCenterBox>
          <CustomCenterBox>
            <img src={station3} alt="" width="100%" />
          </CustomCenterBox>
          <CustomCenterBox>
            <img src={station4} alt="" width="100%" />
          </CustomCenterBox>
        </Stack>
        <CustomCenterBox>
          <img src={bigStation} alt="" width="100%" />
        </CustomCenterBox>
      </Grid>
      <Grid item xs={12} lg={12}>
        <CustomCenterBox>
          <CustomButton
            text="설치 방법"
            onClick={() => {
              history.push("/about/guide");
            }}
          />
        </CustomCenterBox>
      </Grid>
    </Grid>
  );
}

export default StationComponent;
