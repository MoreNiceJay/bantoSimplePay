
import React from "react";

export default function CustomButton(props) {
    return (<div
        style={{
            background: "#000000",
            border: "2px solid #242427",
            boxSizing: "border-box",
            borderRadius: "15px",
            width: "calc(100% - 32px)",
            margin: "auto"

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
                marginRight: "18px",
                marginTop: "10px"
            }}
        >
            {props.children}
        </div>
    </div>)
}