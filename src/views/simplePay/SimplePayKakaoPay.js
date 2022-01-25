import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../../Constants"

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
  async function registerKakaoPay(userId) {
    const registerKakao = await axios
      .post(constants.hosts.banto +
        "/banto2/app/user/registerKakaoPay", {
        userId: userId
      })
    setData(registerKakao.data);
    console.log(String(window.location).search("banto.io") > 0 &&
      registerKakao.data.code === 200)
    if (

      (String(window.location).search("banto.io") > 0 || String(window.location).search("localhost") > 0) &&
      registerKakao.data.code === 200
    ) {
      window.location.href = registerKakao.data.data.redirectUrl;
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
          backgroundColor: "#0B0B0C",
          height: "100vh",
          width: "100vw"
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
        }}
      >
        <div style={{ paddingTop: "50%" }}>
          <p
            style={{
              top: "50%",
              color: "white",
              fontFamily: " Montserrat",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "40px",
              marginLeft: "32px"
            }}
          >
            2 / 2
          </p>
          <div
            style={{
              color: "white",
              marginTop: "16px",
              marginLeft: "32px",
              lineHeight: "27px",
              fontSize: "18px"
            }}
          >
            <p>
              <span style={{ color: "#FFD95A" }}>카카오페이 등록</span>후
            </p>
            <p>보조배터리를 대여할 수 있습니다</p>
          </div>

          <div
            style={{
              backgroundColor: "#0B0B0C",
              height: "80%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "52px"
              // justifyContent: "space-evenly"
            }}
          >
            <div
              style={{
                width: "calc(100% - 32px)",
                height: "56px",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "rows",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #FFD95A",
                backgroundColor: "#0B0B0C",
                color: "#FFD95A",
                marginTop: "100px"
              }}
              onClick={async () => {

                await registerKakaoPay(sessionStorage.getItem("userId"));

              }}
            >
              <img
                style={{
                  marginRight: "10px"
                }}
                src={require("../../assets/img/kakao.png")}
              />
              <p style={{ fontSize: "18px" }}>카카오페이 등록</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
