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
  //         userUuid: "Fs9W4ytEr5MIoqaNoezFgyxAd4v1"
  //       }),
  //       axios.post("https://mulli.world/banto2/app/rent/checkUserRenting", {
  //         userUuid: "Fs9W4ytEr5MIoqaNoezFgyxAd4v1"
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
          backgroundColor: "black",
          height: "100vh",
          width: "100vw"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "rows",
            alignItems: "center",
            paddingTop: "20px",

            marginLeft: "5%"
          }}
        >
          <img src={require("../assets/img/logo.png")}></img>
          <p
            style={{
              color: "white",

              alignText: "left",
              position: "relative",
              marginLeft: "8px",
              bottom: "12px",
              paddingTop: "30px",
              fontSize: "16px"
            }}
          >
            반토 보조배터리 대여서비스
          </p>
        </div>
        <p
          style={{
            color: "white",
            alignText: "left",
            marginLeft: "5%",
            paddingTop: "20px",
            fontSize: "24px"
          }}
        >
          등록이 완료되었습니다
        </p>
        <div
          style={{
            backgroundColor: "black",
            height: "80%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
          <a href="/simple/purchase">헤이</a>
          <a href="/simple/purchase">헤이</a>
          <Link to="simple/purchase">
            <div
              style={{
                backgroundColor: "white",
                width: "90%",
                height: "35%",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <p style={{ fontSize: "32px" }}>카카오페이 등록</p>
              <p style={{ marginTop: "8px" }}>
                카카오페이를 결제수단으로 이용합니다
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
