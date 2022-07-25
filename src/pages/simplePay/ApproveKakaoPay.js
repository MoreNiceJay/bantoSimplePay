import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../../Constants"
import qs from "qs";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({});
export default function App(props) {
    const location = useLocation();
    const query = qs.parse(props.location.search, {
        ignoreQueryPrefix: true // /about?details=true 같은 쿼리 주소의 '?'를 생략해주는 옵션입니다.
    });
    const [userId, setUserId] = React.useState(null)
    const [pgToken, setPgToken] = React.useState(null)
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    function getQuery(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
    }
    React.useEffect(() => {

        (async () => {
            const uid = getQuery("userId")
            const pg = getQuery("pg_token")
            setUserId(uid)
            setPgToken(pg)
        })()
    }, []);
    React.useEffect(() => {
        (async () => {
            if (pgToken === null) {
                return
            }
            const approveUrl = `https://api.banto.io/banto2/app/user/approveKakaoPay/${userId}/?pg_token=${pgToken}`
            const result = await axios.get(approveUrl)
            if (result.data.code !== 200) {
                alert("카카오 등록실패 : 다시 처음부터 시도해 주세요")
                props.history.push("https://banto.io")
                return
            }
            props.history.push("/" + result.data.url)
        })()

    }, [pgToken]);
    return (
        <>
            <div>
                <p style={{ fontSize: "18px" }}>카카오 페이 등록중</p>
            </div>
        </>
    );
}
