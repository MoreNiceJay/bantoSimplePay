import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import SelectionPage from "./views/SelectionPage.js";
import PayRegistSuccess from "./views/PayRegistSuccess.js";

// simplePay
import SimplePayKakaoPay from "./views/simplePay/SimplePayKakaoPay.js";
import SimplePayLogin from "./views/simplePay/SimplePayLogin.js";
import SimplePayPurchase from "./views/simplePay/SimplePayPurchase.js";
import SimplePayRentComplete from "./views/simplePay/SimplePayRentComplete.js";
import SimplePayRentFail from "./views/simplePay/SimplePayRentFail.js";
import SimplePayRenting from "./views/simplePay/SimplePayRenting.js";

import ApproveKakaoPay from "./views/simplePay/ApproveKakaoPay.js";

import GeoPolicy from "./views/policies/GeoPolicy.js";
import PrivateInfo from "./views/policies/PrivateInfo.js";
import RefundPolicy from "./views/policies/RefundPolicy.js";
import ServicePolicy from "./views/policies/ServicePolicy.js";
import RentPolicy from "./views/policies/RentPolicy.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route Z exact path="/" component={App} />
        <Route Z exact path="/select" component={SelectionPage} />
        <Route Z exact path="/payregistsuccess" component={PayRegistSuccess} />

        {/* SimplePay */}
        <Route Z exact path="/simple/kakaopay" component={SimplePayKakaoPay} />
        <Route Z exact path="/simple/login" component={SimplePayLogin} />
        <Route Z exact path="/simple/purchase" component={SimplePayPurchase} />
        <Route
          Z
          exact
          path="/simple/rentcomplete"
          component={SimplePayRentComplete}
        />
        <Route Z exact path="/simple/rentfail" component={SimplePayRentFail} />
        <Route Z exact path="/simple/renting" component={SimplePayRenting} />
        <Route path="/approveKakaoPay" component={ApproveKakaoPay} />

        {/* policy */}
        <Route Z exact path="/policy/geo_policy" component={GeoPolicy} />
        <Route Z exact path="/policy/private_info" component={PrivateInfo} />
        <Route Z exact path="/policy/refund_policy" component={RefundPolicy} />
        <Route
          Z
          exact
          path="/policy/service_policy"
          component={ServicePolicy}
        />
        <Route Z exact path="/policy/rent_policy" component={RentPolicy} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
