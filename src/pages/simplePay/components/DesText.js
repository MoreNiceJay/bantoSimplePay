
import React from "react";

export default function DesText(props) {
    return (<p
        style={{
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "21px",
            color: "#c0c1c5",
            marginBottom: "5px"
        }}
        {...props}
    >
        {props.children}
    </p>)
}