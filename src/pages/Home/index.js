import React, { useEffect } from "react";

import Page from "../../components/Page";
import Main from "./Main";
import Partners from "./Partners";
import AbuoutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import ContactUs from "./ContactUs";

function Index({ history }) {
  useEffect(() => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const stationId = params.get("stationId"); // bar

    if (stationId !== null) {
      history.push({
        pathname: "/select",
        state: { stationId: stationId },
      });
    }
  }, []);

  return (
    <Page title="HOME">
      <Main />
      <AbuoutUs />
      <WhyUs />
      <Partners />
      <ContactUs />
    </Page>
  );
}

export default Index;
