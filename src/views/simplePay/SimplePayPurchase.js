import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
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

  // React.useEffect(() => {
  //   // console.log(props.location.state);
  //   // if (props.location.state !== undefined) {
  //   //   setStationId(props.location.state.stationId);
  //   // }
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
              //렌트체크 넣기
              axios
                .post("https://mulli.world/banto2/app/rent/checkUserRenting", {
                  userUuid: sessionStorage.getItem("userId")
                })
                .then((res) => {
                  if (res.data.data.bRenting) {
                    window.alert("현재 대여중입니다. 반납후 다시 시도해주세요");
                    props.history.push("/");
                  }
                  return Promise.resolve("");
                })
                .then(() => {
                  axios
                    .post(
                      "https://mulli.world/banto2/app/rent/requestSimpleRent",
                      {
                        userId: sessionStorage.getItem("userId"),
                        stationId: sessionStorage.getItem("stationId"),
                        couponId: null
                      }
                    )
                    .then((res) => {
                      window.alert(res.data.data);
                      console.log(res.data);
                      if (res.data.code !== 200) {
                        console.log(res.data.msg);
                        props.history.push("/simple/rentfail");
                        return;
                      }
                      props.history.push("/simple/rentcomplete");
                    });
                });
            }}
          >
            <p style={{ fontSize: "32px" }}>빌리기</p>
            <p style={{ marginTop: "8px" }}>
              앱 다운없이 배터리를 대여할수 있습니다
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
