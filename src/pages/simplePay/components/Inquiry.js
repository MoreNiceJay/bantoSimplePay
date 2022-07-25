
import React from "react";
import DesText from "./DesText";
import Card from "./Card"
import { Link } from "react-router-dom";

export default function Inquiry(props) {
    return (<> <DesText style={{
        marginTop: "30px", fontSize: "16px", color: "#c0c1c5",
        marginLeft: "16px", marginRight: "16px", marginBottom: "5px"
    }}>반토 고객센터</DesText>
        <Card>
            <DesText>
                {"문의사항 발생시 아래 링크를 누르면 반토 카카오고객센터로 연결됩니다"}
            </DesText>

            <a style={{ marginTop: "24px", marginBottom: "24px", textAlign: "center" }} href="https://pf.kakao.com/_eWuNT/chat" target="_blank">반토 고객센터</a>

        </Card></>)
}