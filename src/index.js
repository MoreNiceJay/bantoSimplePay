import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SelectionPage from "./pages/SelectionPage.js";
import PayRegistSuccess from "./pages/PayRegistSuccess.js";

// simplePay
import SimplePayKakaoPay from "./pages/simplePay/SimplePayKakaoPay.js";
import SimplePayLogin from "./pages/simplePay/SimplePayLogin.js";
import SimplePayPurchase from "./pages/simplePay/SimplePayPurchase.js";
import SimplePayRentComplete from "./pages/simplePay/SimplePayRentComplete.js";
import SimplePayRentFail from "./pages/simplePay/SimplePayRentFail.js";
import SimplePayRenting from "./pages/simplePay/SimplePayRenting.js";

import ApproveKakaoPay from "./pages/simplePay/ApproveKakaoPay.js";

import GeoPolicy from "./pages/policies/GeoPolicy.js";
import PrivateInfo from "./pages/policies/PrivateInfo.js";
import RefundPolicy from "./pages/policies/RefundPolicy.js";
import ServicePolicy from "./pages/policies/ServicePolicy.js";
import RentPolicy from "./pages/policies/RentPolicy.js";

import Home from "./pages/Home";
import About from "./pages/About";
import InstallGuide from "./pages/About/Guide";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Partners from "./pages/Partners";
import PartnersGuide from "./pages/Partners/Guide";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import { SnackbarProvider } from "notistack";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={1}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route Z exact path="/" component={Home} />
            <Route Z exact path="/about" component={About} />
            <Route Z exact path="/about/guide" component={InstallGuide} />
            <Route Z exact path="/project" component={Project} />
            <Route Z exact path="/partners" component={Partners} />
            <Route Z exact path="/partners/guide" component={PartnersGuide} />
            <Route Z exact path="/contact" component={Contact} />

            <Route Z exact path="/select" component={SelectionPage} />

            <Route Z exact path="/mypage" component={SelectionPage} />

            <Route
              Z
              exact
              path="/payregistsuccess"
              component={PayRegistSuccess}
            />

            {/* SimplePay */}
            <Route
              Z
              exact
              path="/simple/kakaopay"
              component={SimplePayKakaoPay}
            />
            <Route Z exact path="/simple/login" component={SimplePayLogin} />
            <Route
              Z
              exact
              path="/simple/purchase"
              component={SimplePayPurchase}
            />
            <Route
              Z
              exact
              path="/simple/rentcomplete"
              component={SimplePayRentComplete}
            />
            <Route
              Z
              exact
              path="/simple/rentfail"
              component={SimplePayRentFail}
            />
            <Route
              Z
              exact
              path="/simple/renting"
              component={SimplePayRenting}
            />
            <Route path="/approveKakaoPay" component={ApproveKakaoPay} />

            {/* policy */}
            <Route Z exact path="/policy/geo_policy" component={GeoPolicy} />
            <Route
              Z
              exact
              path="/policy/private_info"
              component={PrivateInfo}
            />
            <Route
              Z
              exact
              path="/policy/refund_policy"
              component={RefundPolicy}
            />
            <Route
              Z
              exact
              path="/policy/service_policy"
              component={ServicePolicy}
            />
            <Route Z exact path="/policy/rent_policy" component={RentPolicy} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  rootElement
);
