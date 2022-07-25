import React from "react";

// or you can also write
// import htmlContent from 'path/to/html/file.html');

export default function GeoPlicy() {
  // return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  // return <iframe src={htmlContent}></iframe> /* like this */;
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>환불약관</title>
      <link rel="stylesheet" href="https://stackedit.io/style.css" />
      <div className="stackedit__html">
        <h3 id="환불약관">
          <strong>환불약관</strong>
        </h3>
        <p>
          <strong>제 1 조 </strong>
        </p>
        <p>
          회원은 서비스가 정상적으로 제공되지 않는 경우 환불 요청을 할 수
          있습니다. 다만, 다음 각 호의 어느 하나에 해당하는 경우 회사의 의사에
          반하여 환불을 요청할 수 없습니다.
        </p>
        <li>
          회원의 책임 사유로 보조 배터리나 반토박스가 분실되거나 훼손된 경우
        </li>
        <li>그 밖의 환불을 요구함이 현저히 부당한 경우</li>
        <p>
          <strong>제 2 조 </strong>
        </p>
        <p>
          회원이 서비스 이용 시작 기준 5분 이내에 반납하여 서비스 이용을
          종료하였을 경우 지불된 금액은 자동 환불조치 됩니다.
        </p>
        <p>
          <strong>제 3 조 </strong>
        </p>
        <p>
          환불의 경우 회사는 회원의 요청이 있는 때로부터 7영업일 이내에 회원이
          지불한 결제수단과 동일한 방법으로 환불합니다. 다만, 동일한 방법으로
          환불이 불가능할 경우에는 현금 등 다른 수단으로 환불할 수 있습니다.
        </p>
        <p>
          <strong>제 4 조 </strong>
        </p>
        <p>
          위와 같은 환불과 관련된 기준은 경우에 따라 변경될 수 있으며, 이에 대한
          회사의 적절한 공지 및 안내에도 불구하고 회원이 이를 숙지하지 못하여
          입게 되는 손해에 대하여 회사는 어떠한 책임도 부담하지 않습니다.
        </p>
        <ol>
          <p>본 약관은 2019년 1월 1일부터 시행합니다.</p>
        </ol>
      </div>
    </div>
  );
}
