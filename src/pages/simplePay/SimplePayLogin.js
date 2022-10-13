import React, { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import constants from "../../Constants";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Button, Slide, Stack, Link } from "@mui/material";

import BantoLogo from "../../assets/icon/banto_text_logo.png";

// PURCHASE START
// import { Link } from "react-router-dom";
import CustomButton from "./components/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSnackbar } from "notistack";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import CustomCenterBox from "../../components/CustomCenterBox";
import CustomLeftBox from "../../components/CustomLeftBox";
import CardInputForm from "../../components/CardInputForm";

import kakaoIcon from "../../assets/icon/kakao.png";
import kakaopayIcon from "../../assets/icon/kakaopay.png";

import KakaoLogin from "react-kakao-login";
import { Box } from "@mui/system";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const pageState = {
  login: "LOGIN",
  pay: "PAY",
  purchase: "PURCHASE",
};

export default function App(props) {
  const { enqueueSnackbar } = useSnackbar();

  const [bMarketingAgreed, setMarketingAgreed] = useState(false);
  const [userId, setUserId] = React.useState(
    sessionStorage.getItem("userId") ?? ""
  );
  const [stationId, setStationId] = React.useState(
    sessionStorage.getItem("stationId") ?? ""
  );
  const [timeStamp, setTimeStamp] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const [registerOpen, setRegisterOpen] = useState(false);

  const [page, setPage] = React.useState(
    userId ? pageState.purchase : pageState.login
  );
  const [data, setData] = React.useState("");

  const [storeName, setStoreName] = useState("-");
  const [defaultPrice, setDefaultPrice] = useState("-");
  const [paymentType, setPaymentType] = useState("-");

  const [rentResultMassage, setRentResultMassage] = useState("");

  useEffect(() => {
    // window.alert(`
    // *공지*
    // 안녕하세요 고객님
    // 현재 반토 보조배터리 서비스 이용이 불가합니다
    // 사유     : 서비스 점검이 진행중 입니다
    // 점검 일자 : 2022.8.2 05:00 - 8.4 05:00
    // 이용에 불편을 드려 죄송합니다
    // `)
    if (userId && stationId) setPage(pageState.purchase);
  }, []);

  const checkMobile = () => {
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
  };

  // iphone snackbar
  useEffect(() => {
    if (page === pageState.login) {
      if (checkMobile() == "ios") {
        enqueueSnackbar("카카오 로그인후, ◀︎ Safari 를 터치하세요", {
          variant: "info",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Slide,
          autoHideDuration: 3000,
          // sx: {
          //   "& .SnackbarContent-root": {
          //     color: "#00C853",
          //     backgroundColor: "black",
          //     border: "2px solid #00C853",
          //   },
          // },
        });
      }
    }
  }, []);

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

  const kakaoLoginSuccess = (authObj) => {
    const { response } = authObj;
    (async () => {
      const accessToken = response.access_token;

      const kakaoInfo = await axios.post(
        `${constants.hosts.banto}/banto2/app/user/getKakaoInfo`,
        {
          accessKey: accessToken,
        }
      );
      if (kakaoInfo.data.code !== 200) {
        window.alert(kakaoInfo.data.msg);
        return;
      }
      const kakaoPolicy = await axios.post(
        `${constants.hosts.banto}/banto2/app/user/getKakaoPolicy`,
        {
          accessKey: accessToken,
        }
      );
      if (kakaoPolicy.data.code !== 200) {
        window.alert(kakaoPolicy.data.msg);
        return;
      }
      if (!kakaoInfo.data.data.kakao_account.has_phone_number) {
        window.alert(
          "카카오ID에 휴대번호 정보가 없습니다.반토 앱을 사용해 주세요"
        );
        return;
      }
      let phoneNumber = kakaoInfo.data.data.kakao_account.phone_number;
      phoneNumber = phoneNumber.replace(" ", "");
      phoneNumber = phoneNumber.replace(/-/gi, "");
      const kakaoId = kakaoInfo.data.data.id;
      const email = kakaoInfo.data.data.kakao_account.email;

      const marketingAgreed =
        kakaoPolicy.data.data.allowed_service_terms.length;
      const bMarketingPolicyAgreed = marketingAgreed === 4 ? true : false;
      setMarketingAgreed(bMarketingPolicyAgreed);
      const loginWithKakao = await axios.post(
        `${constants.hosts.banto}/banto2/app/user/loginWithKakaoId`,
        {
          kakaoId,
          phoneNumber,
          email,
        }
      );
      setUserId(loginWithKakao.data.data.userId);
      sessionStorage.setItem("userId", loginWithKakao.data.data.userId);
      sessionStorage.setItem("isLogin", String(new Date()));
      setLoading(false);
    })();
  };

  const kakaoLoginFail = (err) => {
    setLoading(true);

    alert(JSON.stringify(err));
    setLoading(false);

    window.alert(`${err}`);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    (async () => {
      if (page !== pageState.purchase) {
        return;
      }
      const userRentInfo = await axios.post(
        `${constants.hosts.banto}/banto2/app/rent/checkUserRenting`,
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
  }, [page]);

  useEffect(() => {
    (async () => {
      if (page !== pageState.purchase) {
        return;
      }
      const { data: checkUserPayment } = await axios.post(
        `${constants.hosts.banto}/banto2/app/user/checkUserPayment`,
        {
          userId: sessionStorage.getItem("userId"),
        }
      );

      const payment = checkUserPayment.data.payment;

      if (payment === "none") {
        setPage(pageState.pay);
        return;
      }

      if (payment === "kakaoPay") {
        setPaymentType("카카오페이");
      } else if (payment === "creditCard") {
        setPaymentType("신용카드");
      }

      const priceInfo = await axios.post(
        `${constants.hosts.banto}/banto2/app/price/getPriceInfo`,
        {
          stationId: sessionStorage.getItem("stationId"),
        }
      );

      // console.log(res);
      if (priceInfo.status !== 200) {
        console.log(priceInfo.msg);
      }
      setPriceInfo(priceInfo.data);

      const { data: store } = await axios.post(
        `${constants.hosts.banto}/banto2/app/store/getStoreName`,
        {
          stationId: sessionStorage.getItem("stationId"),
        }
      );

      if (store.code === 200) {
        setStoreName(store.data.storeName);
      }
    })();
  }, [page]);

  // PURCHASE END

  useEffect(() => {
    if (userId === "") {
      return;
    }
    (async () => {
      setLoading(true);

      console.log("유저아이디 들어옴");
      const userPayment = await axios.post(
        `${constants.hosts.banto}/banto2/app/user/checkUserPayment`,
        { userId: userId }
      );

      const rentInfo = await axios.post(
        `${constants.hosts.banto}/banto2/app/rent/checkUserRenting`,
        {
          userId: userId,
        }
      );
      const updateUserPolicy = await axios.post(
        `${constants.hosts.banto}/banto2/app/user/updateUserAgreedPolicy`,
        {
          userId: userId,
          bMarketingPolicyAgreed: bMarketingAgreed,
        }
      );
      const payment = userPayment.data.data.payment;
      const bRenting = rentInfo.data.data.bRenting;
      setLoading(false);
      console.log(payment);
      if (bRenting) {
        setPage(pageState.purchase);
      } else if (payment === "none") {
        setPage(pageState.pay);
      } else {
        setPage(pageState.purchase);
      }
    })();
    setLoading(false);
  }, [userId, timeStamp]);

  // LOGIN END
  async function registerKakaoPay(userId) {
    const registerKakao = await axios.post(
      `${constants.hosts.banto}/banto2/app/user/registerKakaoPay`,
      {
        userId: userId,
      }
    );
    setData(registerKakao.data);
    console.log(
      String(window.location).search("banto.io") > 0 &&
        registerKakao.data.code === 200
    );
    if (
      (String(window.location).search("banto.io") > 0 ||
        String(window.location).search("localhost") > 0) &&
      registerKakao.data.code === 200
    ) {
      setPage(pageState.pay);
      window.location.href = registerKakao.data.data.redirectUrl;
    }
  }

  const registerCreditCard = async (cardNumber, expiry, birth, password) => {
    const userId = sessionStorage.getItem("userId");

    const expiryMonth = expiry.slice(0, 2);
    const expiryYear = `20${expiry.slice(2, 4)}`;

    const fullExpiry = expiryYear + expiryMonth;

    try {
      const { data: registerResult } = await axios.post(
        `${constants.hosts.banto}/banto2/app/payment/iamport/register`,
        {
          cardNumber,
          expiry: fullExpiry,
          birth,
          password,
          userId,
        }
      );

      if (registerResult.code === 300) {
        alert(registerResult.msg);
        return;
      }

      props.history.push("/payregistsuccess");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const handleRent = async () => {
    const userIsRenting = await axios.post(
      `${constants.hosts.banto}/banto2/app/rent/checkUserRenting`,
      {
        userId: sessionStorage.getItem("userId"),
      }
    );
    if (userIsRenting.data.code !== 200) {
      window.alert("시스템 에러: 반토 고객센터에 문의하세요");
      return;
    }
    if (userIsRenting.data.data.bRenting) {
      window.alert("현재 대여중입니다. 반납후 다시 시도해주세요");
      return;
    }

    try {
      const { data: station } = await axios.post(
        `${constants.hosts.banto}/banto2/app/store/getStationInfo`,
        {
          stationId: sessionStorage.getItem("stationId"),
        },
        { timeout: 10000 }
      );

      const stationInfo = station.body;

      if (station.code !== 200) {
        window.alert("시스템 에러: 반토 고객센터에 문의하세요");
        return;
      }
      console.log("스테이션인포", stationInfo);

      if (stationInfo.state !== 1) {
        window.alert("스테이션 전원이 연결되지 않았습니다");
        return;
      }

      if (stationInfo.workState === 2) {
        window.alert("모든 배터리가 충전중에 있습니다 기다려 주세요");
        return;
      }

      if (stationInfo.workState !== 1) {
        window.alert(
          "충전 스테이션이 아직 네트워크에 연결 되지 않았습니다. 확인 후 다시 시도해 주세요. (전원을 킨 후 1분정도의 시간이 걸릴 수 있습니다)"
        );
        return;
      }
    } catch (error) {
      window.alert(
        "반토 스테이션 네트워크가 작동하지 않습니다\n(뒷면 하단의 전원을 껏다 켜주세요)"
      );
      return;
    }

    const rent = await axios.post(
      `${constants.hosts.banto}/banto2/app/rent/requestSimpleRent`,
      {
        userId: sessionStorage.getItem("userId"),
        stationId: sessionStorage.getItem("stationId"),
        couponId: null,
      }
    );

    console.log(rent);

    if (rent.data.code !== 200) {
      alert(rent.data.msg);
      props.history.push("/simple/rentfail");
      return;
    }
    props.history.push("/simple/renting");
    return;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0B0B0C",
        height: "100vh",
        paddingTop: "20%",
        paddingBottom: "40%",
        overflowY: "scroll",
      }}
    >
      {page === pageState.login && (
        <>
          {isLoading && (
            <Stack alignItems="center">
              <CircularProgress
                sx={{ color: "white", backgroundColor: "white" }}
              />
            </Stack>
          )}

          <CustomCenterBox sx={{ pt: "20%", pb: "20%" }}>
            <CustomCenterBox sx={{ p: 5, alignItems: "center" }}>
              <img src={BantoLogo} alt="" />
              {/* <Typography color="white" fontSize={40} fontWeight={700}>
                BANTO
              </Typography> */}
            </CustomCenterBox>

            <CustomLeftBox sx={{ p: 5 }}>
              <Typography color="white">카카오 로그인 후,</Typography>
              <Typography color="white" fontWeight={500}>
                <span style={{ color: "#FFD95A" }}>브라우저(크롬,사파리)</span>
                로 돌아와 주세요
              </Typography>
            </CustomLeftBox>

            <CustomCenterBox>
              <KakaoLogin
                token="86d0fb152d4eb19ea7bb774cd3c7809c"
                onSuccess={kakaoLoginSuccess}
                onFail={kakaoLoginFail}
                render={({ onClick }) => {
                  return (
                    <Button
                      sx={{
                        width: "90%",
                        height: "50px",
                        backgroundColor: "black",
                        color: "#FFD95A",
                        fontWeight: 500,
                        border: "2px solid #FFD95A",
                        borderRadius: "15px",
                        boxSizing: "border-box",
                      }}
                      onClick={onClick}
                    >
                      <img
                        src={kakaoIcon}
                        alt=""
                        style={{ paddingRight: 10 }}
                      />
                      카카오 로그인
                    </Button>
                  );
                }}
              />
            </CustomCenterBox>
          </CustomCenterBox>
        </>
      )}

      {/* // LOGIN END
    // KakaoPay Start */}
      {page === pageState.pay && (
        <>
          <CustomCenterBox sx={{ pt: "20%", pb: "20%" }}>
            <CustomCenterBox sx={{ p: 5, alignItems: "center" }}>
              <Typography color="white" fontSize={40} fontWeight={700}>
                BANTO
              </Typography>
            </CustomCenterBox>

            <CustomLeftBox sx={{ p: 5 }}>
              <Typography color="white">
                결제 방법을 등록하시면 결제 후
              </Typography>
              <Typography color="white">
                보조배터리를 대여할 수 있습니다.
              </Typography>
            </CustomLeftBox>

            <CustomCenterBox>
              <Button
                sx={{
                  width: "90%",
                  height: "50px",
                  backgroundColor: "black",
                  color: "#FFD95A",
                  fontWeight: 500,
                  border: "2px solid #FFD95A",
                  borderRadius: "15px",
                  boxSizing: "border-box",
                }}
                onClick={async () => {
                  await registerKakaoPay(sessionStorage.getItem("userId"));
                }}
              >
                <img src={kakaopayIcon} alt="" style={{ paddingRight: 10 }} />
                카카오페이
              </Button>
            </CustomCenterBox>

            <CustomCenterBox>
              <Button
                sx={{
                  width: "90%",
                  height: "50px",
                  backgroundColor: "black",
                  color: "#EAEBF1",
                  fontWeight: 500,
                  border: "2px solid #EAEBF1",
                  borderRadius: "15px",
                  boxSizing: "border-box",
                }}
                onClick={() => {
                  setRegisterOpen(true);
                }}
              >
                <CreditCardIcon color="#EAEBF1" sx={{ m: 1 }} />
                신용카드 / 체크카드
              </Button>
            </CustomCenterBox>
          </CustomCenterBox>
        </>
      )}

      <Box>
        <Dialog
          fullScreen
          open={registerOpen}
          TransitionComponent={Transition}
          onClose={() => {
            setRegisterOpen(false);
          }}
        >
          <CardInputForm
            onSubmit={registerCreditCard}
            onClose={() => {
              setRegisterOpen(false);
            }}
          />
        </Dialog>
      </Box>

      {page === pageState.purchase && (
        <>
          <CustomCenterBox sx={{ pt: 8, pb: 4 }}>
            <Typography color="white" fontWeight={500} fontSize={20}>
              기본 결제 금액
            </Typography>
            <Typography
              color="#00e676"
              fontWeight={700}
              fontSize={50}
              fontFamily="Montserrat"
            >
              {priceInfo && numberWithCommas(priceInfo.data.basePrice)}원
            </Typography>
          </CustomCenterBox>

          <Box sx={{ pl: 2, pr: 2 }}>
            <Box
              sx={{
                backgroundColor: "black",
                border: "2px solid #242427",
                boxSizing: "border-box",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Typography color="#c0c1c5" fontSize={{ xs: 12, l: 14 }}>
                    * 최종 결제내역은 보조배터리 반납 후 확인할 수 있습니다.
                  </Typography>
                  <Typography color="#c0c1c5" fontSize={{ xs: 12, l: 14 }}>
                    * 미반납 시({priceInfo && priceInfo.data.missingTime}
                    시간) 이후{" "}
                    {priceInfo && numberWithCommas(priceInfo.data.missingPrice)}
                    원의 연체료가 부가되오니 꼭 반납을 해주시기 바랍니다.
                  </Typography>
                </Stack>
              </Box>

              <Box sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="#94949d" fontSize={14}>
                      매장명
                    </Typography>
                    <Typography color="#EAEBF1" fontWeight={600} fontSize={16}>
                      {storeName}
                    </Typography>
                  </Box>
                  {/* <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="#94949d" fontSize={14}>
                      기본 제공 시간 / 금액
                    </Typography>
                    <Typography color="#EAEBF1" fontWeight={600} fontSize={16}>
                      {defaultPrice}
                    </Typography>
                  </Box> */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    객
                  >
                    <Typography color="#94949d" fontSize={14}>
                      추가 이용 금액
                    </Typography>
                    <Typography color="#EAEBF1" fontWeight={600} fontSize={16}>
                      {priceInfo && priceInfo.data.extraTerm}분/
                      {priceInfo && priceInfo.data.extraPrice}원
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="#94949d" fontSize={14}>
                      결제 수단
                    </Typography>
                    <Typography color="#EAEBF1" fontWeight={600} fontSize={16}>
                      {paymentType}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>

          <CustomCenterBox sx={{ p: 2, pt: 4 }}>
            <Typography color="#535362">
              동의 후 대여하기를 누르시면 "반토"의{" "}
              <Link
                onClick={() => {
                  setPolicyUrl("https://bantoweb.xyz/policy/service_policy");
                  handleOpen();
                }}
                sx={{
                  textDecoration: "underline",
                  lineHeight: "20px",
                  color: "#535362",
                }}
              >
                이용약관
              </Link>
              과
            </Typography>
            <Typography color="#535362">
              <Link
                onClick={() => {
                  setPolicyUrl("https://bantoweb.xyz/policy/private_policy");
                  handleOpen();
                }}
                sx={{
                  textDecoration: "underline",
                  lineHeight: "20px",
                  color: "#535362",
                }}
              >
                개인정보 처리방침
              </Link>
              에 자동으로 동의 처리가 됩니다
            </Typography>
          </CustomCenterBox>

          <CustomButton className="purchaseForWebButton" callback={handleRent}>
            대여하기
          </CustomButton>

          {/* 약관 */}
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
                <CustomButton onClick={handleClose} color="primary">
                  확인
                </CustomButton>
              </DialogActions>
            </Dialog>
          </div>
        </>
      )}
    </Box>
  );
}
