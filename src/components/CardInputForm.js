import { Stack, TextField, Button } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import CustomCenterBox from "./CustomCenterBox";
import Payment from "payment";
import "react-credit-cards/es/styles-compiled.css";
import AgreeButton from "./AgreeButton";
import CancleButton from "./CancleButton";

const WhiteBorderTextField = styled(TextField)`
  label[data-shrink="false"] + .MuiInputBase-formControl {
    border: 1px solid white;
  }
  .MuiOutlinedInput-input {
    color: white;
  }
  label {
    color: white;
  }
  & label.Mui-focused {
    color: #00c853;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #00c853;
    }
    ,
    fieldset {
      border-color: white;
    }
  }
`;

function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case "dinersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
}

function formatExpirationDate(value) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}

function formatCVC(value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value);
  let maxLength = 4;

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number);
    maxLength = issuer === "amex" ? 4 : 3;
  }

  return clearValue.slice(0, maxLength);
}

function CardInputForm({ onSubmit, onClose }) {
  const [number, setNumber] = useState("");
  const [realNumber, setRealNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [realExpiry, setRealExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [focus, setFocus] = useState("");

  const expiryValidation = (value) => {
    const check = /^[0-1][1-2]\/[0-9]{2}$/;

    console.log(check.test(value));
    return check.test(value);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#0B0B0C",
        height: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ pt: "15%" }}>
        <Cards
          locale={{ valid: "유효기간" }}
          placeholders={{ name: "" }}
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </Box>

      <Box
        sx={{
          p: 3,
          pr: "15%",
          pl: "15%",
        }}
      >
        <form>
          <Stack spacing={3}>
            <WhiteBorderTextField
              inputProps={{
                maxLength: 19,
              }}
              type="tel"
              name="number"
              label="카드 번호"
              value={number}
              required
              onChange={(e) => {
                setRealNumber(clearNumber(e.target.value));
                setNumber(formatCreditCardNumber(e.target.value));
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />

            <WhiteBorderTextField
              inputProps={{
                maxLength: 5,
              }}
              type="tel"
              name="expiry"
              label="유효기간"
              value={expiry}
              placeholder="MM/YY"
              required
              onChange={(e) => {
                setRealExpiry(clearNumber(e.target.value));
                setExpiry(formatExpirationDate(e.target.value));
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />

            {/* <WhiteBorderTextField
              inputProps={{
                maxLength: 4,
                pattern: "d*",
              }}
              type="tel"
              name="cvc"
              label="CVC"
              value={cvc}
              required
              onChange={(e) => {
                setCvc(formatCVC(e.target.value));
              }}
              onFocus={(e) => setFocus(e.target.name)}
            /> */}

            <WhiteBorderTextField
              inputProps={{
                maxLength: 2,
              }}
              type="password"
              name="password"
              label="비밀번호 앞 2자리"
              value={password}
              required
              onChange={(e) => {
                setPassword(formatCVC(e.target.value));
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />

            <WhiteBorderTextField
              inputProps={{
                maxLength: 6,
              }}
              type="tel"
              name="birth"
              label="생년월일 6자리"
              placeholder="YYMMDD"
              value={birth}
              required
              onChange={(e) => {
                setBirth(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />

            {/* <WhiteBorderTextField
              type="text"
              name="name"
              label="별칭"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            /> */}
          </Stack>
        </form>
      </Box>

      <CustomCenterBox>
        <CancleButton text="취소" onClick={onClose} />
        <AgreeButton
          text="등록"
          onClick={() => {
            onSubmit(realNumber, realExpiry, birth, password);
          }}
        />
      </CustomCenterBox>
    </Box>
  );
}

export default CardInputForm;
