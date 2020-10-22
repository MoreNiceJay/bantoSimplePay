import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles({});
export default function App(props) {
  const classes = useStyles();
  const [stationId, setStationId] = React.useState("");
  const [data, setData] = React.useState("");

  const bull = <span className={classes.bullet}>•</span>;

  function checkMobile() {
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if (varUA.indexOf("android") > -1) {
      //안드로이드
      return "android";
    } else if (
      varUA.indexOf("iphone") > -1 ||
      varUA.indexOf("ipad") > -1 ||
      varUA.indexOf("ipod") > -1
    ) {
      //IOS
      return "ios";
    } else {
      //아이폰, 안드로이드 외
      return "other";
    }
  }
  function registerKakaoPay(userId) {
    axios
      .post("https://mulli.world/banto2/app/user/registerKakaoPay", {
        userUuid: userId
      })
      .then((res) => {
        setData(res.data);

        if (
          String(window.location).search("s636o.csb.app") > 0 &&
          res.data.code === 200
        ) {
          window.location.href = res.data.data.redirectUrl;
          // window.open(res.data.data.redirectUrl, "_blank");
          // window.open(res.data.data.redirectUrl);
          // window.open(res.data.data.redirectUrl, "_blank");
        }
      });
  }

  React.useEffect(() => {
    // console.log(props.location.state);
    if (props.location.state !== undefined) {
      setStationId(props.location.state.stationId);
    }
  }, []);
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
          <img src={require("../../assets/img/logo.png")}></img>
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
          결제를 위해 카카오페이를 등록합니다
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
            onClick={() => {
              registerKakaoPay(sessionStorage.getItem("userId"));
            }}
          >
            <p style={{ fontSize: "32px" }}>카카오페이 등록</p>
            <p style={{ marginTop: "8px" }}>
              카카오페이를 결제수단으로 이용합니다
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
