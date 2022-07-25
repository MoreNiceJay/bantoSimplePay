import React from "react";

import { Grid } from "@mui/material";

import IntroduceText from "../../components/IntroduceText";
import Page from "../../components/Page";

import installGuide1 from "../../assets/img/about/install_guide1.png";
import installGuide2 from "../../assets/img/about/install_guide2.png";
import CustomCenterBox from "../../components/CustomCenterBox";

function Guide() {
  return (
    <Page title="ABOUT US">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={3}
      >
        <Grid item xs={12} lg={12}>
          <IntroduceText
            firstLine="BANTO STATION"
            secondLine="사용 및 설치 방법"
          />
        </Grid>

        <Grid item xs={12} lg={12}>
          <CustomCenterBox>
            <img src={installGuide1} alt="" width="70%" />
          </CustomCenterBox>
        </Grid>

        <Grid item xs={12} lg={12}>
          <CustomCenterBox>
            <img src={installGuide2} alt="" width="70%" />
          </CustomCenterBox>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Guide;
