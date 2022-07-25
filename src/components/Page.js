import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@mui/material";

function Page({ title, children }) {
  return (
    <>
      <Container>
        <Header title={title} />
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Page;
