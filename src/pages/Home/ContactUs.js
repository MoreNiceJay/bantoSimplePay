import React, { useRef, useState } from "react";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import ContactUsImage from "../../assets/img/home/phone_battery1.png";

import { isMobile } from "react-device-detect";

import axios from "axios";

const StyledTextField = styled(TextField)(({ theme }) => ({
  div: {
    borderRadius: 0,
    border: "0px",
  },
}));

function ContactUs() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [interested, setInterested] = useState("");
  const [message, setMessage] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const formRef = useRef();

  const sendMail = async () => {
    const validate = formRef.current.reportValidity();

    if (validate) {
      const contents = {
        name,
        from: email,
        to: "sleeppturtle@gmail.com",
        subject: "문의 내용",
        html: `
      <div>
      <p>name : ${name}</p>
      <p>phoneNumber : ${phoneNumber}</p>
      <p>email : ${email}</p>
      <p>interested : ${interested}</p>
      <p>message : ${message}</p>
      </div>
      `,
      };

      try {
        setButtonDisabled(true);
        const { data } = await axios.post(
          "http://localhost:3009/banto2/app/mail/send",
          contents
        );

        console.log(data);

        if (data.messageId) {
          alert("메일이 전송됐습니다.");
          setName("");
          setPhoneNumber("");
          setEmail("");
          setInterested("");
          setMessage("");
        } else {
          alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
        }
        setButtonDisabled(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      p={4}
      sx={{ marginTop: { xs: 10, lg: 30 }, backgroundColor: "#E9E9EB" }}
    >
      <Grid item xs={12} lg={6}>
        <Box sx={{ pl: { lg: 7, xs: 0 }, pr: { lg: 4, xs: 0 } }}>
          <Typography
            fontSize={{ lg: 54, xs: 30 }}
            letterSpacing="0em"
            color="#BDBDBD"
            textAlign="left"
          >
            Contact Us
          </Typography>
          <form ref={formRef}>
            <StyledTextField
              fullWidth
              label="Name"
              margin="normal"
              variant="filled"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <StyledTextField
              fullWidth
              required
              label="Phone Number"
              type="number"
              margin="normal"
              variant="filled"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <StyledTextField
              fullWidth
              required
              label="E-mail"
              type="email"
              margin="normal"
              variant="filled"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <StyledTextField
              fullWidth
              label="Interested In"
              margin="normal"
              variant="filled"
              value={interested}
              onChange={(e) => {
                setInterested(e.target.value);
              }}
            />
            <StyledTextField
              fullWidth
              required
              multiline
              rows={4}
              label="Message"
              margin="normal"
              variant="filled"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <Button
              sx={{
                color: "white",
                width: isMobile ? "150px" : "222px",
                height: isMobile ? "50px" : "71px",
                background: "#333333",
                borderRadius: 0,
                fontSize: isMobile ? "12px" : "16px",
              }}
              variant="contained"
              onClick={sendMail}
              disabled={buttonDisabled}
            >
              SEND EMAIL
              <ArrowRightAltIcon />
            </Button>
          </form>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <img src={ContactUsImage} alt="" width="100%" />
      </Grid>
    </Grid>
  );
}

export default ContactUs;
