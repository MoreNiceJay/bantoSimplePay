import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../../Constants"

const useStyles = makeStyles({
  returnDiv: {}
});
export default function App(props) {
  const classes = useStyles();
  const [stationId, setStationId] = React.useState("");
  const [data, setData] = React.useState("");

  const bull = <span className={classes.bullet}>•</span>;

  // function checkMobile() {
  //   var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

  //   if (varUA.indexOf("android") > -1) {
  //     //안드로이드
  //     return "android";
  //   } else if (
  //     varUA.indexOf("iphone") > -1 ||
  //     varUA.indexOf("ipad") > -1 ||
  //     varUA.indexOf("ipod") > -1
  //   ) {
  //     //IOS
  //     return "ios";
  //   } else {
  //     //아이폰, 안드로이드 외
  //     return "other";
  //   }
  // }

  // React.useEffect(() => {
  //   sessionStorage.clear();

  //   axios
  //     .all([
  //       axios.post(constants.hosts.banto + "/banto2/app/user/checkUserPayment", {
  //         userId: "Fs9W4ytEr5MIoqaNoezFgyxAd4v1"
  //       }),
  //       axios.post(constants.hosts.banto + "/banto2/app/rent/checkUserRenting", {
  //         userId: "Fs9W4ytEr5MIoqaNoezFgyxAd4v1"
  //       })
  //     ])
  //     .then(
  //       axios.spread((firstRes, secondRes) => {
  //         const payment = firstRes.data.data.payment;
  //         const bRenting = secondRes.data.data.bRenting;
  //         window.alert(payment, bRenting);
  //         window.alert(bRenting);
  //         // window.alert(sessionStorage.getItem("userId"));
  //         if (bRenting) {
  //           // sessionStorage.clear();
  //           window.alert(
  //             "현재 대여중인 배터리가 있습니다. 반납 완료 후에 빌려주세요"
  //           );
  //         } else if (payment === "none") {
  //           console.log("일로왔음1");
  //           // props.history.push("/simple/purchase");
  //           // window.alert("1");
  //           // window.location.href = "/kakaopayregisterforweb";
  //           // window.location.href = "/simple/purchase";
  //         } else {
  //           console.log("일로왔음");
  //           // window.alert("2");
  //           // window.location.href = "/purchaseforweb";
  //         }
  //       })
  //     );
  //   // console.log(props.location.state);
  //   if (props.location.state !== undefined) {
  //     setStationId(props.location.state.stationId);
  //   }
  // }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "#0B0B0C",
          height: "100vh",
          width: "100vw"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#EAEBF1",
            lineHeight: "36px",
            fontSize: "24px",
            fontWeight: "600",
            paddingTop: "50%",
            backgroundColor: "#0B0B0C"
          }}
        >
          <img
            style={{ height: "120px", width: "auto" }}
            src={require("../../assets/img/일러 - 실패.png")}
            alt="complete"
          ></img>

          <p style={{ marginTop: "50px" }}>대여 실패</p>
          <p
            onClick={() => {
              window.open("https://pf.kakao.com/_eWuNT", "_blank");
            }}
            style={{
              marginTop: "12px",
              textAlign: "center",
              fontFamily: "Noto Sans KR",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "21px",
              /* identical to box height */

              textAlign: "center",
              textDecorationLine: "underline",

              /* Light */

              color: "#EAEBF1"
            }}
          >
            카카오 고객센터 연결
          </p>
        </div>
      </div>
    </>
  );
}
