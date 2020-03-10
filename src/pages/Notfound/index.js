import React from "react";

import { Container, Title } from "./styled";

const NotFoundAnimation = () => {
  return (
    <lottie-player
      autoplay
      loop
      mode="normal"
      src="https://assets1.lottiefiles.com/packages/lf20_4DPcyu.json"
      style={{ width: "500px", height: "500px" }}
    ></lottie-player>
  );
};

const NotfoundPage = () => {
  return (
    <Container>
      <NotFoundAnimation />
      <Title>
        PÁGINA <br /> NÃO ENCONTRADA
      </Title>
    </Container>
  );
};

export default NotfoundPage;
