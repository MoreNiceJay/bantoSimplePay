import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles({});
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
  //       axios.post("https://mulli.world/banto2/app/user/checkUserPayment", {
  //         userId: "Fs9W4ytEr5MIoqaNoezFgyxAd4v1"
  //       }),
  //       axios.post("https://mulli.world/banto2/app/rent/checkUserRenting", {
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
            paddingTop: "30%",
            backgroundColor: "#0B0B0C"
          }}
        >
          <img src={require("../assets/img/registSuccess.png")}></img>

          <p style={{ marginTop: "50px" }}>등록이 완료됐습니다!</p>
          <p>
            지금 바로 <span style={{ color: "#00E676" }}>보조배터리</span>를
          </p>
          <p>대여할 수 있습니다</p>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "44px",
            width: "100%"
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#EAEBF1",
              fontSize: "18px",
              fontWeight: "500"
            }}
          >
            대여 하시겠습니까?
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginTop: "24px",
              textAlign: "center"
            }}
          >
            <Link
              style={{
                backgroundColor: "#0B0B0C",
                border: "2px solid #535362",
                boxSizing: "border-box",
                borderRadius: "13px",
                color: "#535362",
                height: "24px",
                width: "50%",
                marginRight: "4px",
                marginLeft: "32px",
                textAlign: "center",
                alignItems: "center",
                height: "48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: "600"
              }}
              to="/"
            >
              다음에
            </Link>
            <Link
              style={{
                backgroundColor: "#EAEBF1",
                border: "none",
                boxSizing: "border-box",
                borderRadius: "13px",
                color: "#535362",
                height: "24px",
                width: "50%",
                marginLeft: "4px",
                marginRight: "32px",
                height: "48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: "600"
              }}
              to="simple/purchase"
            >
              대여 할게요
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
