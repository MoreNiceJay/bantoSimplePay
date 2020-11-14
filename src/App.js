import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link, Redirect } from "react-router-dom";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import queryString from "query-string";

const useStyles = makeStyles((theme) => ({
  appHeader: {
    display: "flex",
    border: "0",
    width: "100%",
    position: "sticky",
    top: "0px",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexFlow: "row nowrap",
    zIndex: "unset",
    padding: "10px",
    paddingLeft: "30px",
    paddingRight: "30px",
    boxSizing: "border-box"
  },
  appHeader__logo: { width: "96px", height: "21px" },
  appHeader__menu: {
    "& li": {
      padding: "10px 0px 10px 30px;"
    },
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none"
  },
  introSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  appHeaderMobileMenu: { display: "none" },
  hand_img: { left: "15%", width: "540px", height: "auto" },
  // leftTexts: { height: "auto" },
  leftText: {
    fontFamily: "Noto Sans KR",
    fontWeight: "900",
    letterSpacing: "0.3px",
    fontSize: "40px",
    lineHeight: "58px"
  },
  iconContainer: { display: "flex", justifyContent: "start", height: "50%" },
  appstoreIcon: {
    marginTop: "21px",
    width: "105px",
    height: "30px",
    marginRight: "15px",
    borderRadius: "7px"
  },
  googleStoreIcon: {
    marginTop: "21px",
    width: "105px",
    height: "30px",
    borderRadius: "7px"
  },
  appUsageContainer: {
    margin: "0px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  appUsage_texts: {
    color: "#4f3f3f",
    marginRight: "12%",
    "& li": {
      padding: "20px 00px 20px 00px;",
      clear: "both",
      diplay: "flex",
      alignItems: "baseline",
      whiteSpace: "nowrap",
      fontFamily: "Noto Sans KR",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "24px"
    }
  },
  appUsageText_deactive: {
    "&:hover": {
      color: "grey",
      cursor: "pointer"
    }
  },
  appUsageText_active: {
    color: "white",
    "&:hover": {
      cursor: "pointer"
    }
  },
  appUsageImg: {
    marginTop: "202px",
    marginBottom: "201px",
    width: "300px",
    height: "auto",

    transition: [".5s", "ease"]
  },
  thunder_active: {
    width: "10px",
    height: "19px",
    verticalAlign: "middle",
    marginRight: "10px"
  },
  thunder_deactive: {
    width: "10px",
    height: "19px",
    verticalAlign: "middle",
    marginRight: "10px",
    visibility: "hidden"
  },
  partnersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  partnerLogoImg: {
    width: "394px",
    height: "62px",
    marginTop: "318px",
    marginBottom: "10px"
  },
  partnerText: {
    fontFamily: "Noto Sans KR",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "50px",
    lineHeight: "72px"
  },
  partnerButton: {
    width: "300px",
    height: "84px",
    border: "4px solid #000000",
    backgroundColor: "transparent",
    fontFamily: "Noto Sans KR",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "20px",
    lineHeight: "29px",
    marginTop: "60px",
    marginBottom: "318px"
  },
  partnershipContainer: {
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  partnershipTitle: {
    marginTop: "271px",
    fontFamily: "Noto Sans KR",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "50px",
    color: "#F0F0F0",
    marginBottom: "60px"
  },
  partnershipGrid: {
    display: "flex",
    marginBottom: "210px",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around"
  },
  partnerInsideGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px"
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center"
  },
  footerLogo: {
    width: "261px",
    height: "auto",
    marginTop: "60px",
    marginBottom: "30px"
  },

  footerDivider: {
    margin: "0px",
    color: "white",
    width: "100%",
    border: "1px solid #4F4F4F",
    boxSizing: "border-box"
  },
  footerTexts: {
    color: "#4f4f4f",
    lineHeight: "30px",
    textAlign: "center",
    marginBottom: "60px"
  },
  a: {
    textDecoration: "none",
    color: "black"
  },
  ab: {
    textDecoration: "none",
    color: "#4f4f4f"
  },
  "@media (max-width: 768px)": {
    appHeader: { padding: "10px" },
    appHeader__menu: {
      display: "none"
    },
    appHeaderMobileMenu: {
      display: "block",
      paddingRight: "10px",
      textDecoration: "none",
      color: "black"
    },

    introSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column-reverse"
    },
    hand_img: {
      display: "flex",
      alignSelf: "center",
      marginLeft: "5%",
      marginRight: "150px",
      width: "330px"
    },
    leftTexts: {
      marginTop: "35px"
    },
    leftText: {
      textAlign: "center"
    },
    iconContainer: { marginTop: "10px" },
    appstoreIcon: { width: "150px", height: "auto", borderRadius: "7px" },
    googleStoreIcon: { width: "150px", height: "auto", borderRadius: "7px" },
    appUsageContainer: {
      margin: "0px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      flexDirection: "column-reverse"
    },
    appUsageImg: { margin: "60px 10px auto", width: "200px", height: "auto" },
    appUsage_texts: {
      display: "flex",
      justifyContent: "space-between",
      alignContent: "space-around",
      margin: "30px",
      width: "90%",
      "& li": {
        padding: "15px",
        fontSize: "18px"
      }
    },
    partnerLogoImg: {
      width: "230px",
      height: "auto",
      marginTop: "60px",
      marginBottom: "45px"
    },
    partnerText: {
      fontFamily: "Noto Sans KR",
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: "40px",
      textAlign: "center",
      lineHeight: "45px"
    },
    partnerButton: {
      marginTop: "90px",
      marginBottom: "60px"
    },
    partnershipTitle: { margin: "40px auto", fontSize: "38px" },
    partnershipGrid: { marginBottom: "60px" },

    footerLogo: { width: "170px", height: "auto" },
    menuOpened: {
      position: "fixed",
      top: "0px",
      bottom: "0px",
      left: "0px",
      right: "0px"
    },
    appHeaderMobileMenuClose: {
      position: "fixed",
      right: "20px",
      top: "10px",
      color: "black"
    },
    appHeader__menuIsOpened: {
      diplay: "fixed",
      padding: "40px 0px 0px 20px",
      "& li": { padding: "30px" }
    }
  }
}));

export default function App(props) {
  const classes = useStyles();
  const [menuIsOpened, setMenuIsOpened] = React.useState(false);
  const [usageState, setUsageState] = React.useState({
    location: true,
    scan: false,
    charging: false
  });
  const [usageImageState, setUsageImageState] = React.useState(
    <img
      className={classes.appUsageImg}
      src={require(`../src/assets/img/find_location.png`)}
      alt="logo"
    />
  );
  let usageImage = (
    <img
      className={classes.appUsageImg}
      src={require(`../src/assets/img/find_location.png`)}
      alt="logo"
    />
  );
  function locationIsSelected() {
    setUsageState({
      location: true,
      scan: false,
      charging: false
    });
    setUsageImageState(
      <img
        className={classes.appUsageImg}
        src={require(`../src/assets/img/find_location.png`)}
        alt="logo"
      />
    );
  }
  function scanIsSelected() {
    setUsageState({
      location: false,
      scan: true,
      charging: false
    });
    setUsageImageState(
      <img
        className={classes.appUsageImg}
        src={require(`../src/assets/img/scan.png`)}
        alt="logo"
      />
    );
  }
  function chargingIsSelected() {
    setUsageState({
      location: false,
      scan: false,
      charging: true
    });
    setUsageImageState(
      <img
        className={classes.appUsageImg}
        src={require(`../src/assets/img/using.png`)}
        alt="logo"
      />
    );
  }
  React.useEffect(() => {
    var query = window.location.search;
    const params = new URLSearchParams(query);
    const stationId = params.get("stationId"); // bar
    if (stationId === null) {
    } else {
      props.history.push({
        pathname: "/select",
        // search: "?query=abc",
        state: { stationId: stationId }
      });
    }
  }, []);

  const gridDummy = [
    { title: "온클라우드", img: require("../src/assets/img/header_logo.png") },
    { title: "온클라우드", img: require("../src/assets/img/header_logo.png") },
    { title: "온클라우드", img: require("../src/assets/img/header_logo.png") }
  ];
  if (menuIsOpened) {
    return (
      <div className={classes.menuOpened}>
        <a
          href="/#"
          className={classes.appHeaderMobileMenuClose}
          onClick={() => {
            setMenuIsOpened(false);
          }}
        >
          {" "}
          <CloseSharpIcon />{" "}
        </a>
        <ul className={classes.appHeader__menuIsOpened}>
          <li>
            <Link to="/" className={classes.a}>
              서비스 소개
            </Link>
          </li>
          <li>
            {" "}
            <a
              className={classes.a}
              target="_blank"
              rel="noopener noreferrer"
              href="https://partners.banto.io"
            >
              파트너스
            </a>
          </li>
          <li>
            <a
              className={classes.a}
              target="_blank"
              rel="noopener noreferrer"
              href="https://help.banto.io"
            >
              지원받기
            </a>
          </li>
          <li>
            <a
              className={classes.a}
              target="_blank"
              rel="noopener noreferrer"
              href="https://help.banto.io"
            >
              이벤트
            </a>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <>
      <nav className={classes.appHeader}>
        <div>
          <Link to="/">
            <img
              className={classes.appHeader__logo}
              src={require("../src/assets/img/header_logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <ul className={classes.appHeader__menu}>
          <li>
            <Link to="/" className={classes.a}>
              서비스 소개
            </Link>
          </li>
          <li>
            {" "}
            <a
              className={classes.a}
              target="_blank"
              rel="noopener noreferrer"
              href="https://partners.banto.io"
            >
              파트너스
            </a>
          </li>
          <li>
            <a
              className={classes.a}
              target="_blank"
              rel="noopener noreferrer"
              href="https://help.banto.io"
            >
              지원받기
            </a>
          </li>
          <li>
            <a
              className={classes.a}
              target="_blank"
              rel="noopener noreferrer"
              href="https://help.banto.io"
            >
              이벤트
            </a>
          </li>
        </ul>
        <a
          href="/#"
          className={classes.appHeaderMobileMenu}
          onClick={() => {
            setMenuIsOpened(true);
          }}
        >
          {" "}
          <MenuSharpIcon />{" "}
        </a>
      </nav>
      <section className={classes.introSection}>
        <img
          className={classes.hand_img}
          src={require("../src/assets/img/background_hand.png")}
          alt="logo"
        />
        <div className={classes.leftTexts}>
          <div className="">
            <p className={classes.leftText}>나의 시간</p>
            <p className={classes.leftText}>그리고 반토</p>
          </div>
          <div className={classes.iconContainer}>
            <div className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/kr/app/%EB%B0%98%ED%86%A0-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-%EB%8C%80%EC%97%AC-%EC%84%9C%EB%B9%84%EC%8A%A4/id1479328305"
              >
                <img
                  className={classes.appstoreIcon}
                  src={require("../src/assets/img/apple_appstore.png")}
                  alt="apple_appstore"
                />
              </a>
            </div>
            <div className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.Banto.Battery"
              >
                <img
                  className={classes.googleStoreIcon}
                  src={require("../src/assets/img/google_playStore.png")}
                  alt="google_play_store"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.appUsageContainer}>
        <ul className={classes.appUsage_texts}>
          <li>
            {" "}
            <img
              className={
                usageState.location
                  ? classes.thunder_active
                  : classes.thunder_deactive
              }
              src={require("../src/assets/img/whiteThunder.png")}
              alt="location"
            />
            <span
              className={classes.findLocationText}
              onClick={locationIsSelected}
            >
              <span
                className={
                  usageState.location
                    ? classes.appUsageText_active
                    : classes.appUsageText_deactive
                }
              >
                위치 찾기
              </span>
            </span>
          </li>
          <li>
            <img
              className={
                usageState.scan
                  ? classes.thunder_active
                  : classes.thunder_deactive
              }
              src={require("../src/assets/img/whiteThunder.png")}
              alt="scan"
            />
            <span
              className={
                usageState.scan
                  ? classes.appUsageText_active
                  : classes.appUsageText_deactive
              }
              onClick={scanIsSelected}
            >
              스캔 하기
            </span>
          </li>
          <li>
            <img
              className={
                usageState.charging
                  ? classes.thunder_active
                  : classes.thunder_deactive
              }
              src={require("../src/assets/img/whiteThunder.png")}
              alt="charging"
            />
            <span
              className={
                usageState.charging
                  ? classes.appUsageText_active
                  : classes.appUsageText_deactive
              }
              onClick={chargingIsSelected}
            >
              충전 하기
            </span>
          </li>
        </ul>
        <div>{usageImageState}</div>
      </section>
      <section className={classes.partnersContainer}>
        <img
          className={classes.partnerLogoImg}
          src={require("../src/assets/img/partnersLogo.png")}
          alt="partner_logo"
        />
        <span className={classes.partnerText}>
          작은 움직임이 <br />큰 흐름이 됩니다
        </span>

        <button
          className={classes.partnerButton}
          onClick={() => {
            window.open("https://partners.banto.io", "_blank");
          }}
        >
          파트너스 참여하기
        </button>
      </section>
      <section className={classes.partnershipContainer}>
        <h1 className={classes.partnershipTitle}>제휴 업체</h1>
        <div className={classes.partnershipGrid}>
          {gridDummy.map((element) => {
            return (
              <>
                <div className={classes.partnerInsideGrid}>
                  <img
                    className={classes.gridImg}
                    src={element.img}
                    alt="partner_logo"
                  />
                  <p>{element.title}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <footer className={classes.footerContainer}>
        <hr className={classes.footerDivider} />
        <img
          className={classes.footerLogo}
          src={require("../src/assets/img/partnersLogo_white.png")}
          alt="partner_logo"
        />
        <div className={classes.footerTexts}>
          <p>회사명 반토 주식회사</p>
          <p>대표자 이장협</p>
          <p>사업자 등록번호 187-87-01044 </p>
          <p>주소 서울 영등포구 대림동 851-100 하나세인스톤 </p>
          <p>통신판매업 2019-서울 영등포-0459 </p>
          <p>고객센터 070 8065 5699 </p>
          <p>
            {" "}
            <a
              className={classes.ab}
              target="_blank"
              rel="noopener noreferrer"
              href="https://bantoweb.xyz/policy/service_policy"
            >
              서비스 이용 약관{" "}
            </a>
            |{" "}
            <a
              className={classes.ab}
              target="_blank"
              rel="noopener noreferrer"
              href="https://bantoweb.xyz/policy/private_policy"
            >
              개인정보 취급방침
            </a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
