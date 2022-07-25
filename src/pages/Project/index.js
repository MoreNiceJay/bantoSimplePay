import React from "react";

import { Grid, Typography } from "@mui/material";
import Page from "../../components/Page";
import CustomCenterBox from "../../components/CustomCenterBox";
import WarningIcon from "@mui/icons-material/Warning";

function index() {
  return (
    <Page title="PROJECTS">
      <Grid container>
        <Grid item xs={12} lg={12}>
          <CustomCenterBox height="125px" sx={{ padding: 3 }}>
            <WarningIcon color="warning" sx={{ fontSize: 50 }} />
            <Typography>준비 중입니다</Typography>
          </CustomCenterBox>
        </Grid>
      </Grid>
    </Page>
  );
}

export default index;
