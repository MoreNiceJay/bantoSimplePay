import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "./components/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import constants from "../../Constants";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function App(props) {
  const classes = useStyles();
  const [policyUrl, setPolicyUrl] = React.useState(
    "https://bantoweb.xyz/policy/service_policy"
  );
  const [stationId, setStationId] = React.useState("");
  const bull = <span className={classes.bullet}>•</span>;
  const [priceInfo, setPriceInfo] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    // console.log(props.location.state);
    if (props.location.state !== undefined) {
      setStationId(props.location.state.stationId);
    }
  }, []);
  React.useEffect(() => {
    (async () => {
      const userRentInfo = await axios.post(
        constants.hosts.banto + "/banto2/app/rent/checkUserRenting",
        {
          userId: sessionStorage.getItem("userId"),
        }
      );

      if (userRentInfo.data.code !== 200) {
        window.alert("시스템 에러: 반토 고객센터에 문의하세요");
        // props.history.push("/");
        return;
      }
      if (userRentInfo.data.data.bRenting) {
        // window.alert("현재 대여중입니다. 반납후 다시 시도해주세요");
        props.history.push("/simple/renting");
        return;
      }
    })();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <>
      <div
        style={{
          width: "80%",
          height: "80%",
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
        }}
        className={classes.paper}
      >
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        {/* <SimpleModal /> */}
      </div>
      <Button
        style={{ left: "90%", transform: `translate( -50%)` }}
        variant="contained"
        onClick={handleClose}
      >
        취소
      </Button>
    </>
  );

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
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
  function numberWithCommas(x) {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  React.useEffect(() => {
    (async () => {
      const checkUserPayment = await axios.post(
        constants.hosts.banto + "/banto2/app/user/checkUserPayment",
        {
          userId: sessionStorage.getItem("userId"),
        }
      );

      if (checkUserPayment.data.code !== 200) {
      }
      const payment = checkUserPayment.data.data.payment;
      let elem = document.getElementById("payment");
      if (payment === "kakaoPay") {
        elem.innerHTML = "카카오페이";
      } else if (payment === "creditCard") {
        elem.innerHTML = "신용카드";
      } else {
      }

      const priceInfo = await axios.post(
        constants.hosts.banto + "/banto2/app/price/getPriceInfo",
        {
          stationId: sessionStorage.getItem("stationId"),
        }
      );

      // console.log(res);
      if (priceInfo.status !== 200) {
        console.log(priceInfo.msg);
      }
      setPriceInfo(priceInfo.data);

      const storeName = await axios.post(
        constants.hosts.banto + "/banto2/app/store/getStoreName",
        {
          // stationId: sessionStorage.getItem("stationId")
          stationId: sessionStorage.getItem("stationId"),
        }
      );
      // if (value.data.code !== 200) {
      //   window.alert(value.data.msg);
      //   // props.history.push();
      // }
      let storeelem = document.getElementById("storeName");
      if (typeof elem === "undefined") {
        storeelem.innerHTML = "";
        return;
      }
      storeelem.innerHTML = storeName.data.data.storeName;
    })();
  }, []);
  return (
    <>
      <head></head>
      <body
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0B0B0C",
          overflow: "auto",
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
            }}
          >
            락해제금액
          </p>
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "50px",
              lineHeight: "74px",
              color: "#00e676",
              height: "74px",
            }}
          >
            {priceInfo && numberWithCommas(priceInfo.data.basePrice)}원
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
              borderRadius: "15px",
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
                marginTop: "40px",
              }}
            >
              <p
                style={{
                  fontFamily: "Noto Sans KR",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#c0c1c5",
                }}
              >
                *최종 결제내역은 보조배터리 반납 후 확인할 수 있습니다.
              </p>
              <p
                style={{
                  fontFamily: "Noto Sans KR",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#c0c1c5",
                  marginTop: "16px",
                  marginBottom: "50px",
                  marginRight: "16px",
                }}
              >
                *미반납 시({priceInfo && priceInfo.data.missingTime}
                시간) 이후{" "}
                {priceInfo && numberWithCommas(priceInfo.data.missingPrice)}원의
                분실비용이 부가 되오니 꼭 반납을 부탁드립니다.
              </p>
            </div>
            <div
              style={{
                border: "1px solid #050505",
                marginLeft: "18px",
                marginRight: "18px",
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: "16px",
                marginBottom: "16px",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "16px",
                  marginBottom: "16px",
                  flexDirection: "rows",
                  justifyContent: "space-between",
                  marginLeft: "16px",
                  marginRight: "16px",
                  color: "#c0c1c5",
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
                    color: "#94949d",
                  }}
                  className="purchaseDetailLittleTextTag"
                >
                  매장명
                </p>
                <p
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#EAEBF1",
                  }}
                  className="purchaseDetailLittleText"
                  id="storeName"
                >
                  {priceInfo && numberWithCommas(priceInfo.data.discount_price)}
                  원
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
                  color: "#c0c1c5",
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
                    color: "#94949d",
                  }}
                  className="purchaseDetailLittleTextTag"
                >
                  기본 제공 시간 및 금액
                </p>
                <p
                  style={{
                    fontFamily: "Noto Sans KRㄴ",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#EAEBF1",
                  }}
                  className="purchaseDetailLittleText"
                >
                  {/* {priceInfo && priceInfo.data.baseTime}시간/{""}
                  {priceInfo && numberWithCommas(priceInfo.data.basePrice)}원 */}
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
                  color: "#c0c1c5",
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
                    color: "#94949d",
                  }}
                  className="purchaseDetailLittleTextTag"
                >
                  추가 사용시{" "}
                </p>
                <p
                  style={{
                    color: "#EAEBF1",
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                  className="purchaseDetailLittleText"
                >
                  {priceInfo && priceInfo.data.extraTerm}분/
                  {priceInfo && priceInfo.data.extraPrice}원
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
                  color: "#c0c1c5",
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
                    color: "#94949d",
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
                    color: "#EAEBF1",
                  }}
                  className="purchaseDetailLittleText"
                >
                  결제수단
                </p>
              </div>
            </div>
          </div>
        </div>
        <p
          style={{
            color: "#535362",
            marginLeft: "16px",
            marginRight: "16px",
            marginTop: "32px",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          반토의{" "}
          <Link
            onClick={() => {
              setPolicyUrl("https://bantoweb.xyz/policy/service_policy");
              handleOpen();
            }}
            style={{
              textDecoration: "underline",
              lineHeight: "20px",
              color: "#535362",
            }}
          >
            이용약관
          </Link>
          과{" "}
          <Link
            onClick={() => {
              setPolicyUrl("https://bantoweb.xyz/policy/private_policy");
              handleOpen();
            }}
            style={{
              textDecoration: "underline",
              lineHeight: "20px",
              color: "#535362",
            }}
          >
            개인정보처리방침
          </Link>
          에 대해 동의하시면 아래 동의 후 대여하기를 눌러주세요
        </p>

        <Button
          // disabled="true"
          // style={{
          //   width: "100%",
          //   height: "66px",
          //   width: "calc(100% - 32px)",
          //   background: "#EAEBF1",
          //   borderRadius: "15px",
          //   border: "none",
          //   fontFamily: "Noto Sans KR",
          //   fontStyle: "normal",
          //   fontWeight: "500",
          //   fontSize: "18px",
          //   lineHeight: "27px",
          //   marginTop: "40px",
          //   marginLeft: "16px",
          //   marginRight: "16px"
          // }}
          className="purchaseForWebButton"
          callback={async () => {
            // console.log("stationId", stationId);
            axios
              .post(
                constants.hosts.banto + "/banto2/app/rent/checkUserRenting",
                {
                  userId: sessionStorage.getItem("userId"),
                }
              )
              .then((res) => {
                if (res.data.code !== 200) {
                  window.alert("시스템 에러: 반토 고객센터에 문의하세요");
                  // props.history.push("/");
                  return;
                }
                if (res.data.data.bRenting) {
                  // window.alert("현재 대여중입니다. 반납후 다시 시도해주세요");
                  // props.history.push("/");
                  return;
                }
                axios
                  .post(
                    constants.hosts.banto + "/banto2/app/store/getStationInfo",
                    {
                      stationId: sessionStorage.getItem("stationId"),
                    }
                  )
                  .then((res) => {
                    if (res.data.code !== 200) {
                      // window.alert("시스템 에러: 반토 고객센터에 문의하세요");
                      // props.history.push("/");
                      return;
                    }
                    if (!res.data.data.online) {
                      window.alert(
                        "충전 스테이션이 아직 네트워크에 연결 되지 않았습니다. 확인 후 다시 시도해 주세요. (전원을 킨 후 1분정도의 시간이 걸릴 수 있습니다)"
                      );
                      // props.history.push("/");
                      return;
                    }
                    axios.post(
                      constants.hosts.banto +
                        "/banto2/app/rent/requestSimpleRent",
                      {
                        userId: sessionStorage.getItem("userId"),
                        stationId: sessionStorage.getItem("stationId"),
                        couponId: null,
                      }
                    );
                  })
                  .then((res) => {
                    if (res.data.code !== 200) {
                      alert(
                        res.data.msg + " " + "결제된 금액이 지금 환불됩니다."
                      );
                      props.history.push("/simple/rentfail");
                      return;
                    }
                    console.log("대여완료 res", res);
                    props.history.push("/simple/rentcomplete");
                    return;
                  });
              });

            const result = await axios.post(
              constants.hosts.banto + "/banto2/app/rent/requestSimpleRent",
              {
                userId: sessionStorage.getItem("userId"),
                // userId: "abc",
                stationId: sessionStorage.getItem("stationId"),
                couponId: null,
              }
            );

            // console.log(result);

            if (result.data.code !== 200) {
              alert(result.data.msg + " " + "결제된 금액이 지금 환불 됩니다");
              return;
            }
            props.history.push("/simple/renting");
          }}
        >
          동의 후 대여하기
          {/* test rent battery */}
        </Button>
        <div
          style={{
            width: "100%",
            height: "300px",
          }}
          className="purchaseForWebEmptySpace"
        />
        <div
          style={{
            position: "fixed",
            left: "16px",
            right: "16px",
            bottom: "50px",
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
