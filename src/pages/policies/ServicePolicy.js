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
      <title>서비스 이용약관</title>
      <link rel="stylesheet" href="https://stackedit.io/style.css" />
      <div className="stackedit__html">
        <h3 id="서비스-이용약관">
          <strong>서비스 이용약관</strong>
        </h3>
        <p>
          <strong>제 1 조 (목적)</strong>
        </p>
        <p>
          본 약관은 주식회사 반토(이하 “회사”)가 제공하는 Banto(반토) 서비스의
          이용과 관련하여 회사와 회원의 권리, 의무 및 책임사항, 기타 필요한
          사항을 규정함을 목적으로 합니다.
        </p>
        <p>
          <strong>제 2 조 (정의)</strong>
        </p>
        <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
        <ol>
          <li>
            "Banto(반토)”(이하 “서비스”)이라 함은 애플리케이션(이하 “앱”이라
            합니다)을 통해 “보조배터리 대여”를 제공하는 유료의 서비스로 구체적인
            내용은 제 9조에 따릅니다.
          </li>
          <li>
            “회원”이라 함은 회사의 서비스에 접속하여 본 약관에 따라 회사와
            이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을
            말합니다.
          </li>
          <li>
            “보조배터리 대여” 라 함은 회사가 소유한 보조배터리를 앱을 통하여
            이용하는 것을 말합니다.
          </li>
          <li>
            “보조배터리”라 함은 다양한 종류의 휴대폰 충전 단자가 부착된 휴대
            가능한 외장형 배터리로써 회사가 서비스로 제공하는 충전 수단을
            말합니다.
          </li>
          <li>
            “이용 요금”이라 함은 보조배터리를 반토박스로부터 대여 한 시점부터
            다시 반납한 시점까지의 이용 시간에 대한 요금을 말합니다.
          </li>
          <li>
            "반토박스"라 함은 회사에서 제공하는 보조배터리를 충전하기 위해
            특정한 장소에 설치된 기기를 말합니다.
          </li>
          <li>
            “자동결제”라 함은 “웹 브라우저”를 기반으로 하여 PC 또는 모바일에서
            이용 회원이 카드나 계좌 등 결제수단의 관련 정보를 매번 입력할 필요
            없이 1회 등록만으로 상품 결제가 가능한 서비스를 말합니다.
          </li>
        </ol>
        <p>
          본 약관에서 사용하는 용어의 정의는 제2조에서 정하는 것을 제외하고는
          관련법령, 상관례 및 이용정책에서 정하는 바에 의합니다.
        </p>
        <p>
          <strong>제 3 조 (약관의 효력 및 변경)</strong>
        </p>
        <p>
          ① 본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을
          발생합니다.
          <br />
          ② 본 약관의 내용을 회원이 쉽게 알 수 있도록 회사가 본 약관을 서비스
          화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써, 본 약관은
          효력이 발생합니다.
          <br />
          ③ 회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및
          정보보호 등에 관한 법률」(이하 “정보통신망법”) 등 관련법령을 위배하지
          않는 범위에서 본 약관을 개정할 수 있습니다. 약관이 개정된 경우 회사는
          지체 없이 개정약관을 현행약관과 함께 이메일 또는 제2항과 같은 방법으로
          개정약관의 적용일자 7일 전에 공지 또는 통지합니다. 다만, 회원의 권리
          또는 의무에 관한 중요한 규정의 변경은 최소한 개정약관의 적용일자 30일
          전에 공지 또는 통지합니다.
          <br />
          ④ 회사가 전항에 따라 개정약관을 명확하게 공지 또는 통지하면서 회원에게
          개정약관 적용일자까지 거부의사를 표시하지 아니할 경우 약관의 변경에
          동의한 것으로 간주한다는 뜻을 명확하게 공지 또는 통지하였음에도 회원이
          명시적으로 거부의 의사표시를 하지 아니한 경우 회원이 개정약관에 동의한
          것으로 봅니다.
          <br />⑤ 회원이 개정약관의 적용에 동의하지 않는 경우 회사는 개정약관의
          내용을 적용할 수 없으며, 이 경우 회사 또는 회원은 이용계약을 해지할 수
          있습니다. 다만, 회사가 개정약관에 부동의한 회원에게 기존 약관을 적용할
          수 없는 특별한 사정이 있는 경우에는 회사는 해당 회원과의 이용계약을
          해지할 수 있습니다.
        </p>
        <p>
          <strong>제 4 조 (회원에 대한 통지)</strong>
        </p>
        <p>
          ① 회사는 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한
          회원이 제공한 (휴대)전화번호 및 로그인 시 동의창 등 적절한 수단으로
          통지할 수 있습니다.
          <br />
          ② 회사는 회원 전체에 대한 통지의 경우 7일 이상 앱 내에 게시함으로써
          제1항의 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여
          중대한 영향을 미치는 사항에 대하여는 제1항의 통지를 합니다.
          <br />③ 회사는 회원의 연락처 미기재, 변경 후 미수정 등으로 인하여 개별
          통지가 어려운 경우에 한하여 전항 전단의 공지를 함으로써 개별 통지를 한
          것으로 간주합니다.
        </p>
        <ol>
          <p>
            <strong>제 5 조 (회원가입 및 이용계약의 성립)</strong>
          </p>
          <p>
            ① 이 서비스의 회원이 되고자 하는 자는 본 약관 및 별도의 「개인정보
            수집ㆍ이용에 관한 동의」, 「개인정보 제3자 제공에 관한 동의」,
            「위치정보동의」에 대하여 동의 절차를 완료함으로써 회원가입신청을
            하고 회사가 이러한 신청에 대하여 승인함으로써 이용계약이 체결됩니다.
            <br />② 회사는 회원이 되고자 하는 자의 가입신청에 대하여 서비스 이용
            승인을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는 신청에
            대하여는 승인하지 않을 수 있습니다.
          </p>
          <ol>
            <li>
              회원 가입 신청 시 입력한 정보가 사실관계와 다르거나 정확하지 않은
              경우
            </li>
            <li>서비스 이용에 필수적인 정보 또는 자격이 충분하지 않은 경우</li>
            <li>
              가입 신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는
              경우, 단 회사의 회원 재가입 승인을 얻은 경우에는 예외로 함.
            </li>
            <li>
              회원 가입 신청자의 귀책사유로 인하여 회사의 승인이 불가능하거나
              기타 규정한 제반 사항을 위반하며 신청하는 경우
            </li>
          </ol>
          <p>
            ③ 회사는 다음 각 호에 해당하는 경우, 승인을 철회 또는 이용을 제한할
            수 있습니다.
          </p>
          <ol>
            <li>가입 신청 시 입력한 정보가 허위로 판명된 경우</li>
            <li>다른 회원으로부터 이용 불편에 대한 신고가 접수된 경우</li>
            <li>악의적 목적을 가지고 서비스를 이용하는 경우</li>
          </ol>
          <p>
            ④ 제1항에 따른 신청에 있어 회사는 회원의 종류에 따라 전문기관을 통한
            실명확인 및 본인인증을 요청할 수 있습니다.
          </p>
          <p>
            ⑤ 회사는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가
            있는 경우에는 승인을 유보할 수 있습니다.
          </p>
          <p>
            ⑥ 회사는 회원가입신청자에 대해 회사 정책에 따라 등급별로 구분하여
            이용 요금, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.
          </p>
          <p>
            <strong>제 6 조 (회원정보의 변경)</strong>
          </p>
          <p>
            ① 회원은 언제든지 앱 내 프로필 화면에서 자신의 개인정보를 조회하거나
            수정할 수 있습니다. 다만, 서비스 관리를 위해 회사가 필요하다고
            판단한 개인정보는 수정이 불가능합니다.
            <br />
            ② 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로
            수정을 하거나 이메일 등 기타 방법으로 회사에 대하여 그 변경사항을
            알려야 합니다.
            <br />③ 제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여
            회사는 책임지지 않습니다.
          </p>
          <p>
            <strong>제 7 조 (약관 외 준칙)</strong>
          </p>
          <p>
            ① 회사는 필요한 경우 이용정책을 정하여 운영할 수 있으며 해당 내용은
            홈페이지 등을 통해 공지합니다.
            <br />
            ② 본 약관에 규정되지 않은 사항에 대해서는 관련법령 또는 이용정책에서
            정한 바에 따릅니다.
            <br />③ 회원은 항상 이용정책의 내용에 변경이 있는지 여부를
            확인하여야 하며, 이를 확인하지 않아 발생한 손해에 대해서는 회사는
            책임을 부담하지 않습니다.
          </p>
          <p>
            <strong>제 8 조 (서비스 이용제한 등)</strong>
          </p>
          <p>
            ① 회사는 다음 각 호에 해당하는 경우 회원에 대하여 서비스 제공을
            제한하거나 중지할 수 있습니다.
          </p>
          <ol>
            <li>회사와 회원간에 서비스 제공과 관련된 약정이 종료되는 경우</li>
            <li>
              회원이 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한
              경우
            </li>
            <li>회원이 타인의 명의를 도용하여 회원가입을 한 경우</li>
            <li>
              유료결제를 함에 있어서 타인 명의 결제 도용, 전화번호 도용 등
              불법적인 결제를 한 경우
            </li>
          </ol>
          <p>
            불법프로그램의 제공 및 운영 방해, 정보통신망법을 위반한 불법 통신 및
            해킹, 악성프로그램의 배포, 접속 권한 초과 행위 등과 같이 회원이
            관련법령을 위반한 경우
          </p>
          <ol>
            <li>회원이 계속해서 1년 이상 로그인하지 않는 경우</li>
            <li>회원이 본 약관에서 정한 의무사항을 위반한 경우</li>
          </ol>
          <p>
            ② 본 조 제1항에 따라 서비스 이용이 제한되는 경우 회원이 획득한
            혜택과 보유한 권리 등도 모두 소멸되며, 회사는 이에 대해 별도로
            보상하지 않습니다.
            <br />
            ③ 본 조 제1항에 따라 서비스 이용이 제한 또는 중지된 회원에 대해서
            회사는 회원에게 통지로써 회원자격을 상실 또는 1년 동안 정지시킬 수
            있습니다.
            <br />④ 회사는, 다음 각 호의 경우 당해 서비스의 전부 또는 일부의
            제공을 중단하거나 제한할 수 있습니다.
          </p>
          <ol>
            <li>
              천재지변, 전쟁, 폭동, 화재, 파업 등 쟁의행위, 정부기관의 통제 기타
              회사의 합리적인 노력으로 제어할 수 없는 사유가 발생하거나 발생할
              우려가 있는 경우
            </li>
            <li>기간통신사업자로부터 전기통신서비스가 제공되지 않은 경우</li>
            <li>
              서비스용 설비의 장애 및 정기 점검, 보수점검, 교체 또는 고장,
              통신의 두절 등의 사유가 발생한 경우
            </li>
            <li>
              서비스가 제3자와의 제휴를 통하여 제공되는 경우에 당해 제휴사업자의
              사정에 따라 변경되거나 중지되는 경우
            </li>
            <li>
              기타 서비스의 원활한 운영을 현저히 저해하는 사유가 발생한 경우
            </li>
          </ol>
          <p>
            ⑤ 본 조 제 4항의 사유로 서비스 내용이 변경 또는 중단되는 경우,
            회사는 그로 인해 회원이 입은 손해에 대하여 고의 또는 중과실이 없는
            한 배상하지 않습니다.
            <br />⑥ 본 조에 따라 서비스 이용을 제한하거나 중지하는 경우에는
            회사는 사전에 이를 회원에게 통지하거나 공지합니다. 다만 부득이한
            경우 사후에 통지하거나 공지할 수 있습니다.
          </p>
          <p>
            <strong>제 9 조 (서비스 제공)</strong>
          </p>
          <p>① 회사가 제공하는 서비스의 내용은 다음과 같습니다.</p>
          <ol>
            <li>
              위치기반 서비스
              <br />
              회원의 위치정보를 활용하여 스테이션의 위치 정보를 제공하는 서비스
            </li>
            <li>
              보조배터리 이용요금 결제를 위한 카드 등록 서비스
              <br />
            </li>
            <li>
              보조배터리 대여 서비스
              <br />
              회사 소유의 보조배터리를 앱을 통하여 이용할 수 있는 서비스
            </li>
          </ol>
          <p>
            ② 회사는 제 1항의 각 호의 서비스 이외에도 추가적인 서비스를 개발하여
            회원에게 제공할 수 있습니다.
          </p>
          <p>
            ③ 회사가 제공하는 앱의 사용은 무료입니다. 단, 회사가 제공한 서비스를
            통해 보조배터리를 이용할 경우 제10조에 따라 이용요금을 지불할 의무를
            가집니다.
          </p>
          <p>
            ④ 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절
            또는 운영상 상당한 이유가 있는 경우 서비스 제공을 일시적으로 중단할
            수 있습니다. 이 경우 회사는 회원에게 중단사실을 통지하여야 합니다.
            다만, 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에
            통지할 수 있습니다.
          </p>
          <p>
            ⑤ 회사는 서비스 제공에 필요한 경우 정기점검을 실시할 수 있으며,
            정기점검시간은 서비스 제공화면에 공지한 바에 따릅니다
          </p>
          <p>
            <strong>제 10 조 (요금 등)</strong>
          </p>
          <p>
            ① 회사가 제공한 서비스를 통해 보조배터리를 이용하는 경우, 회사는
            회원에게 해당 요금을 청구합니다.
          </p>
          <p>
            ② 요금은 곧 “이용 요금”을 말하며 회원 가입 완료 후에만 보조배터리
            이용이 가능합니다.
            <br />
            ③ 회사는 서비스에 적용되는 요금을 앱을 통해 회원에게 통지합니다.
            <br />
            ④ 경우에 따라 경비 산정 기준은 변경될 수 있으며, 이에 대해서는
            회원이 알고 있어야 할 책임이 있습니다.
            <br />
            ⑤ 서비스와 관련하여 발생한 미납경비, 손해배상 등 회원의 회사에 대한
            채무가 모두 정산될 때까지, 해당 회원의 서비스 사용이 중지되며, 그
            채무가 일정기간 계속하여 변제되지 않을 경우에는 해당 회원의
            회원자격이 박탈될 수 있습니다. 서비스 사용 중지 또는 회원자격 박탈에
            대한 판단 기준은 회사의 약관 및 이용정책에 근거합니다.
            <br />
            ⑥ 회원이 본 약관 및 위 각 조항을 준수하지 않았을 경우, 회사는 본
            약관 및 이용정책에 따라 손해배상 금액 등 각종 요금을 부과하는 것
            외에 계약을 해지할 수 있는 권리를 가집니다.
            <br />⑦ 회사는 본 서비스와 관련하여 발생한 미납경비, 손해배상 등
            회원의 회사에 대한 채무가 정산되지 않을 경우 회원을 상대로 보전처분,
            본안소송제기, 강제집행절차의 착수 등 채무 변제를 위한 법적 조치에
            들어갈 수 있습니다.
          </p>
          <p>
            <strong>제 11 조 (서비스 이용)</strong>
          </p>
          <p>
            ① 회원이 서비스를 통하여 보조배터리를 이용함에 있어서는 본 약관에
            규정된 내용을 모두 준수하여야 합니다.
          </p>
          <p>
            ② 서비스 이용시 고의 내지 과실로 인하여 본조 제1항에 규정된 본 약관
            내용을 위반하는 회원은 본 약관상 규정된 불이익을 받게 되며, 회사는
            이에 대하여 어떠한 책임도 부담하지 않습니다.
          </p>
          <p>
            <strong>제 12 조 (자동결제의 이용)</strong>
          </p>
          <p>① 회사는 회원의 편의를 위해 자동 결제를 제공합니다.</p>
          <p>
            ② 결제 수단을 등록한 회원은 보조배터리 이용 요금을 별도의 인증과정
            없이 자동으로 결제하겠다는 의사표시를 한 것으로 봅니다.
          </p>
          <p>
            ③ 결제 시점에 회원이 등록한 결제 수단의 유효성, 한도 등의 문제로
            결제가 실패한 경우에 미수로 처리되며, 미수 결제가 정상적으로
            결제되기 전까지는 해당 회원은 서비스 이용이 제한됩니다.
          </p>
          <p>
            ④ 결제 시점에 시스템 장애로 인하여 결제 실패가 된 경우에는 시스템
            정상화가 된 시점에 결제를 진행합니다.
          </p>
          <p>
            ⑤ 미수가 발생한 경우, 매일 1회 자동 결제 시도를 진행합니다. 미수를
            위한 결제 시도 시에는 회원에게 별도로 고지하지 않습니다.
          </p>
          <p>
            <strong>제 13 조 (쿠폰)</strong>
          </p>
          <p>
            ③ 쿠폰은 회사가 프로모션 용도로 회원에게 무상으로 제공하는 것으로서,
            회사의 서비스 이용 요금 관련해서만 사용 가능하며, 정해진 조건에 따라
            이용 요금의 전부 또는 일부를 지불 할 수 있는 할인 쿠폰을 말합니다.
          </p>
          <p>
            ④ 쿠폰의 부여 및 사용에 관한 사항은 회사가 정한 이용정책에 따르며
            회사는 앱 또는 홈페이지를 통하여 이를 회원에게 안내합니다.
            <br />
            ⑤ 쿠폰은 명시된 사용기간 내에 사용할 수 있으며 회사는 언제든지
            임의로 회수하거나 비활성화 할 수 있습니다.
            <br />
            ⑥ 쿠폰은 회원 간 거래 및 양도가 불가능하며 어떠한 경우에도 현금으로
            환불되거나 타인에게 양도되지 않습니다.
            <br />⑦ 회사는 언제든지 회원의 쿠폰 정보를 검색할 수 있으며, 회원의
            제반 실적이 잘못된 경우에는 이를 임의로 정정할 수 있습니다. 또한
            회원이 본 약관 및 이용정책 등 제반 규정을 위반 또는 악용하거나
            부당한 방법으로 쿠폰을 적립한 경우, 회사는 회원의 서비스 이용을
            정지할 수 있으며, 회원의 적립된 쿠폰을 말소할 수 있습니다.
          </p>
          <p>
            <strong>제 13 조 (정보의 제공 및 광고의 게재)</strong>
          </p>
          <p>
            ① 회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보를
            서비스 내 공지사항 또는 서비스 화면, 메시지, 전자우편 등의 방법으로
            회원에게 제공할 수 있습니다.
            <br />② 회사는 서비스의 운영과 관련하여 서비스 화면 등에 광고를
            게재할 수 있습니다.
          </p>
          <p>
            <strong>제 14 조 (환불)</strong>
          </p>
          <p>
            ① 시스템 오류 등 회원의 귀책사유 없이 초과결제 또는 중복결제 등의
            문제가 발생하였을 경우, 회사는 해당 이용요금 부분을 회원에게
            환불합니다.
            <br />② 제1항의 환불을 하는 경우 회사는 회원이 지불한 결제수단과
            동일한 방법으로 환불합니다. 다만, 동일한 방법으로 환불이 불가능할
            경우에는 현금 등 다른 수단으로 환불할 수 있습니다.
          </p>
          <p>
            <strong>제 15 조 (도난, 분실, 파손)</strong>
          </p>
          <p>
            보조배터리 도난 또는 분실 그리고 보조배터리를 제 기능을 할 수 없도록
            파손한 경우 회원은 대여 시작일 기준 6일 후 금액 청구되며, 소유권이
            회원에게 자동으로 이전됩니다.
          </p>
          <p>
            <strong>제 16 조 (정보의 제공 및 광고의 게재)</strong>
          </p>
          <p>
            ① 회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보를
            서비스 내 공지사항 또는 서비스 화면, 메시지, 전자우편 등의 방법으로
            회원에게 제공할 수 있습니다.
            <br />② 회사는 서비스의 운영과 관련하여 서비스 화면 등에 광고를
            게재할 수 있습니다.
          </p>
          <p>
            <strong>제 17 조 (회사의 의무)</strong>
          </p>
          <p>
            ①회사는 관련법과 본 약관이 금지한 행위 또는 미풍양속에 반하는 행위를
            하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을
            다하여 노력합니다.
            <br />
            ② 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보
            포함)보호를 위해 보안시스템을 갖추어야 하며 개인정보취급방침을
            공시하고 준수합니다.
            <br />
            ③ 회사가 제공하는 서비스로 인하여 회원에게 상해, 손해가 발생한 경우
            그러한 상해, 손해가 회사의 고의나 중과실에 기해 발생한 경우에 한하여
            회사에서 책임을 부담합니다.
            <br />④ 회사는 정보통신망법, 통신비밀보호법, 전기통신사업법 등
            서비스의 운영, 유지와 관련 있는 법령을 준수합니다.
          </p>
          <p>
            <strong>제 18 조 (회원의 의무)</strong>
          </p>
          <p>
            ① 회원은 이용 시간(보조배터리를 대여한 시점부터 반납한 시점까지) 중
            발생하는 보조배터리에 대한 손해를 포함하여 모든 책임을 회원이
            부담합니다.
          </p>
          <p>
            ② 회원은 서비스 이용에 필요한 아이디, 비밀번호, 결제정보 등을
            안전하게 기밀로 유지해야 합니다. 회원이 자신의 아이디, 비밀번호,
            결제정보 등의 관리를 소홀히 하여 발생하는 모든 책임은 회원 본인에게
            있습니다.
          </p>
          <p>
            ③ 회원 가입 및 서비스 이용과 관련하여 회원이 입력한 정보 및 그
            정보와 관련하여 발생한 책임과 불이익은 전적으로 회원이 부담하여야
            합니다.
          </p>
          <p>
            ④ 회원은 서비스를 이용 하기 전에 서비스 조건을 확인해야 합니다.
            조건을 확인하지 않고 서비스를 이용함으로써 발생하는 모든 손실과
            손해에 대한 책임은 회원 본인에게 있습니다.
          </p>
          <p>
            ⑤ 회원은 서비스 이용 시 반드시 본인 명의의 결제수단을 사용하여야
            하며, 타인의 결제수단을 임의로 사용해서는 안됩니다. 타인의
            결제수단을 임의로 사용함으로써 발생하는 회사, 결제수단의 적법한
            소유자, 전자결제대행사 등의 손실과 손해에 대한 모든 책임은 회원에게
            있습니다.
            <br />
            ⑥ 회원은 회사가 서비스를 안전하게 제공할 수 있도록 회사에 협조하여야
            하며, 회사가 회원의 본 약관 및 이용정책 위반행위를 발견하여 회원에게
            해당 위반행위에 대하여 소명을 요청할 경우 회원은 회사의 요청에 적극
            응하여야 합니다.
            <br />⑦ 회원은 분쟁이 발생한 경우 분쟁의 해결을 위하여 성실히
            임하여야 하며, 분쟁해결에 대한 회원의 불성실로 인하여 회사 또는 상대
            회원 또는 제3자에게 손해가 발생한 경우 회원은 이에 대한 책임을
            부담하여야 합니다.
          </p>
          <p>⑧ 회원은 다음 각 호의 행위를 하여서는 안 됩니다.</p>
          <ol>
            <li>서비스 가입 또는 회원정보 변경 시 허위내용을 등록하는 행위</li>
            <li>서비스 가입 또는 사용을 위해 타인의 정보를 도용하는 행위</li>
            <li>다른 회원의 개인정보 및 계정정보를 수집하는 행위</li>
            <li>서비스 이용시 본인이 아닌 타인이 보조배터리를 이용하는 행위</li>
            <li>고의로 보조배터리 및 스테이션을 훼손하는 행위</li>
            <li>
              회원의 계정을 타인이 사용하도록 권한을 부여하거나 양도 또는
              이전하는 행위
            </li>
            <li>서비스 이용 중 보조배터리를 방치하는 행위</li>
            <li>보조배터리를 훼손, 손상, 파손하거나 조작하는 행위</li>
            <li>개인적인 충전 수단 외의 목적으로 이용하는 행위</li>
            <li>올바른 네트워크의 작동을 손상시킬 수 있는 행위</li>
            <li>회사가 게시한 정보를 권한 없이 변경하는 행위</li>
            <li>
              회사로부터 서면 허가 없이 앱이나 기타 서비스의 내용 등 회사가
              게시한 정보를 복사하거나 배포하는 행위
            </li>
            <li>회사와 기타 제3자의 저작권 등 지적재산권을 침해하는 행위</li>
            <li>
              회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
            </li>
            <li>
              외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는
              정보를 서비스에 공개 또는 게시하는 행위
            </li>
            <li />
            <li>
              호환되지 않거나 권한을 부여 받지 않은 장치로 서비스나 앱을
              사용하는 행위
            </li>
            <li>
              본 약관 및 관련법령, 이용정책을 위반하여 회사, 상대 회원 또는
              제3자에게 손해를 끼치는 행위
            </li>
            <li>
              자신의 부당한 이익을 위해 회사의 정책을 이용하여 서비스나 앱을
              사용하는 행위
            </li>
            <li>그 외 어떤 방식으로든 서비스나 앱에 피해를 유발하는 행위</li>
            <li>기타 불법적이거나 부당한 행위</li>
          </ol>
          <p>
            ⑨ 회사는 회원이 제7항의 금지행위를 한 것으로 판단될 경우 서비스
            이용을 제한할 수 있으며, 이 때 발생하는 모든 책임은 회원이
            부담합니다.
            <br />
            제8항의 금지행위 여부에 대한 해석과 결정 권한은 회사에게 있습니다.
          </p>
          <p>
            <strong>제 19 조 (회원에 대한 통지)</strong>
          </p>
          <p>
            ① 회원에 대한 통지를 하는 경우 회사는 회원이 제공한 이메일 주소 또는
            SMS 등으로 할 수 있습니다.
            <br />
            ② 회사는 불특정 다수 회원에 대한 통지의 경우 서비스 게시판 등에
            게시함으로써 개별 통지에 갈음할 수 있습니다.
            <br />③ 회사가 상기와 같이 정상적으로 통지하였음에도 회원이 통지된
            내용을 확인하지 않음으로써 회원에게 발생한 불이익에 대해 회사는
            책임을 지지 않습니다.
          </p>
          <p>
            <strong>제 20 조 (개인정보 수집, 이용 및 보호의무)</strong>
          </p>
          <p>
            ① 회사는 서비스의 원활한 제공을 목적으로 개인정보를 수집 및
            이용합니다. 이를 위해서 회사는 회원에게 별도의 동의를 구합니다.
            <br />② 회사는 정보통신망법 등 관계 법령이 정하는 바에 따라 회원의
            개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에
            대해서는 관련법령 및 회사의 개인정보취급방침이 적용됩니다.
          </p>
          <p>
            <strong>제 21 조 (서비스 관리 책임)</strong>
          </p>
          <p>
            회사의 서비스 관리책임자의 성명, 소속부서, 직위 및 연락처는 다음과
            같습니다.
            <br />▣ 주식회사 반토
          </p>
          <ol>
            <li>성 명 : 손 승 환</li>
            <li>소 속 : 개발본부</li>
            <li>직 위 : CTO</li>
            <li>연락처: 010-6805-0623</li>
          </ol>
          <p>
            <strong>제 22 조 (개인정보의 동의 철회)</strong>
          </p>
          <p>
            회원은 서비스 해지(이용 중지의 통보)의 방법으로 회사의 개인정보의
            수집, 이용, 제공에 대한 동의를 언제든지 철회하실 수 있습니다.
          </p>
          <p>
            <strong>제 23 조 (개인정보의 보유기간 및 이용기간)</strong>
          </p>
          <p>
            회원의 개인정보는 회사가 서비스를 제공하는 기간 동안에 한하여 보유
            및 이용되며, 회사는 개인정보의 수집 및 이용목적을 달성한 때에는 당해
            개인정보를 지체 없이 파기합니다. 다만, 국세기본법, 법인세법,
            부가가치세법 기타 관계법령의 규정에 의하여 보존할 필요성이 있는
            경우에는 관계법령에 따라 보존합니다.
          </p>
          <p>
            <strong>제 24 조 (회원탈퇴 및 자격상실)</strong>
          </p>
          <p>
            ① 회원은 언제든지 이메일 등 기타 회사가 정한 방법으로 회원탈퇴를
            요청할 수 있으며, 회사는 회원의 요청에 따라 조속히 회원탈퇴에 필요한
            제반 절차를 수행합니다. 단, 회원에게 미수가 있을 경우에는 미수에
            대한 결제를 완료한 이후에 탈퇴 신청이 가능합니다.
            <br />② 회원이 다음 각 호에 해당하는 경우, 회사는 회원자격을
            상실시킬 수 있습니다.
          </p>
          <ol>
            <li>가입 신청 시에 허위 내용을 등록한 경우</li>
            <li>
              본 약관 및 관계법령에 위반되거나 공서양속에 반하는 행위를 하는 등
              회원자격을 유지시키는 것이 부적절하다고 판단되는 경우
            </li>
          </ol>
          <p>
            ③ 회원은 제2항에 따른 서비스 이용정지 기타 서비스 이용과 관련된
            이용제한에 대해 회사가 정한 절차에 따라 이의신청을 할 수 있으며,
            회사는 회원의 이의신청이 정당하다고 판단되는 경우 즉시 서비스 이용을
            재개합니다.
            <br />
            ④ 회원이 사망한 경우 회원 사망일에 회원자격이 상실되며, 제3자가
            사망자의 회원자격을 도용하여 행한 모든 행위는 유효한 것으로 인정되지
            않습니다.
            <br />
            ⑤ 회원 탈퇴 시 3개월간 회원 재가입이 제한됩니다. 단, 회사에서 허가한
            경우에는 재가입이 가능합니다.
            <br />⑥ 회원 탈퇴 시 회원이 보유한 쿠폰과 이용권 등 모든 권리는
            자동으로 소멸됩니다. 본 조 제5항에 따라 재가입한 경우에도 탈퇴 시
            소멸된 기존 쿠폰과 이용권 등은 복구되지 않습니다.
          </p>
          <p>
            ⑦ 회원이 결제하여 구매한 이용권한이나 회사가 무상으로 부여한
            이용권은 회원 탈퇴 시 소멸되며 어떤 경우에도 현금으로 환불되거나
            타인에게 양도되지 않습니다. 본 조 제5항에 따라 재가입한 경우에도
            탈퇴 시 소멸된 포인트는 다시 생성되지 않습니다.
          </p>
          <p>
            <strong>제 25 조 (저작권의 귀속 및 이용제한)</strong>
          </p>
          <p>
            ① 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에
            귀속합니다.
            <br />② 회원은 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙
            없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로
            이용하거나 제3자가 이용하도록 하여서는 안됩니다.
          </p>
          <p>
            <strong>제 26 조 (책임 제한)</strong>
          </p>
          <p>
            ① 회사는 천재지변 또는 이에 준하는 불가항력 및 회사의 귀책사유가
            아닌 사유로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에
            관한 책임이 면제됩니다.
            <br />② 회사는 회원의 귀책사유로 인한 서비스 이용의 장애 및 손해에
            대하여는 책임을 지지 않습니다.
          </p>
          <p>
            ③ 회사는 회원의 수익을 보장하지 않습니다.
            <br />
            ④ 회사는 회원이 서비스와 관련하여 제공한 정보 및 그 정보의 진실성
            또는 적법성 등 일체에 대하여 보증하지 않으며 그와 관련하여 어떠한
            책임도 부담하지 않습니다.
            <br />⑤ 회원이 법규를 위반함으로써 발생하는 모든 법적 책임은 회원
            본인에게 있습니다.
          </p>
          <p>
            ⑥ 회사는 회사에서 제공하는 보호프로그램에 명시된 한도 내에서
            보호프로그램 정책에 따라 책임을 부담하며, 한도를 초과하는 손해에
            대해서는 회원이 다른 회원 또는 제3자에 대한 책임을 직접 부담해야
            합니다.
            <br />⑦ 회사는 회원간 또는 회원과 제휴사 간의 중개자로서 회원이 본
            서비스를 이용하는 과정에서 발생한 회원 및 제 3자간의 분쟁을 포함하여
            도난, 폭행, 성범죄 등에 대하여 회사의 과실이 없는 한 책임을 지지
            않습니다.
          </p>
          <p>
            <strong>제 27 조 (서비스 종료)</strong>
          </p>
          <p>
            ① 회사가 서비스를 종료하고자 할 경우 회사는 서비스를 종료하고자 하는
            날로부터 3개월 이전에 본 약관 제3조 제2항에서 정한 방법으로 회원에게
            알려드립니다.
            <br />
            ② 본 조 제1항에 따라 서비스가 종료되는 경우 회사는 관계법령에 따라
            보유하고 있는 개인정보를 파기합니다.
            <br />③ 서비스가 종료되는 경우 회원이 쿠폰 등은 모두 자동
            소멸됩니다.
          </p>
          <p>
            <strong>제 28 조 (마케팅 수신 동의)</strong>
          </p>
          <p>
            본 약관에 동의함으로써 이메일, 문자, 푸시 알림을 통한 마케팅 정보
            수신에 동의하게 됩니다.
          </p>
          <p>
            <strong>제 29 조 (준거법 및 관할법원)</strong>
          </p>
          <p>
            본 약관에서 정하지 않은 사항과 본 약관의 해석에 대해서는
            대한민국법령 및 상관례에 따르며, 서비스 및 본 약관과 관련한 제반
            분쟁 및 소송은 회사가 소재하는 전속관할로 합니다.
          </p>
          <p>
            <strong>부 칙</strong>
          </p>
          <p>본 약관은 2019년 1월 1일부터 시행합니다.</p>
        </ol>
      </div>
    </div>
  );
}