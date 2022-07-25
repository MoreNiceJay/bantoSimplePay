import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "./components/Button";

const useStyles = makeStyles({
  returnDiv: {},
});
export default function App(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0B0B0C",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#EAEBF1",
            lineHeight: "36px",
            fontSize: "24px",
            fontWeight: "600",
            paddingTop: "50%",
            backgroundColor: "#0B0B0C",
          }}
        >
          <img
            style={{ height: "120px", width: "auto" }}
            src={require("../../assets/img/complete.png")}
            alt="complete"
          />

          <p style={{ marginTop: "50px" }}>반납이 완료됐습니다</p>
        </div>
        <div
          style={{
            margin: "28px 16px",
            backgroundColor: "#000000",
            border: "2px solid #313139",
            boxSizing: "border-box",
            borderRadius: "15px",
            // height: "169px",
            color: "#EAEBF1",
            textAlign: "center",
          }}
        >
          <div style={{ padding: "28px 16px" }}>
            <p
              style={{
                color: "#00E5FF",
                fontFamily: "Noto Sans KR",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              반납방법
            </p>
            <p
              style={{
                marginTop: "24px",
                fontFamily: "Noto Sans CJK KR",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "21px",
                /* identical to box height */

                textAlign: "center",

                /* Light */

                color: "#EAEBF1",
              }}
            >
              1. 보조배터리를 기기안에 끝까지 밀어넣어주세요.
            </p>
            <p
              style={{
                marginTop: "24px",
                fontFamily: "Noto Sans KR",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "21px",
                /* identical to box height */

                textAlign: "center",

                /* Light */

                color: "#EAEBF1",
              }}
            >
              2. 잠시만 기다리시면 반납이 완료 됩니다.
            </p>
          </div>
        </div>
        <Button
          callback={async () => {
            window.location.replace(
              "https://csb-8ehm7l-n7ytrtxex-morenicejay.vercel.app/"
            );
          }}
        >
          확인
        </Button>
      </div>
    </>
  );
}
