import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import constants from "../../Constants"
import moment from "moment";
import DesText from "./components/DesText";
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';

// PURCHASE START
import { Link } from "react-router-dom";
import Button from "./components/Button"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";



const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
// PURCHASE END




export default function App(props) {
  const classes = useStyles();
  const [stationId, setStationId] = React.useState("");
  const [bMarketingAgreed, setMarketingAgreed] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [timeStamp, setTimeStamp] = React.useState("");
  const bull = <span className={classes.bullet}>•</span>;
  const [isLoading, setLoading] = React.useState(false)
  const pageState = { login: "LOGIN", pay: "PAY", purchase: "PURCHASE" }

  const [page, setPage] = React.useState(pageState.login)
  const [data, setData] = React.useState("");


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
  //   alert(`$스테이트${page}`)
  // }, [page])


  // React.useEffect(() => {
  //   if (!sessionStorage.getItem("isLogin")) {
  //     return
  //   }
  //   var bufferTime = moment(oldDateObj).add(40, 'm').toDate();
  //   var now = moment()
  //   if (bufferTime.isBefore(now)) {
  //     sessionStorage.removeItem("isLogin")
  //     sessionStorage.removeItem("userId")
  //     return
  //   }
  //   if (userId !== "") {
  //     console.log(userId)
  //   }


  // }, [])

  // PURCHASE START
  const [priceInfo, setPriceInfo] = React.useState("");
  const [policyUrl, setPolicyUrl] = React.useState(
    "https://bantoweb.xyz/policy/service_policy"
  );
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const descriptionElementRef = React.useRef(null);

  function numberWithCommas(x) {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const handleOpen = () => {
    setOpen(true);
  };
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
          transform: `translate(-50%, -50%)`
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
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  React.useEffect(() => {

    (async () => {
      if (page !== pageState.purchase) {
        return
      }
      const userRentInfo = await axios
        .post(constants.hosts.banto + "/banto2/app/rent/checkUserRenting", {
          userId: sessionStorage.getItem("userId")
        })

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
    })()

  }, [page])
  React.useEffect(() => {
    (async () => {
      if (page !== pageState.purchase) {
        return
      }

      const checkUserPayment = await axios
        .post(constants.hosts.banto + "/banto2/app/user/checkUserPayment", {
          userId: sessionStorage.getItem("userId")
        })

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

      const priceInfo = await axios
        .post(constants.hosts.banto +
          "/banto2/app/price/getPriceInfo", {
          stationId: sessionStorage.getItem("stationId")
        })

      // console.log(res);
      if (priceInfo.status !== 200) {
        console.log(priceInfo.msg);
      }
      setPriceInfo(priceInfo.data);

      const storeName = await axios
        .post(constants.hosts.banto + "/banto2/app/store/getStoreName", {
          // stationId: sessionStorage.getItem("stationId")
          stationId: sessionStorage.getItem("stationId")
        })
      // if (value.data.code !== 200) {
      //   window.alert(value.data.msg);
      //   // props.history.push();
      // }
      let storeelem = document.getElementById("storeName");
      if (typeof elem === "undefined") {
        storeelem.innerHTML = ""
        return
      }
      // storeelem.innerHTML = storeName.data.data.storeName;

    })()

  }, [page]);



  // PURCHASE END


  // LOGIN
  React.useEffect(() => {
    (async () => {
      setLoading(true)
      // console.log(props.location.state);
      if (props.location.state !== undefined) {
        setStationId(props.location.state.stationId);
      }
      // const storeName = await axios
      //   .post(constants.hosts.banto +
      //     "/banto2/app/store/getStoreName", {
      //     // stationId: props.location.state.stationId
      //     stationId: sessionStorage.getItem("stationId")
      //   })
      // let elem = document.getElementById("storeName");
      // elem.innerHTML = "대여가맹점: " + value.data.data.storeName;
      // elem.innerHTML = "시작비용: 300원 / 10분당 150원"
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("86d0fb152d4eb19ea7bb774cd3c7809c");
      }
      window.Kakao.Auth.createLoginButton({
        container: "#create-kakao-login-btn",
        success: async function (authObj) {
          const accessToken = authObj.access_token;
          // setTimeStamp(new Date());

          const kakaoInfo = await axios.post(constants.hosts.banto +
            "/banto2/app/user/getKakaoInfo", {
            accessKey: accessToken
          })
          if (kakaoInfo.data.code !== 200) {
            window.alert(kakaoInfo.data.msg);
            return;
          }
          const kakaoPolicy = await axios.post(constants.hosts.banto +
            "/banto2/app/user/getKakaoPolicy", {
            accessKey: accessToken
          })
          if (kakaoPolicy.data.code !== 200) {
            window.alert(kakaoPolicy.data.msg);
            return;
          }
          if (!kakaoInfo.data.data.kakao_account.has_phone_number) {
            window.alert(
              "카카오ID에 휴대번호 정보가 없습니다.반토 앱을 사용해 주세요"
            );
            return
            //   window.location.href = "https://banto.io";
          }
          let phoneNumber = kakaoInfo.data.data.kakao_account.phone_number;
          // phoneNumber = "+82 10-9455-2410";
          phoneNumber = phoneNumber.replace(" ", "");
          phoneNumber = phoneNumber.replace(/-/gi, "");
          const kakaoId = kakaoInfo.data.data.id;
          const email = kakaoInfo.data.data.kakao_account.email;

          const marketingAgreed =
            kakaoPolicy.data.data.allowed_service_terms.length;
          const bMarketingPolicyAgreed =
            marketingAgreed === 4 ? true : false;
          setMarketingAgreed(bMarketingPolicyAgreed);
          const loginWithKakao = await axios.post(
            constants.hosts.banto + "/banto2/app/user/loginWithKakaoId",
            {
              kakaoId,
              phoneNumber,
              email
            }
          );
          setUserId(loginWithKakao.data.data.userId);
          sessionStorage.setItem("userId", loginWithKakao.data.data.userId);
          sessionStorage.setItem("isLogin", String(new Date()))
          setLoading(false)

        },

        fail: function (err) {
          setLoading(true)

          alert(JSON.stringify(err));
          setLoading(false)

          window.alert(`${err}`);
        }
      })
    })()

  }, []);

  React.useEffect(() => {
    (async () => {
      if (userId === "") {
        return
      }
      setLoading(true)

      console.log("유저아이디 들어옴")
      const userPayment = await axios.post(constants.hosts.banto +
        "/banto2/app/user/checkUserPayment",
        { userId: userId })

      const rentInfo = await axios.post(constants.hosts.banto +
        "/banto2/app/rent/checkUserRenting", {
        userId: userId
      })
      const updateUserPolicy = await axios.post(
        constants.hosts.banto + "/banto2/app/user/updateUserAgreedPolicy",
        {
          userId: userId,
          bMarketingPolicyAgreed: bMarketingAgreed
        }
      )
      const payment = userPayment.data.data.payment;
      const bRenting = rentInfo.data.data.bRenting;
      setLoading(false)
      console.log(payment)
      if (bRenting) {
        setPage(pageState.purchase)
        // props.history.push("/simple/purchase");
      } else if (payment === "none") {
        props.history.push("/simple/kakaopay");
        // setPage(pageState.pay)
      } else {
        setPage(pageState.purchase)

        // props.history.push("/simple/purchase");
      }

    })()
    setLoading(false);
  }, [userId, timeStamp]);
  // LOGIN END
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
      setPage(pageState.pay)
      window.location.href = registerKakao.data.data.redirectUrl;
    }
  }




  return (<div

    style={{
      backgroundColor: "#0B0B0C",
      height: "100vh",
      width: "100vw"

      // display: "flex"
      // flexDirection: "column",
      // justifyContent: "center"
    }}>






    {page === pageState.login && (<>
      <body
        style={{
          backgroundColor: "#0B0B0C",
          height: "100vh",
          width: "100vw"

          // display: "flex"
          // flexDirection: "column",
          // justifyContent: "center"
        }}
      >
        {isLoading && <Stack alignItems="center">
          <CircularProgress sx={{ color: "white", backgroundColor: "white" }} />
        </Stack>}
        <div style={{ paddingTop: "50%" }}>
          <p
            style={{
              color: "white",
              fontFamily: " Montserrat",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "40px",
              marginLeft: "32px"
            }}
          >
            1 / 2
          </p>
          <div
            style={{
              color: "white",
              marginTop: "16px",
              marginLeft: "32px",
              lineHeight: "27px",
              fontSize: "18px",
              fontFamily: "Noto Sans KR"
            }}
          >
            <p>간편 결제를 이용하시려면</p>
            <p>
              <span style={{ color: "#FFD95A" }}>카카오 계정 로그인</span>을
              해주세요
            </p>
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
            <div style={{ marginTop: "100px", marginBottom: "25px" }} id="create-kakao-login-btn" />
          </div>
          <div style={{ width: "100%", textAlign: "center", alignItems: "center" }}>
            <DesText>*로그인이 안될시 아래 리프레시를 눌러주세요</DesText>
            <IconButton
              onClick={() => {
                window.location.reload();
              }}
            >
              <RefreshIcon fontSize="large" style={{
                color: "white",
                // backgroundColor: "white"
              }} /></IconButton>

          </div>
        </div>


      </body>
    </>)}


    {/* // LOGIN END
    // KakaoPay Start */}
    {page === pageState.pay && (<>
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
    )}
    {/* // KAKAOPAY END
    // PURCHASE START */}
    {page === pageState.purchase && (
      <>
        <head></head>
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
                color: "#eaebf1"
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
                height: "74px"
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
                <p
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#c0c1c5"
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
                    marginRight: "16px"
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
                    매장명
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
                    기본 제공 시간 및 금액
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
                    추가 사용시{" "}
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
          <p
            style={{
              color: "#535362",
              marginLeft: "16px",
              marginRight: "16px",
              marginTop: "32px",
              lineHeight: "20px",
              textAlign: "center"
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
                color: "#535362"
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
                color: "#535362"
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
              const userIsRenting = await axios
                .post(constants.hosts.banto + "/banto2/app/rent/checkUserRenting", {
                  userId: sessionStorage.getItem("userId")
                })
              if (userIsRenting.data.code !== 200) {
                window.alert("시스템 에러: 반토 고객센터에 문의하세요");
                // props.history.push("/");
                return;
              }
              if (userIsRenting.data.data.bRenting) {
                window.alert("현재 대여중입니다. 반납후 다시 시도해주세요");
                // props.history.push("/");
                return;
              }
              const stationInfo = await axios
                .post(constants.hosts.banto + "/banto2/app/store/getStationInfo", {
                  stationId: sessionStorage.getItem("stationId")
                })

              if (stationInfo.data.code !== 200) {
                window.alert("시스템 에러: 반토 고객센터에 문의하세요");
                // props.history.push("/");
                return;
              }
              console.log("스테이션인포", stationInfo.data.body)
              if ((stationInfo.data.body.workState === 2)) {
                window.alert(
                  "모든 배터리가 충전중에 있습니다 기다려 주세요"
                );
                return;
              }

              if ((stationInfo.data.body.workState !== 1)) {
                window.alert(
                  "충전 스테이션이 아직 네트워크에 연결 되지 않았습니다. 확인 후 다시 시도해 주세요. (전원을 킨 후 1분정도의 시간이 걸릴 수 있습니다)"
                );
                // props.history.push("/");
                return;
              }
              const rent = await axios.post(
                constants.hosts.banto + "/banto2/app/rent/requestSimpleRent",
                {
                  userId: sessionStorage.getItem("userId"),
                  stationId: sessionStorage.getItem("stationId"),
                  couponId: null
                }
              );

              console.log(rent)

              if (rent.data.code !== 200) {
                alert(rent.data.msg)
                props.history.push("/simple/rentfail");
                return;
              }
              props.history.push("/simple/renting");
              return





            }}
          >
            동의 후 대여하기
            {/* test rent battery */}
          </Button>
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
    )
    }

  </div >)
}
