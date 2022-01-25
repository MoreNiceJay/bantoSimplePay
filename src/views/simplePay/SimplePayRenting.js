import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import constants from "../../Constants"
import { Link } from "react-router-dom";
import moment from 'moment';

import Inquiry from "./components/Inquiry";
import DesText from "./components/DesText";
import Button from "./components/Button"
import Card from "./components/Card"
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { StepButton } from "@material-ui/core";

let interval = 0

const useStyles = makeStyles({});
export default function App(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [usage, setUsage] = React.useState(null)
  const [policyUrl, setPolicyUrl] = React.useState(
    "https://bantoweb.xyz/policy/service_policy"
  );

  const descriptionElementRef = React.useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [scroll, setScroll] = React.useState("paper");


  const [stationId, setStationId] = React.useState("");
  const bull = <span className={classes.bullet}>•</span>;
  const [returned, setReturned] = React.useState(null)
  const [rented, setRented] = React.useState(null)
  const [rentStatus, setRentStatus] = React.useState(null)

  React.useEffect(() => {
    axios
      .post(constants.hosts.banto + "/banto2/app/user/checkUserPayment", {
        userId: sessionStorage.getItem("userId")
      })
      .then((res) => {
        if (res.data.code !== 200) {
        }
        const payment = res.data.data.payment;
        let elem = document.getElementById("payment");
        if (payment === "kakaoPay") {
          elem.innerHTML = "카카오페이";
        } else if (payment === "creditCard") {
          elem.innerHTML = "신용카드";
        } else {
        }
      });
  }, [])

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
    // 지우기
    // setStationId("BTSS20210100500");

    if (props.location.state !== undefined) {
      setStationId(props.location.state.stationId);
      // 지우기
      // setStationId("BTSS20210100500");
    }
  }, []);








  React.useEffect(() => {
    (async () => {
      const result = await axios.post(constants.hosts.banto + "/banto2/app/rent/lastRent", {
        userId: sessionStorage.getItem("userId")
        // 지우기
        // userId: "wmLmGkVJwwhuCqkNlgod45kJ7xb2"
      })

      if (result.data.code !== 200) {
        window.alert("시스템 에러: 반토 고객센터에 문의하세요");
        // props.history.push("/");
        return;
      }
      setRentStatus(result.data.data.bRenting && result.data.data.bRenting.status)
      setReturned(result.data.data.bRenting && result.data.data.bRenting.returnTimeStamp)
      setRented(result.data.data.bRenting && result.data.data.bRenting.rentalTimeStamp)

      return;

    })()


  }, [])

  function timer() {

    setInterval(function () {
      setUsage(intervalBetween(rented))
    }, 1000);
  }
  timer()


  const intervalBetween = (rentTime) => {
    if (rentTime === null) {
      return "-:--:--"
    }
    var rentalTime = moment(rentTime)
    var now = moment()

    var diff = now.diff(rentalTime, 'seconds', true)
    const formatted = moment.utc(diff * 1000).format('H:mm:ss')

    return formatted
  }

  function leadingZeros(n, digits) {
    var zero = "";
    n = n.toString();

    if (n.length < digits) {
      for (let i = 0; i < digits - n.length; i++) zero += "0";
    }
    return zero + n;
  }
  function getTimeStamp(time) {
    var d = new Date(time);
    var s =
      leadingZeros(d.getFullYear(), 4) +
      "-" +
      leadingZeros(d.getMonth() + 1, 2) +
      "-" +
      leadingZeros(d.getDate(), 2) +
      " " +
      leadingZeros(d.getHours(), 2) +
      ":" +
      leadingZeros(d.getMinutes(), 2) +
      ":" +
      leadingZeros(d.getSeconds(), 2);

    return s;
  }

  return (
    <>

      <body
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0B0B0C",
          overflow: "auto"
        }}
      >
        <div
          style={{ position: "flex", textAlign: "center", marginTop: "64px" }}
        >
          <p
            style={{
              height: " 64px",
              fontFamily: "Noto Sans KR",
              fontStyle: " normal",
              fontWeight: " bold",
              fontSize: " 20px",
              lineHeight: " 30px",
              color: "#eaebf1",
              letterSpacing: "2px"

            }}
          >
            이용시간
          </p>
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "50px",
              lineHeight: "74px",
              color: "#00e676",
              height: "74px"
            }}
          >
            {rentStatus === "return_payment_fail" ? "카카오페이 \n\n잔액 부족" : usage}
          </p>
        </div>

        <div
          style={{ marginTop: "56px", marginLeft: "16px", marginRight: "16px" }}
        >
          <div
            style={{
              background: "#000000",
              border: "2px solid #242427",
              boxSizing: "border-box",
              borderRadius: "15px"
            }}
          >
            <div
              style={{
                fontFamily: "Noto Sans KR",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#c0c1c5",
                marginLeft: "18px",
                marginTop: "40px"
              }}
            >
              <DesText >
                *사용이 끝나신 배터리는 스테이션으로 다시 반납해 주세요
              </DesText>
              <DesText>
                *추가 결제는 반납과 함께 이루어집니다
              </DesText>
              <DesText style={{ marginBottom: "50px", }}>
                *최종 결제내역은 문자 혹은 카카오톡으로 확인할 수 있습니다.
              </DesText>
            </div>
            <div
              style={{
                border: "1px solid #050505",
                marginLeft: "18px",
                marginRight: "18px",
                marginBottom: "16px"
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: "16px",
                marginBottom: "16px",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginBottom: "16px",
                  flexDirection: "rows",
                  justifyContent: "space-between",
                  marginLeft: "16px",
                  marginRight: "16px",
                  color: "#c0c1c5"
                }}
                className="purchaseDetailLittleContainer"
              >
                <p
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#94949d"
                  }}
                  className="purchaseDetailLittleTextTag"
                >
                  대여시간
                </p>
                <p
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#EAEBF1"
                  }}
                  className="purchaseDetailLittleText"
                  id="storeName"
                >
                  {rented && getTimeStamp(rented)}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "16px",
                  marginBottom: "16px",
                  flexDirection: "rows",
                  justifyContent: "space-between",
                  marginLeft: "16px",
                  marginRight: "16px",
                  color: "#c0c1c5"
                }}
                className="purchaseDetailLittleContainer"
              >
                <p
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#94949d"
                  }}
                  className="purchaseDetailLittleTextTag"
                >
                  대여지점
                </p>
                <p
                  style={{
                    fontFamily: "Noto Sans KRㄴ",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#EAEBF1"
                  }}
                  className="purchaseDetailLittleText"
                >
                  대여지점
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "16px",
                  marginBottom: "16px",
                  flexDirection: "rows",
                  justifyContent: "space-between",
                  marginLeft: "16px",
                  marginRight: "16px",
                  color: "#c0c1c5"
                }}
                className="purchaseDetailLittleContainer"
              >
                <p
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#94949d"
                  }}
                  className="purchaseDetailLittleTextTag"
                >
                  추가 이용료(10분/150원)
                </p>
                <p
                  style={{
                    color: "#EAEBF1",
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px"
                  }}
                  className="purchaseDetailLittleText"
                >
                  {/* {priceInfo && priceInfo.data.extraTerm}시간/ */}
                  {/* {priceInfo && priceInfo.data.extraPrice}원 */}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "16px",
                  marginBottom: "16px",
                  flexDirection: "rows",
                  justifyContent: "space-between",
                  marginLeft: "16px",
                  marginRight: "16px",
                  color: "#c0c1c5"
                }}
                className="purchaseDetailLittleContainer"
              >
                <p
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#94949d"
                  }}
                  className="purchaseDetailLittleTextTag"
                >
                  결제수단
                </p>
                <p
                  id="payment"
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#EAEBF1"
                  }}
                  className="purchaseDetailLittleText"
                >
                  결제수단
                </p>
              </div>
            </div>
          </div>
        </div>


        <Button
          style={{
            width: "100%",
            height: "66px",
            width: "calc(100% - 32px)",
            background: "#EAEBF1",
            borderRadius: "15px",
            border: "none",
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "27px",
            marginTop: "40px",
            marginLeft: "16px",
            marginRight: "16px"
          }}
          // className="purchaseForWebButton"
          callback={async () => {

            const result = await axios.post(constants.hosts.banto + "/banto2/app/rent/lastRent", {
              userId: sessionStorage.getItem("userId")
              // 지우기
              // userId: "wmLmGkVJwwhuCqkNlgod45kJ7xb2"
            })

            if (result.data.code !== 200) {
              window.alert("시스템 에러: 반토 고객센터에 문의하세요");
              // props.history.push("/");
              return;
            }
            setRentStatus(result.data.data.bRenting && result.data.data.bRenting.status)
            setReturned(result.data.data.bRenting && result.data.data.bRenting.returnTimeStamp)
            setRented(result.data.data.bRenting && result.data.data.bRenting.rentalTimeStamp)

            if (result.data.data.bRenting && result.data.data.bRenting.returnTimeStamp !== null) {
              alert("반납이 완료되었습니다")
              props.history.push("/simple/rentcomplete")
            } else if (result.data.data.bRenting && result.data.data.bRenting.status === "return_payment_fail") {
              alert("반납이 완료되었습니다 \n카카오페이 잔액이 부족해 추후 결제가 필요합니다")
            } else {
              alert(`반납은 10초가량 소요될 수 있습니다.\n\n배터리를 꾸욱 눌러주세요.\n\n반납이 되지 않을시 스테이션 뒤의 전원을 껐다 켜주세요`)
            }



            return { code: 200 }
          }}
        >
          반납 확인
        </Button>
        <DesText style={{
          marginTop: "30px", fontSize: "16px", color: "#c0c1c5",
          marginLeft: "16px", marginRight: "16px", marginBottom: "5px"
        }}>안내사항</DesText>
        <Card>
          <DesText>
            {"-1일당 10시간(9,000원)만 결제 됩니다"}
          </DesText>
          <DesText>
            {"-미반납(3일) 분실비용(29,900원)이 부가 되오니 꼭 반납을 부탁드립니다."}
          </DesText>
        </Card>
        <Inquiry />
        <div
          style={{
            width: "100%",
            height: "300px"
          }}
          className="purchaseForWebEmptySpace"
        />

        <div
          style={{
            position: "fixed",
            left: "16px",
            right: "16px",
            bottom: "50px"
          }}
          className="purchaseForWebButtonContainer"
        ></div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullScreen
          >
            <DialogTitle id="scroll-dialog-title">약관 내용</DialogTitle>
            <DialogContent
              style={{ height: "100%" }}
              dividers={scroll === "paper"}
            >
              <DialogContentText
                style={{ width: "100%", height: "100%" }}
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                {
                  <iframe
                    style={{ width: "100%", height: "100%" }}
                    src={policyUrl}
                  />
                }
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </body>
    </>
  );
}
