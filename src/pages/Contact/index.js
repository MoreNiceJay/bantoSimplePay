import React from "react";

import Page from "../../components/Page";
import IntroduceText from "../../components/IntroduceText";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { Grid, CircularProgress, Typography, Button } from "@mui/material";
import CustomCenterBox from "../../components/CustomCenterBox";
import CustomLeftBox from "../../components/CustomLeftBox";

const googleMapsApiKey = "AIzaSyBRsdmnSRwU4va6sYZEs7pyi2MZ9XhgvPw";

function Index() {
  const mapOptions = {
    fullscreenControl: false,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    minZoom: 11,
    maxZoom: 20,
  };

  const center = {
    lat: 37.48617972351718,
    lng: 127.03250444868249,
  };

  return (
    <Page title="CONTACTS">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={3}
      >
        <Grid item xs={12} lg={4}>
          <IntroduceText firstLine="Contact" secondLine="Information" />
          <CustomLeftBox mt={4} mb={4}>
            <Typography fontWeight={700}>반토 주식회사</Typography>
            <Typography fontWeight={300}>
              서울특별시 서초구 서초동 1362 B-109호
            </Typography>
          </CustomLeftBox>
          <CustomLeftBox mt={4} mb={4}>
            <Typography fontWeight={500}>070.7010.7200</Typography>
          </CustomLeftBox>
          <CustomLeftBox mt={4} mb={4}>
            <Typography fontWeight={300}>jaylee@banto.io</Typography>
          </CustomLeftBox>
          <CustomLeftBox mt={4} mb={4}>
            <Button
              sx={{
                color: "white",
                width: "222px",
                height: "71px",
                background: "#333333",
                borderRadius: 0,
              }}
            >
              CONTACT US
            </Button>
          </CustomLeftBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <CustomCenterBox
            sx={{
              height: 520,
            }}
          >
            <LoadScript
              googleMapsApiKey={googleMapsApiKey}
              loadingElement={
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                >
                  <CircularProgress color="success" />
                </Grid>
              }
            >
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={center}
                zoom={17}
                options={mapOptions}
              >
                <Marker key={1} position={center} />
              </GoogleMap>
            </LoadScript>
          </CustomCenterBox>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Index;
