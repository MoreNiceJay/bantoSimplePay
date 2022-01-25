
import React from "react";

export default function CustomButton(props) {
    const [isDisabled, setIsDisabled] = React.useState(false)
    return (<button
        disabled={isDisabled}
        style={{
            width: "100%",
            height: "66px",
            width: "calc(100% - 32px)",
            background: "#EAEBF1",
            borderRadius: "15px",
            border: "none",
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "27px",
            marginTop: "40px",
            marginLeft: "16px",
            marginRight: "16px"
        }}

        // className="purchaseForWebButton"
        onClick={async () => {
            setIsDisabled(true)
            const result = await props.callback()
            setIsDisabled(false)



        }}
        {...props}
    >
        {props.children}
    </button>)
}