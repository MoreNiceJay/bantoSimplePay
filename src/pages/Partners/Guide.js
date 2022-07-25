import React from "react";

import { Grid } from "@mui/material";

import Page from "../../components/Page";
import IntroduceText from "../../components/IntroduceText";
import SalesGuide from "./SalesGuide";
import BuyerGuide from "./BuyerGuide";
import StoreGuide from "./StoreGuide";

function Guide() {
  return (
    <Page title="BANTO PARTNERS">
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
        <SalesGuide />
        <BuyerGuide />
        <StoreGuide />
      </Grid>
    </Page>
  );
}

export default Guide;
