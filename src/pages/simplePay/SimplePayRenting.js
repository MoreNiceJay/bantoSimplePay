import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import constants from "../../Constants";
import moment from "moment";

import { Stack, Typography, Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import ReplyIcon from "../../assets/icon/reply.png";
import CustomCenterBox from "../../components/CustomCenterBox";

import BantoLogo from "../../assets/icon/banto_text_logo.png";

import Dialog from "@material-ui/core/Dialog";

import ReturnSuccessImg from "../../assets/img/return_success.png";
import ReturnCheckingImg from "../../assets/img/return_checking.png";
import AgreeButton from "../../components/AgreeButton";
import CancleButton from "../../components/CancleButton";

const intervalBetween = (rentTime) => {
  if (rentTime === null) {
    return "--: -- : --";
  }
  var rentalTime = moment(rentTime);
  var now = moment();

  var diff = now.diff(rentalTime, "seconds", true);
  const formatted = moment.utc(diff * 1000).format("HH : mm : ss");

  return formatted;
};

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

export default function App(props) {
  const [stationId, setStationId] = useState("");
  const [returned, setReturned] = useState(null);
  const [rented, setRented] = useState(null);
  const [rentStatus, setRentStatus] = useState(null);

  const [storeName, setStoreName] = useState("-");

  const isoStartTime = useMemo(() => new Date(rented), [rented]);
  const [runningTime, setRunningTime] = useState(intervalBetween(rented));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [returnStatus, setReturnStatus] = useState(false);
  const [priceInfo, setPriceInfo] = React.useState("");

  const [reason, setReason] = useState("");

  const [promotionUrl, setPromotionUrl] = useState("");

  // 사용 시간
  useEffect(() => {
    const interval = setInterval(() => {
      setRunningTime(intervalBetween(rented));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isoStartTime]);

  useEffect(() => {
    (async () => {
      const { data: store } = await axios.post(
        constants.hosts.banto + "/banto2/app/store/getStoreName",
        {
          stationId: sessionStorage.getItem("stationId"),
        }
      );

      if (store.code === 200) {
        setStoreName(store.data.storeName);
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
    })();
  }, []);

  useEffect(() => {
    if (props.location.state !== undefined) {
      setStationId(props.location.state.stationId);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const result = await axios.post(
        constants.hosts.banto + "/banto2/app/rent/lastRent",
        {
          userId: sessionStorage.getItem("userId"),
        }
      );

      if (result.data.code !== 200) {
        window.alert("시스템 에러: 반토 고객센터에 문의하세요");
        return;
      }

      setRentStatus(
        result.data.data.bRenting && result.data.data.bRenting.status
      );
      setReturned(
        result.data.data.bRenting && result.data.data.bRenting.returnTimeStamp
      );
      setRented(
        result.data.data.bRenting && result.data.data.bRenting.rentalTimeStamp
      );

      return;
    })();
  }, []);

  const returnCheck = async () => {
    const result = await axios.post(
      constants.hosts.banto + "/banto2/app/rent/lastRent",
      {
        userId: sessionStorage.getItem("userId"),
      }
    );

    if (result.data.code !== 200) {
      window.alert("시스템 에러: 반토 고객센터에 문의하세요");
      return;
    }
    setRentStatus(
      result.data.data.bRenting && result.data.data.bRenting.status
    );
    setReturned(
      result.data.data.bRenting && result.data.data.bRenting.returnTimeStamp
    );
    setRented(
      result.data.data.bRenting && result.data.data.bRenting.rentalTimeStamp
    );

    if (
      result.data.data.bRenting &&
      result.data.data.bRenting.returnTimeStamp !== null
    ) {
      setReturnStatus(true);
      let msg = "반납이 완료되었습니다";

      if (result.data.data.bRenting.status === "return_payment_fail") {
        const { data } = await axios.get(
          `${constants.hosts.banto}/banto2/app/log/${result.data.data.bRenting.userId}/payment-fail/${result.data.data.bRenting.rentId}`
        );

        setReason(data.reason);
        msg += `\n${data.reason}`;
      }
    } else {
      setReturnStatus(false);
    }

    setDialogOpen(true);

    return { code: 200 };
  };

  useEffect(() => {
    (async () => {
      const { data: promotion } = await axios.post(
        `${constants.hosts.banto}/banto2/app/partners/promotion`
        // `http://localhost:3009/banto2/app/partners/promotion`
      );

      setPromotionUrl(promotion.data.url);
    })();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#0B0B0C",
        height: "120vh",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <CustomCenterBox sx={{ pt: "20%" }}>
        <CustomCenterBox sx={{ p: 3, alignItems: "center" }}>
          <img src={BantoLogo} alt="" />
        </CustomCenterBox>
      </CustomCenterBox>

      <CustomCenterBox>
        <Typography
          color="#00E676"
          fontFamily="Montserrat"
          fontWeight={700}
          fontSize={50}
        >
          {rentStatus === "return_payment_fail"
            ? "반납 결제 실패"
            : runningTime}
        </Typography>
        <Typography color="#00E676" fontWeight={300}>
          현재 이용 시간
        </Typography>
      </CustomCenterBox>

      <Box sx={{ p: 1, pl: 2, pr: 2 }}>
        <Box
          sx={{
            backgroundColor: "black",
            border: "2px solid #242427",
            boxSizing: "border-box",
            borderRadius: "15px",
          }}
        >
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
                  대여 시간
                </Typography>
                <Typography color="#EAEBF1" fontWeight={600} fontSize={16}>
                  {rented && getTimeStamp(rented)}
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
                  대여 지점
                </Typography>
                <Typography color="#EAEBF1" fontWeight={600} fontSize={16}>
                  {storeName}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography color="#94949d" fontSize={14}>
                    이용료 안내
                  </Typography>
                  <Typography color="#94949d" fontSize={11}>
                    {`(반납시 결제됩니다)`}
                  </Typography>
                </Box>
                <Typography color="#EAEBF1" fontWeight={600} fontSize={16}>
                  {`${priceInfo && priceInfo.data.extraTerm}분/${
                    priceInfo && priceInfo.data.extraPrice
                  }원`}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  color="#EAEBF1"
                  pt={1}
                  fontWeight={600}
                  fontSize={12}
                  align={"center"}
                >
                  반토 스테이션에 반납하시면 자동 이용 완료 됩니다
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box p={2}>
        <Button
          sx={{
            width: "100%",
            border: "2px solid #313139",
            backgroundColor: "black",
            borderRadius: "15px",
            color: "#00C853",
            justifyContent: "space-between",
            padding: "10px 24px",
          }}
          onClick={returnCheck}
        >
          반납 확인
          <img src={ReplyIcon} alt="" width="4%" />
        </Button>
      </Box>
      <Box
        mt={6}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Typography color="white" fontSize={12}>
          도움이 필요하신가요?
        </Typography>
        <a href="https://pf.kakao.com/_eWuNT/chat" target="_blank">
          <Typography mt={1} color="#359B4A" fontWeight={600} fontSize={12}>
            반토 고객센터
          </Typography>
        </a>
      </Box>

      <Dialog
        fullScreen
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        <Box sx={{ backgroundColor: "#0B0B0C", height: "100%" }}>
          <CustomCenterBox sx={{ pt: "40%" }}>
            {returnStatus ? (
              <>
                <img src={ReturnSuccessImg} alt="" />
                <Box pt={5}>
                  <Typography color="white" fontSize={24}>
                    보조배터리 반납 완료
                  </Typography>
                  {reason && (
                    <Typography color="white" fontSize={24}>
                      {reason}
                    </Typography>
                  )}
                </Box>
                <Box pt={5}>
                  <AgreeButton
                    text="확인"
                    onClick={() => {
                      window.location.replace(promotionUrl);
                    }}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box mt={-12} mb={7} justifyContent="space-between">
                  <Typography color="white" fontSize={10}>
                    팁: 반납이 오래 안되는 경우엔
                  </Typography>
                  <Typography color="white" fontSize={10}>
                    스테이션의 뒷면 하단의 스위치를 껏다 켜주세요
                  </Typography>
                </Box>
                <img src={ReturnCheckingImg} alt="" />
                <Box pt={4}>
                  <Typography color="white" fontSize={20}>
                    보조배터리 반납 확인 중
                  </Typography>
                  <Typography color="white" fontSize={16}>
                    10초 후 다시 확인해주세요
                  </Typography>
                </Box>

                <Box pt={5}>
                  <CancleButton
                    text="확인"
                    onClick={() => {
                      setDialogOpen(false);
                    }}
                  />

                  <Box mt={8} justifyContent="space-between">
                    <Typography color="white" fontSize={12}>
                      반납 실패가 지속되면 고객센터로 문의
                    </Typography>
                    <a href="https://pf.kakao.com/_eWuNT/chat" target="_blank">
                      <Typography
                        mt={1}
                        color="#359B4A"
                        fontWeight={600}
                        fontSize={12}
                      >
                        반토 고객센터
                      </Typography>
                    </a>
                  </Box>
                </Box>
              </>
            )}
          </CustomCenterBox>
        </Box>
      </Dialog>
    </Box>
  );
}
