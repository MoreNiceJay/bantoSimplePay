import React from "react";

import { Grid, Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomCenterBox from "./CustomCenterBox";

import { useHistory } from "react-router-dom";

const MainTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 700,
  fontSize: { xs: 12, lg: 16 },
}));

const SubTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: { xs: 8, lg: 14 },
}));

function Footer() {
  const history = useHistory();

  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{ backgroundColor: "#2C2C2C", marginTop: 10, padding: 5 }}
      >
        <Grid item xs={12} lg={3} sx={{ marginBottom: { xs: 8, lg: 0 } }}>
          <MainTypography
            fontSize={{
              xs: 30,
              lg: 40,
            }}
          >
            BANTO
          </MainTypography>
        </Grid>
        <Grid item xs={12} lg={2} sx={{ marginBottom: { xs: 8, lg: 0 } }}>
          <Stack spacing={2}>
            <MainTypography>Information</MainTypography>
            <SubTypography
              onClick={() => {
                history.push("/");
              }}
            >
              Home
            </SubTypography>
            <SubTypography
              onClick={() => {
                history.push("/about");
              }}
            >
              About
            </SubTypography>
            <SubTypography
              onClick={() => {
                history.push("/project");
              }}
            >
              Projects
            </SubTypography>
            <SubTypography
              onClick={() => {
                history.push("/partners");
              }}
            >
              Partners
            </SubTypography>
            <SubTypography
              onClick={() => {
                history.push("/contact");
              }}
            >
              Contacts
            </SubTypography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ marginBottom: { xs: 8, lg: 0 } }}>
          <Stack spacing={{ xs: 2, lg: 4 }}>
            <MainTypography>Contacts</MainTypography>
            <Box>
              <SubTypography>
                <LocationOnIcon />
                서울특별시 서초구 서초동 1362 B-109호
              </SubTypography>
            </Box>
            <Box>
              <SubTypography>
                <CallIcon />
                070.7010.7200
              </SubTypography>
            </Box>
            <Box>
              <SubTypography>
                <MailIcon />
                jaylee@banto.io
              </SubTypography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Stack spacing={2}>
            <MainTypography>Social Media</MainTypography>
            <Grid item>
              <FacebookIcon sx={{ color: "white" }} />
              <LinkedInIcon
                sx={{ color: "white" }}
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/banto_service/",
                    "_blank"
                  );
                }}
              />
            </Grid>
          </Stack>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#2C2C2C",
          padding: 5,
          borderTop: "1px solid #C8C8C8",
        }}
      >
        <CustomCenterBox>
          <Typography sx={{ color: "#C8C8C8" }}>
            © 2021 All Rights Reserved
          </Typography>
        </CustomCenterBox>
      </Grid>
    </>
  );
}

export default Footer;
