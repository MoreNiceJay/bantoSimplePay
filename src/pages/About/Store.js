import React from "react";

import { Grid } from "@mui/material";
import IntroduceText from "../../components/IntroduceText";
import CustomCenterBox from "../../components/CustomCenterBox";

import stores from "../../assets/img/about/stores.png";

function Store() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: { xs: 10, lg: 30 },
        mb: { xs: 10, lg: 30 },
      }}
    >
      <Grid item xs={12} lg={12}>
        <IntroduceText firstLine="입점한" secondLine="가맹점" />
      </Grid>
      <Grid item xs={12} lg={12}>
        <CustomCenterBox>
          <img src={stores} alt="" width="100%" />
        </CustomCenterBox>
      </Grid>
    </Grid>
  );
}

export default Store;
