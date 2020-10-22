import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({});
export default function App(props) {
  const classes = useStyles();
  const [stationId, setStationId] = React.useState("");
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
          {/* <img src={require("../assets/img/logo.png")}></img> */}
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
          이용방법을 선택해주세요
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
              backgroundColor: "grey",
              width: "90%",
              height: "35%",
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={() => {
              window.alert(checkMobile());
              if (checkMobile() === "ios") {
                window.open(
                  "https://apps.apple.com/kr/app/%EB%B0%98%ED%86%A0-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-%EB%8C%80%EC%97%AC-%EC%84%9C%EB%B9%84%EC%8A%A4/id1479328305",
                  "_blank"
                );
              } else if (checkMobile() === "android") {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.Banto.Battery",
                  "_blank"
                );
              }
              props.history.push("/");
            }}
          >
            <p style={{ fontSize: "32px" }}>앱 다운</p>
            <p style={{ marginTop: "8px" }}>
              이벤트와 쿠폰을 이용할 수 있습니다
            </p>
          </div>

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
            onClick={() => {}}
          >
            <p style={{ fontSize: "32px" }}>간편 결제</p>
            <p style={{ marginTop: "8px" }}>
              앱 다운없이 배터리를 대여할수 있습니다
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
