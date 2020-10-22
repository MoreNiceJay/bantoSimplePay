import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles({});
export default function App(props) {
  const classes = useStyles();
  const [stationId, setStationId] = React.useState("");
  const [bMarketingAgreed, setMarketingAgreed] = React.useState(false);
  const [userId, setUserId] = React.useState("");

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
    axios
      .post("https://mulli.world/banto2/app/store/getStoreName", {
        // stationId: props.location.state.stationId
        stationId: sessionStorage.getItem("stationId")
      })
      .then((value) => {
        if (value.data.code !== 200) {
          window.alert(value.data.msg);
          // props.history.push();
        }
        let elem = document.getElementById("storeName");
        elem.innerHTML = "대여가맹점: " + value.data.data.storeName;
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init("86d0fb152d4eb19ea7bb774cd3c7809c");
        }
        window.Kakao.Auth.createLoginButton({
          container: "#create-kakao-login-btn",
          success: function (authObj) {
            const accessToken = authObj.access_token;
            axios
              .all([
                axios.post("https://mulli.world/banto2/app/user/getKakaoInfo", {
                  accessKey: accessToken
                }),
                axios.post(
                  "https://mulli.world/banto2/app/user/getKakaoPolicy",
                  {
                    accessKey: accessToken
                  }
                )
              ])
              .then(
                axios.spread((firstRes, secondRes) => {
                  if (firstRes.data.code !== 200) {
                    window.alert(firstRes.data.msg);
                    return;
                  }
                  if (secondRes.data.code !== 200) {
                    window.alert(secondRes.data.msg);
                    return;
                  }
                  if (!firstRes.data.data.kakao_account.has_phone_number) {
                    window.alert(
                      "카카오ID에 휴대번호 정보가 없습니다.반토 앱을 사용해 주세요"
                    );
                    //   window.location.href = "https://banto.io";
                  }
                  let phoneNumber =
                    firstRes.data.data.kakao_account.phone_number;

                  // phoneNumber = "+82 10-9455-2438";

                  phoneNumber = phoneNumber.replace(" ", "");
                  phoneNumber = phoneNumber.replace(/-/gi, "");
                  const kakaoId = firstRes.data.data.id;
                  const email = firstRes.data.data.kakao_account.email;

                  const marketingAgreed =
                    secondRes.data.data.allowed_service_terms.length;
                  const bMarketingPolicyAgreed =
                    marketingAgreed === 4 ? true : false;
                  setMarketingAgreed(bMarketingPolicyAgreed);
                  return axios.post(
                    "https://mulli.world/banto2/app/user/loginWithKakaoId",
                    {
                      kakaoId,
                      phoneNumber,
                      email
                    }
                  );
                })
              )
              .then((res) => {
                setUserId(res.data.data.userUuid);
                sessionStorage.setItem("userId", res.data.data.userUuid);

                return axios
                  .post(
                    "https://mulli.world/banto2/app/user/updateUserAgreedPolicy",
                    {
                      userUuid: res.data.data.userUuid,
                      bMarketingPolicyAgreed: bMarketingAgreed
                    }
                  )
                  .then((res) => {
                    if (res.data.code !== 200) {
                      window.alert(res.data.msg);
                    }
                  });
              })
              .catch(function (e) {
                window.alert(e.message);
              });
          },
          fail: function (err) {
            alert(JSON.stringify(err));
            window.alert(err);
          }
        });
      })
      .catch(function (error) {
        window.alert(error.message);
        props.history.push();
      });
  }, []);

  React.useEffect(() => {
    if (userId !== "") {
      axios
        .all([
          axios.post("https://mulli.world/banto2/app/user/checkUserPayment", {
            userUuid: userId
          }),
          axios.post("https://mulli.world/banto2/app/rent/checkUserRenting", {
            userUuid: userId
          })
        ])
        .then(
          axios.spread((firstRes, secondRes) => {
            const payment = firstRes.data.data.payment;
            const bRenting = secondRes.data.data.bRenting;

            if (bRenting) {
              sessionStorage.clear();
              window.alert(
                "현재 대여중인 배터리가 있습니다. 반납 완료 후에 빌려주세요"
              );
            } else if (payment === "none") {
              console.log("일로왔음1");
              props.history.push("/simple/kakaopay");
              // window.alert("1");
              // window.location.href = "/kakaopayregisterforweb";
            } else {
              console.log("일로왔음");
              props.history.push("/simple/purchase");

              // window.alert("2");
              // window.location.href = "/purchaseforweb";
            }
          })
        );
    }
    // setLoading(true);
  }, [userId]);
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
          id="storeName"
          style={{
            color: "white",
            alignText: "left",
            marginLeft: "5%",
            paddingTop: "20px",
            fontSize: "24px"
          }}
        >
          가맹점
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
          {" "}
          <div id="create-kakao-login-btn" />
        </div>
      </div>
    </>
  );
}
