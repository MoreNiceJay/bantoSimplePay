import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
    console.log(checkMobile());
    // if (checkMobile() === "other") {
    //   window.alert("모바일로 이용해주세요");
    //   props.history.push("/");
    // }
    if (props.location.state !== undefined) {
      setStationId(props.location.state.stationId);

      sessionStorage.setItem("stationId", props.location.state.stationId);
    }
  }, []);
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
            paddingTop: "50px"
          }}
        >
          <img
            style={{ width: "196px", height: "auto" }}
            src={require("../assets/img/light.png")}
          ></img>
          <p
            style={{
              color: "white",
              height: "42px",
              alignText: "left",
              position: "relative",
              color: "#EAEBF1",
              opacity: "0.8",
              bottom: "12px",
              paddingTop: "30px",
              fontSize: "16px"
            }}
          >
            반토 보조배터리 대여서비스
          </p>
        </div>

        <div
          style={{
            backgroundColor: "black",
            height: "80%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "30px"
          }}
        >
          <div
            style={{
              backgroundColor: "#EAEBF1",
              boxShadow: "0px 5px 14px #000000",
              width: "calc(100% - 64px)",
              height: "184px",
              borderRadius: "20px"
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
            <div
              style={{
                marginLeft: "24px",
                height: "100%",
                display: "flex",
                flexDirection: "column"
                // justifyContent: "space-evenly"
              }}
            >
              <p
                style={{
                  marginTop: "32px",
                  fontSize: "26px",
                  fontFamily: "Noto Sans KR",
                  fontWeight: "900"
                }}
              >
                앱 다운
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "rows",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div style={{ marginTop: "4px" }}>
                  <p
                    style={{
                      lineHeight: "24px",
                      fontFamily: "Noto Sans KR",
                      fontSize: "14px"
                    }}
                  >
                    이벤트, 쿠폰 등 다양한 혜택을
                  </p>
                  <p
                    style={{
                      fontFamily: "Noto Sans KR",
                      fontSize: "14px"
                    }}
                  >
                    받을 수 있습니다.
                  </p>
                </div>

                <img
                  style={{
                    marginRight: "24px",
                    height: "52px",
                    width: "auto",
                    marginTop: "3.5px",
                    marginBottom: "3.5px"
                  }}
                  src={require("../assets/img/card - logo.png")}
                ></img>
              </div>

              <div
                style={{
                  marginTop: "20px"
                }}
              >
                <p
                  style={{
                    backgroundColor: "#15151A",
                    color: "white",
                    borderRadius: "8px",
                    display: "inline",
                    padding: "4px 12px",
                    fontSize: "14px",
                    fontWeight: "600"
                  }}
                >
                  신용카드 + 카카오페이
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#0B0B0C",
              height: "80%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "40px"
            }}
          >
            <div
              style={{
                backgroundColor: "#FFD95A",
                boxShadow: "0px 5px 14px #000000",
                width: "calc(100% - 64px)",
                height: "184px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column"
              }}
              onClick={() => {
                props.history.push({
                  // pathname: "/simple/login",
                  pathname: "simple/purchase",

                  state: { stationId: stationId }
                });
              }}
            >
              <div
                style={{
                  marginLeft: "24px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                  // justifyContent: "space-evenly"
                }}
              >
                <p
                  style={{
                    marginTop: "32px",
                    fontSize: "26px",
                    fontFamily: "Noto Sans KR",
                    fontWeight: "900"
                  }}
                >
                  간편 이용
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "rows",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div style={{ marginTop: "4px" }}>
                    <p
                      style={{
                        lineHeight: "24px",
                        fontFamily: "Noto Sans KR",
                        fontSize: "14px"
                      }}
                    >
                      앱 다운 없이 배터리를
                    </p>
                    <p
                      style={{
                        fontFamily: "Noto Sans KR",
                        fontSize: "14px"
                      }}
                    >
                      대여할 수 있습니다
                    </p>
                  </div>

                  <img
                    style={{
                      marginRight: "24px",
                      height: "59px"
                    }}
                    src={require("../assets/img/payment_icon_vertical_large 1.png")}
                  ></img>
                </div>

                <div
                  style={{
                    marginTop: "20px"
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "#15151A",
                      color: "#FFD95A",
                      borderRadius: "8px",
                      display: "inline",
                      padding: "4px 12px",
                      fontSize: "14px",
                      fontWeight: "600"
                    }}
                  >
                    카카오페이
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
