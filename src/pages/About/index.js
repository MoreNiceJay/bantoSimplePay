import React from "react";

import Page from "../../components/Page";
import PhotoGallery from "./PhotoGallery";
import StationComponent from "./StationComponent";
import Store from "./Store";

function Index() {
  return (
    <Page title="ABOUT US">
      <PhotoGallery />
      <StationComponent />
      <Store />
    </Page>
  );
}

export default Index;
