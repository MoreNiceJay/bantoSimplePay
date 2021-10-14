import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles({});
export default function App(props) {
  const classes = useStyles();
  const [stationId, setStationId] = React.useState("");
  const [bMarketingAgreed, setMarketingAgreed] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [timeStamp, setTimeStamp] = React.useState("");
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
    // axios
    //   .post("https://mulli.world/banto2/app/store/getStoreName", {
    //     // stationId: props.location.state.stationId
    //     stationId: sessionStorage.getItem("stationId")
    //   })
    //   .then((value) => {
    // if (value.data.code !== 200) {
    //   window.alert(value.data.msg);
    //   // props.history.push();
    // }
    let elem = document.getElementById("storeName");
    // elem.innerHTML = "대여가맹점: " + value.data.data.storeName;
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("86d0fb152d4eb19ea7bb774cd3c7809c");
    }
    window.Kakao.Auth.createLoginButton({
      container: "#create-kakao-login-btn",
      success: function (authObj) {
        const accessToken = authObj.access_token;
        setTimeStamp(new Date());
        axios
          .all([
            axios.post("https://mulli.world/banto2/app/user/getKakaoInfo", {
              accessKey: accessToken
            }),
            axios.post("https://mulli.world/banto2/app/user/getKakaoPolicy", {
              accessKey: accessToken
            })
          ])
          .then(
            axios.spread((firstRes, secondRes) => {
              if (firstRes.data.code !== 200) {
                window.alert("오디에러1", firstRes.data.msg);
                return;
              }
              if (secondRes.data.code !== 200) {
                window.alert("오디에러2", secondRes.data.msg);
                return;
              }
              if (!firstRes.data.data.kakao_account.has_phone_number) {
                window.alert(
                  "카카오ID에 휴대번호 정보가 없습니다.반토 앱을 사용해 주세요"
                );
                //   window.location.href = "https://banto.io";
              }
              let phoneNumber = firstRes.data.data.kakao_account.phone_number;

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
            setUserId(res.data.data.userId);
            sessionStorage.setItem("userId", res.data.data.userId);
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
    // })
    // .catch(function (error) {
    // window.alert(error.message);
    // props.history.push();
    // });
  }, []);

  React.useEffect(() => {
    if (userId !== "") {
      axios
        .all([
          axios.post("https://mulli.world/banto2/app/user/checkUserPayment", {
            userId: userId
          }),
          axios.post("https://mulli.world/banto2/app/rent/checkUserRenting", {
            userId: userId
          }),
          axios.post(
            "https://mulli.world/banto2/app/user/updateUserAgreedPolicy",
            {
              userId: userId,
              bMarketingPolicyAgreed: bMarketingAgreed
            }
          )
        ])
        .then(
          axios.spread((firstRes, secondRes) => {
            const payment = firstRes.data.data.payment;
            const bRenting = secondRes.data.data.bRenting;
            if (bRenting) {
              window.alert(
                "현재 대여중인 배터리가 있습니다. 반납 완료 후에 다시 시도해주세요"
              );
              sessionStorage.clear();
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
  }, [userId, timeStamp]);
  return (
    <>
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
            <div style={{ marginTop: "100px" }} id="create-kakao-login-btn" />
          </div>
        </div>
      </body>
    </>
  );
}
